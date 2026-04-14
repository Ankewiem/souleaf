from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
CORS(app) # Cho phép React web gọi dữ liệu

# Tải hệ thống mô hình đã train
master_system = joblib.load('master_ai_system.pkl')

# Lấy các thành phần từ dictionary
rf_cgpa = master_system['rf_cgpa']
rf_burnout = master_system['rf_burnout']
log_dep = master_system['log_dep']
log_sui = master_system['log_sui']
gmm = master_system['gmm']
scaler = master_system['scaler']
encoders = master_system['encoders']
cluster_dict = master_system['cluster_dict']

# Mapping dictionaries for categorical variables (Synchronized with Jupyter Notebook LabelEncoders)
gender_map = {
    'Nam': 1, 'nam': 1, 'Male': 1, 'male': 1,
    'Nữ': 0, 'nữ': 0, 'Female': 0, 'female': 0,
    'Khác': 1, 'khác': 1, 'Other': 1, 'other': 1
}
sleep_map = {'less-5': 0, '5-6': 1, '7-8': 2, 'more-8': 3, 'other': 1}
dietary_map = {'healthy': 2, 'average': 1, 'unhealthy': 0, 'other': 1}
family_map = {'yes': 1, 'no': 0, 'unsure': 0}

def safe_transform(encoder, values):
    """Safely transform categorical values with fallback to 0 for unseen labels"""
    try:
        return encoder.transform(values)
    except ValueError as e:
        print(f"Warning: {e}")
        # For unseen labels, use the first class (index 0)
        return [0] * len(values)

