import os
import zipfile

# Tên file nén đầu ra
zip_filename = 'SouLeaf_Project_Final.zip'

# Các thư mục rác cực nặng cần loại bỏ
exclude_dirs = {'node_modules', 'venv', '.git', 'build', 'dist', '__pycache__'}

print("Đang nén dữ liệu, bạn đợi chút nhé...")

with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('.'):
        # Bỏ qua các thư mục rác
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            # Bỏ qua chính file zip đang được tạo để tránh vòng lặp
            if file == zip_filename:
                continue
                
            file_path = os.path.join(root, file)
            # Đường dẫn lưu trong file zip (xóa tên ổ đĩa F:)
            arcname = os.path.relpath(file_path, start='.')
            zipf.write(file_path, arcname)

print(f"🎉 Đã đóng gói thành công file {zip_filename} siêu nhẹ!")