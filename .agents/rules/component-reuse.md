# Nguyên Tắc Thiết Kế và Tái Sử Dụng Component

Bộ quy tắc này đóng vai trò như một **Rule** mặc định cho AI và các lập trình viên khi làm việc trong dự án này. Bất cứ khi nào có yêu cầu xây dựng tính năng mới hoặc UI mới, hãy BẮT BUỘC tuân thủ các quy tắc dưới đây.

## 1. Triết Lý Cốt Lõi (Core Philosophy)
- **DRY (Don't Repeat Yourself)**: Luôn tìm kiếm và ưu tiên tái sử dụng các component có sẵn trước khi code từ đầu.
- **Single Responsibility Principle (SRP)**: Mỗi component chỉ nên thực hiện một chức năng hiển thị hoặc một logic duy nhất. Tránh nhồi nhét quá nhiều logic khác nhau vào cùng một component.
- **Open/Closed Principle**: Component nên "đóng" đối với việc sửa đổi mã nguồn gốc (để không làm vỡ các nơi đang dùng nó) nhưng "mở" cho việc mở rộng (thông qua `props`, `children`, `slots`).

## 2. Quy Trình Quyết Định (Decision Workflow)

Mỗi khi được yêu cầu tạo một UI mới, hãy thực hiện tuần tự các bước sau:

### Bước 1: Khảo Sát (Scout)
Trước khi viết dòng code UI nào, hãy kiểm tra hệ thống component hiện tại:
- Quét trong thư mục `components/` (đặc biệt là `components/ui/`, `components/common/`).
- Sử dụng công cụ (grep, search) để tìm tên các component có thể liên quan (vd: tìm "Button", "Card", "Table", "Modal").

### Bước 2: Đánh Giá & Quyết Định (Evaluate)
Dựa trên kết quả khảo sát, đưa ra quyết định:
1. **Tái sử dụng nguyên bản (Reuse As-Is)**: 
   - Điều kiện: Component có sẵn đáp ứng 100% về giao diện và chức năng.
   - Hành động: Import và sử dụng ngay lập tức, không thay đổi mã nguồn component.
2. **Nâng cấp / Mở rộng (Upgrade / Extend)**: 
   - Điều kiện: Component hiện tại giống 70%-90% so với thiết kế mới, chỉ thiếu một vài trạng thái (như màu sắc, icon mới, trạng thái loading/disabled).
   - Hành động: **KHÔNG viết đè** hay xóa logic cũ. Hãy thêm các `props` mới (bắt buộc phải là *optional* / có giá trị default).
   - *Ví dụ:* Nâng cấp `Button` bằng cách thêm prop `variant="outline"` thay vì tạo một `OutlineButton` mới.
3. **Phân tách (Extract)**:
   - Điều kiện: Component cũ quá phức tạp hoặc chứa cả logic hiển thị lẫn nghiệp vụ (call API) khiến khó tái sử dụng.
   - Hành động: Bóc tách phần UI dùng chung thành một "Dumb Component" (chỉ nhận props và emit event), giữ phần logic ở một "Smart Component" bên ngoài.
4. **Tạo mới (Create)**:
   - Điều kiện: Hoàn toàn không có component nào tương tự, hoặc việc cố gắng nhét thêm props vào một component có sẵn khiến nó biến thành "đống rác" (chứa quá nhiều if/else phức tạp, prop hell).
   - Hành động: Tạo component mới, tuân thủ các quy tắc thiết kế chung.

## 3. Tiêu Chuẩn Nâng Cấp Component Cũ
Khi quyết định sửa đổi một component có sẵn, BẮT BUỘC tuân thủ:
- **Tính tương thích ngược (Backward Compatibility)**: Bất kỳ prop nào mới thêm vào đều phải là `optional` (dấu `?` trong TypeScript) và không được làm thay đổi giao diện hoặc logic của những nơi đang sử dụng component này trước đó.
- **Sử dụng Variants**: Thay vì dùng hàng đống boolean props (vd: `isPrimary`, `isSmall`, `isDanger`), hãy gom chúng lại thành các biến thể. Có thể sử dụng các thư viện như `class-variance-authority` (CVA) với các props như `variant` (primary/secondary/danger) và `size` (sm/md/lg).
- **Decoupling (Tách rời logic)**: UI components (đặt trong thư mục UI/Common) TUYỆT ĐỐI KHÔNG chứa logic nghiệp vụ (không gọi API, không đọc trực tiếp global state như Redux/Zustand). Mọi dữ liệu phải được truyền qua `props` và hành động đẩy ra ngoài qua các callback function (`onAction`, `onClick`, `onChange`).

## 4. Hành Động Tiêu Chuẩn Cho Agent / AI
Bất cứ khi nào Agent nhận được task liên quan đến UI, AI cần tự độc thoại nội tâm hoặc hành động như sau:
1. "Trước khi tạo UI, tôi sẽ tìm xem đã có component nào phục vụ việc này chưa trong `components/`."
2. "Tôi đã tìm thấy component `[Tên]`. Nó thiếu prop `[X]`. Tôi sẽ tiến hành thêm prop `[X]` (optional) vào để tái sử dụng mà không làm hỏng code hiện tại."
3. "Tôi sẽ sử dụng component này ở giao diện đang code."