@app.route('/predict', methods=['POST'])
def predict():
    # 1. Nhận dữ liệu người dùng điền từ React web
    data = request.json
    
    # 2. Map incoming React JSON data to required format
    # Convert to Title Case for Degree and Profession to match training data
    degree_formatted = data['degree'].title() if data['degree'] else 'Other'
    profession_formatted = data['profession'].title() if data['profession'] else 'Other'
    
    mapped_data = {
        'Gender': gender_map.get(data['gender'], 0),
        'Age': float(data['age']),
        'Degree': degree_formatted,
        'Profession': profession_formatted,
        'Sleep Duration': sleep_map.get(data['sleepDuration'], 0),
        'Dietary Habits': dietary_map.get(data['dietaryHabits'], 0),
        'Financial Stress': float(data['financialStress']),
        'Family History of Mental Illness': family_map.get(data['familyHistory'], 0),
        'Academic Pressure': float(data['academicPressure']),
        'Study Satisfaction': float(data['studySatisfaction'])
    }
    
    # 3. Tạo input_df
    input_df = pd.DataFrame([mapped_data])
    
    # 4. Apply LabelEncoder for 'Profession' and 'Degree' with error handling
    input_df['Profession'] = safe_transform(encoders['Profession'], input_df['Profession'])
    input_df['Degree'] = safe_transform(encoders['Degree'], input_df['Degree'])
    
    # 5. Create dummy dataframe with all columns scaler expects
    scale_cols = ['Age', 'Academic Pressure', 'Work Pressure', 'CGPA', 'Study Satisfaction', 'Job Satisfaction', 'Work/Study Hours', 'Financial Stress', 'Sleep Duration']
    dummy_df = pd.DataFrame(np.zeros((1, len(scale_cols)), dtype=float), columns=scale_cols)
    
    # Insert available user data into dummy dataframe
    dummy_df.loc[0, 'Age'] = mapped_data['Age']
    dummy_df.loc[0, 'Academic Pressure'] = mapped_data['Academic Pressure']
    dummy_df.loc[0, 'Study Satisfaction'] = mapped_data['Study Satisfaction']
    dummy_df.loc[0, 'Financial Stress'] = mapped_data['Financial Stress']
    dummy_df.loc[0, 'Sleep Duration'] = mapped_data['Sleep Duration']
    
    # Run scaler on dummy dataframe
    dummy_scaled = scaler.transform(dummy_df)
    
    # Extract scaled values back to input_df for model predictions
    input_df['Age'] = dummy_scaled[0, 0]  # Age
    input_df['Academic Pressure'] = dummy_scaled[0, 1]  # Academic Pressure
    input_df['Study Satisfaction'] = dummy_scaled[0, 4]  # Study Satisfaction
    input_df['Financial Stress'] = dummy_scaled[0, 7]  # Financial Stress
    input_df['Sleep Duration'] = dummy_scaled[0, 8]  # Sleep Duration
    
    # 6. Run predictions
    pred_cgpa_raw = rf_cgpa.predict(input_df)[0]
    pred_burnout = rf_burnout.predict(input_df)[0]  # Already on 0-100 scale, no multiplication needed
    prob_dep = log_dep.predict_proba(input_df)[0][1]  # Probability of depression
    prob_sui = log_sui.predict_proba(input_df)[0][1]  # Probability of suicide
    
    # 7. Apply CGPA Penalty/Bonus Guardrails
    penalty = 0.0
    bonus = 0.0
    
    # Penalties
    if mapped_data['Study Satisfaction'] <= 2.0:
        penalty += 1.5
    
    if prob_dep > 0.5 or pred_burnout > 70.0:
        penalty += 1.0
    
    if mapped_data['Sleep Duration'] == 0 or mapped_data['Dietary Habits'] == 0:  # 0 = 'Less than 5 hours' or 'Unhealthy'
        penalty += 0.5
    
    # Bonuses
    if mapped_data['Study Satisfaction'] >= 4.0:
        bonus += 0.8
    
    if mapped_data['Sleep Duration'] >= 2 and mapped_data['Dietary Habits'] == 2:  # >=2 = '7-8 hours' or more, 2 = 'Healthy'
        bonus += 0.5
    
    if mapped_data['Academic Pressure'] <= 2.0 and prob_dep < 0.3:
        bonus += 0.3
    
    # Apply penalty and bonus with bounds
    final_cgpa = max(4.0, min(10.0, pred_cgpa_raw - penalty + bonus))
    
    # 8. Create 5-feature dataframe for GMM with exact expected columns
    # Extract scaled features from input_df
    academic_pressure_scaled = input_df['Academic Pressure'].iloc[0]
    study_satisfaction_scaled = input_df['Study Satisfaction'].iloc[0]
    sleep_duration_scaled = input_df['Sleep Duration'].iloc[0]
    financial_stress_scaled = input_df['Financial Stress'].iloc[0]
    
    # Scale final_cgpa using dummy_df trick
    cgpa_dummy = pd.DataFrame(np.zeros((1, len(scale_cols)), dtype=float), columns=scale_cols)
    cgpa_dummy.loc[0, 'CGPA'] = final_cgpa
    cgpa_scaled = scaler.transform(cgpa_dummy)[0, scale_cols.index('CGPA')]
    
    # Create gmm_features with exactly 5 columns in correct order
    gmm_features = pd.DataFrame([[
        academic_pressure_scaled,  # Academic Pressure
        cgpa_scaled,               # CGPA
        study_satisfaction_scaled,   # Study Satisfaction
        sleep_duration_scaled,       # Sleep Duration
        financial_stress_scaled      # Financial Stress
    ]], columns=['Academic Pressure', 'CGPA', 'Study Satisfaction', 'Sleep Duration', 'Financial Stress'])
    
    # 9. Run GMM prediction
    cluster_probs = gmm.predict_proba(gmm_features)
    dominant_id = cluster_probs.argmax()
    
    # 10. Fetch cluster information
    cluster_info = cluster_dict[dominant_id]
    cluster_name = cluster_info['name']
    
    # 11. Apply Clinical Override for Group Clusters
    if prob_sui >= 0.5 or prob_dep >= 0.6:
        if cluster_name == "Cân bằng lý tưởng":
            cluster_name = "Gánh nặng bủa vây"
    
    if final_cgpa < 6.0 and mapped_data['Study Satisfaction'] <= 2.5:
        if cluster_name == "Cân bằng lý tưởng":
            cluster_name = "Mất định hướng"
    
    # 12. Return structured JSON response
    return jsonify({
        "status": "success",
        "cgpa": final_cgpa,
        "burnout_index": pred_burnout,
        "depression_risk": prob_dep,
        "suicide_risk": prob_sui,
        "cluster_name": cluster_name,
        "cluster_advice": cluster_info['advice'],
        "cluster_mess": "Generate a short summary based on risks"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)), debug=False)