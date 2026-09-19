# Nguyên Tắc Quản Lý Commit Nhỏ (Micro-Commits & Tracking)

Bộ quy tắc này đóng vai trò như một **Rule** mặc định cho AI khi làm việc trong dự án. Bất cứ khi nào AI hoặc lập trình viên thực hiện xong một thay đổi (dù là nhỏ nhất), BẮT BUỘC phải tuân thủ quy trình dưới đây để tạo các "commit nháp" có đánh mã số, nhằm mục đích gộp (squash) lại thành một commit chính thức sau này. 

**LƯU Ý QUAN TRỌNG**: TẤT CẢ COMMIT MESSAGES VÀ NỘI DUNG LOG PHẢI ĐƯỢC VIẾT BẰNG TIẾNG ANH.

## 1. Tạo Commit ngay sau khi thay đổi (Micro-commit)
Mỗi khi code xong một tính năng, tạo xong một component, hoặc sửa xong một bug, AI phải tự động:
1. Thêm các file vừa thay đổi: `git add <file1> <file2>`
2. Tạo commit bằng tiếng Anh: `git commit -m "<Type>: <Short description in English>"`
   - *Trong đó <Type> có thể là: feat, fix, ui, chore, refactor...*

## 2. Ghi chép lại lịch sử vào File (Bằng Tiếng Anh)
Sau khi tạo git commit thành công, AI phải lấy **mã số (Commit Hash 7 ký tự)** của commit vừa tạo, và ghi nối tiếp (append) vào file theo dõi có tên: `.agents/commit-history.md`. (Nếu file chưa tồn tại thì tự động tạo).

**Cấu trúc ghi chép (Append vào cuối file):**
```markdown
### [ID: <Hash>] <Commit message in English>
- **Time**: <YYYY-MM-DD HH:mm:ss>
- **Details**: <Short explanation in English of what was done and which files changed>
```

*Ví dụ:*
```markdown
### [ID: 7a8b9c0] feat: build Settings UI
- **Time**: 2026-09-19 10:15:00
- **Details**: Created Input and Button components, and assembled the ProfileForm.
```

## 3. Quy trình gộp Commit (Squash) dựa trên Mã số
Khi người dùng đưa ra yêu cầu như: *"Hãy gộp các commit từ mã số A đến mã số B thành 1 commit thật sự"*, AI sẽ thực hiện:
1. Đọc file `.agents/commit-history.md` để kiểm tra danh sách các mã số.
2. Tổng hợp nội dung (chi tiết) của các thay đổi đó để làm Message cho commit cuối cùng.
3. Thực hiện gộp commit (thường sử dụng lệnh `git reset --soft <Mã số của commit liền trước đoạn cần gộp>` sau đó `git commit -m "Message tổng hợp"`).
4. Cập nhật lại hoặc làm sạch file `.agents/commit-history.md` cho chu kỳ làm việc tiếp theo.
