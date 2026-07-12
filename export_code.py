import os

# Các định dạng file muốn gom
extensions = ('.py', '.jsx', '.js', '.css', '.json', '.html')
# Các thư mục cần loại bỏ (để tránh file rác)
exclude_dirs = ['node_modules', 'venv', '.git', 'build', 'dist']

with open('SouLeaf_Full_Code.txt', 'w', encoding='utf-8') as outfile:
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file.endswith(extensions):
                filepath = os.path.join(root, file)
                outfile.write(f"\n{'='*50}\n")
                outfile.write(f" FILE: {filepath}\n")
                outfile.write(f"{'='*50}\n\n")
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as infile:
                    outfile.write(infile.read())
                outfile.write("\n\n")

print("Đã tạo file SouLeaf_Full_Code.txt thành công!")