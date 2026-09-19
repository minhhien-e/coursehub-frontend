---
name: import-alias
description: Kỹ năng tự động phát hiện và chuyển đổi các import đường dẫn tương đối (relative paths) thành alias (@/) trong các file mã nguồn.
---

# Kỹ năng Import Alias

Khi được yêu cầu hoặc khi phát hiện trong dự án có sử dụng đường dẫn tương đối (ví dụ `../../../components/...`), bạn cần thực hiện:

1. **Quét mã nguồn**: Dùng công cụ `grep_search` hoặc chạy regex trong PowerShell để tìm kiếm các câu lệnh `import` sử dụng `../` hoặc `./` cho các thư mục dùng chung (như `components`, `utils`, `types`, `hooks`).
2. **Sửa mã nguồn**: Thay thế các đường dẫn đó thành `Alias` (ví dụ `@/components/ui/Button`).
3. **Kiểm tra cấu hình**: Đảm bảo file `vite.config.ts` và `tsconfig.app.json` đã thiết lập đúng alias `@/` trỏ tới `./src`.
4. **Commit**: Sau khi sửa lỗi hàng loạt, hãy chạy lệnh tạo **Micro-commit** bằng tiếng Anh (theo đúng `commit-workflow.md` của dự án).
