import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Quiz() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Thông tin định danh
    gender: '',
    age: 25,
    degree: '',
    profession: '',
    
    // Chỉ số lối sống
    sleepDuration: '',
    dietaryHabits: '',
    
    // Áp lực ngoại cảnh
    financialStress: 5,
    familyHistory: '',
    
    // Cảm nhận bản thân
    academicPressure: 5,
    studySatisfaction: 5
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://souleaf.onrender.com/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if(data.status === 'success') {
            navigate('/results', { state: { predictionResult: data } });
        }
    } catch (error) {
        console.error("Lô khi kêtnôi vói AI:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#247D3C] hover:text-[#1a5e2d] mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại trang chủ
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bảng câu hỏi đánh giá trầm cảm
          </h1>
          <p className="text-lg text-gray-600">
            Vui lòng trả lời các câu hỏi dưới đây để nhận được đánh giá sức khỏe tinh thần của bạn.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Thông tin định danh */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-4 pb-2 border-b border-gray-300">
              Thông tin định danh
            </h2>
            
            {/* Gender */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">Giới tính</label>
              <div className="space-y-2">
                {['Nam', 'Nữ', 'Khác'].map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      checked={formData.gender === option}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-4 h-4 text-[#247D3C] focus:ring-[#247D3C] border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Age Slider */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Tuổi: <span className="text-[#247D3C] font-semibold">{formData.age}</span>
              </label>
              <input
                type="range"
                min="16"
                max="80"
                value={formData.age}
                onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#247D3C]"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>16</span>
                <span>80</span>
              </div>
            </div>

            {/* Degree Dropdown */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">Trình độ học vấn</label>
              <select
                value={formData.degree}
                onChange={(e) => handleInputChange('degree', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#247D3C] focus:border-transparent"
              >
                <option value="">Vui lòng chọn</option>
                <option value="high-school">Trung học phổ thông</option>
                <option value="college">Cao đẳng</option>
                <option value="university">Đại học</option>
                <option value="masters">Thạc sĩ</option>
                <option value="phd">Tiến sĩ</option>
                <option value="other">Khác</option>
              </select>
            </div>

            {/* Profession Dropdown */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">Nghề nghiệp</label>
              <select
                value={formData.profession}
                onChange={(e) => handleInputChange('profession', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#247D3C] focus:border-transparent"
              >
                <option value="">Vui lòng chọn</option>
                <option value="student">Học sinh/Sinh viên</option>
                <option value="employee">Nhân viên văn phòng</option>
                <option value="worker">Công nhân</option>
                <option value="freelancer">Freelancer</option>
                <option value="business">Doanh nhân/Kinh doanh</option>
                <option value="healthcare">Y tế/Chăm sóc sức khỏe</option>
                <option value="education">Giáo dục</option>
                <option value="technology">Công nghệ thông tin</option>
                <option value="unemployed">Không có việc làm</option>
                <option value="retired">Nghỉ hưu</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </div>

          {/* Chỉ số lối sống */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-4 pb-2 border-b border-gray-300">
              Chỉ số lối sống
            </h2>
            
            {/* Sleep Duration */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">Giờ ngủ*</label>
              <div className="flex flex-row gap-6">
                {[
                  { value: 'less-5', label: 'Ít hơn 5 giờ' },
                  { value: '5-6', label: '5-6 giờ' },
                  { value: '7-8', label: '7-8 giờ' },
                  { value: 'more-8', label: 'Nhiều hơn 8 giờ' },
                  { value: 'other', label: 'Khác' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="sleepDuration"
                      value={option.value}
                      checked={formData.sleepDuration === option.value}
                      onChange={(e) => handleInputChange('sleepDuration', e.target.value)}
                      className="w-4 h-4 text-[#247D3C] focus:ring-[#247D3C] border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Dietary Habits */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">Thói quen ăn uống</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'healthy', label: 'Lành mạnh' },
                  { value: 'average', label: 'Điều độ' },
                  { value: 'unhealthy', label: 'Không lành mạnh' },
                  { value: 'other', label: 'Khác' }
                ].map((option) => (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="dietaryHabits"
                      value={option.value}
                      checked={formData.dietaryHabits === option.value}
                      onChange={(e) => handleInputChange('dietaryHabits', e.target.value)}
                      className="hidden"
                    />
                    <span className={`inline-block px-4 py-2 border-2 rounded-md text-gray-700 transition-all ${
                      formData.dietaryHabits === option.value 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}>
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Áp lực ngoại cảnh */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-4 pb-2 border-b border-gray-300">
              Áp lực ngoại cảnh
            </h2>
            
            {/* Financial Stress */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Áp lực tiền bạc*: <span className="text-[#247D3C] font-semibold">{formData.financialStress}/5</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.financialStress}
                onChange={(e) => handleInputChange('financialStress', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-300"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Thấp</span>
                <span>Cao</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>

            {/* Family History */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Tiền sử gia đình *
              </label>
              <div className="flex flex-row gap-6">
                {[
                  { value: 'yes', label: 'Có' },
                  { value: 'no', label: 'Không' },
                  { value: 'unsure', label: 'Không chắc' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="familyHistory"
                      value={option.value}
                      checked={formData.familyHistory === option.value}
                      onChange={(e) => handleInputChange('familyHistory', e.target.value)}
                      className="w-4 h-4 text-[#247D3C] focus:ring-[#247D3C] border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Cảm nhận bản thân */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-green-600 mb-4 pb-2 border-b border-gray-300">
              Cảm nhận bản thân
            </h2>
            
            {/* Academic/Work Pressure */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Mức độ áp lực học tập/công việc*: <span className="text-[#247D3C] font-semibold">{formData.academicPressure}/5</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.academicPressure}
                onChange={(e) => handleInputChange('academicPressure', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-300"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Thấp</span>
                <span>Cao</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>

            {/* Study/Job Satisfaction */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Sự hài lòng với việc học/làm*: <span className="text-[#247D3C] font-semibold">{formData.studySatisfaction}/5</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={formData.studySatisfaction}
                onChange={(e) => handleInputChange('studySatisfaction', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-300"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Thấp</span>
                <span>Cao</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="submit"
              className="bg-[#2A8B44] hover:bg-[#237538] text-white text-xl font-semibold px-12 py-4 rounded-md transition-colors duration-200"
            >
              Nộp câu trả lời
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
