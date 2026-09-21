# Báo Cáo Cấu Trúc Cơ Sở Dữ Liệu (Backend Schema Recommendations)

Tài liệu này phác thảo cấu trúc Thực thể (Entities) và Mối quan hệ (Relationships) chuẩn hóa dành cho Backend (Relational Database như PostgreSQL/MySQL) dựa trên các tính năng hiện tại của ứng dụng Frontend (CourseHub).

Các DTOs (Data Transfer Objects) ở Frontend hiện đang lưu trữ dữ liệu dưới dạng phẳng (phục vụ hiển thị), Backend cần chuẩn hóa (Normalize) thành các bảng sau:

---

## 1. Hệ Thống Người Dùng (Users & Roles)

### `users`
Bảng lưu trữ thông tin cơ bản của người dùng.
- `id` (UUID, Primary Key)
- `name` (String)
- `email` (String, Unique)
- `avatar_url` (String, Optional)
- `role` (Enum: `STUDENT`, `INSTRUCTOR`, `ADMIN`)
- `created_at` (Timestamp)

### `instructor_profiles`
Lưu trữ thông tin chi tiết dành riêng cho giảng viên (1-1 với `users`).
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `title` (String) - Vd: "Senior Web Developer"
- `bio` (Text)
- *Các trường tổng hợp (Aggregates có thể tính toán): `rating`, `students_count`, `courses_count`* (cần lưu trữ liệu và sẽ dùng event để cập nhật)

---

## 2. Hệ Thống Khóa Học (Courses & Curriculum)

### `courses`
Lưu trữ thông tin cấu hình và hiển thị của khóa học.
- `id` (UUID, Primary Key)
- `instructor_id` (UUID, Foreign Key -> `users.id`)
- `title` (String)
- `category` (String)
- `level` (Enum: `Beginner`, `Intermediate`, `Advanced`)
- `price` (Decimal)
- `original_price` (Decimal, Optional)
- `discount_badge` (String, Optional)
- `image_url` (String)
- `duration_minutes` (Int)
- `about` (Text)
- `what_you_will_learn` (JSON / Array of Strings)
- `requirements` (JSON / Array of Strings)
- `who_is_this_for` (JSON / Array of Strings)

### `modules` (Chương học)
Mỗi khóa học được chia thành nhiều chương.
- `id` (UUID, Primary Key)
- `course_id` (UUID, Foreign Key -> `courses.id`)
- `title` (String)
- `order_index` (Int) - Thứ tự hiển thị

### `lessons` (Bài học)
Mỗi chương có nhiều bài học.
- `id` (UUID, Primary Key)
- `module_id` (UUID, Foreign Key -> `modules.id`)
- `title` (String)
- `duration_minutes` (Int)
- `is_preview` (Boolean) - Cho phép học thử
- `video_url` (String)
- `order_index` (Int)

### `lesson_resources` (Tài liệu đính kèm)
Tài liệu liên kết với từng bài học.
- `id` (UUID, Primary Key)
- `lesson_id` (UUID, Foreign Key -> `lessons.id`)
- `title` (String)
- `type` (Enum: `PDF`, `GITHUB`, `LINK`)
- `url` (String)

### `course_reviews`
Đánh giá khóa học từ học viên.
- `id` (UUID, Primary Key)
- `course_id` (UUID, Foreign Key -> `courses.id`)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `rating` (Int: 1-5)
- `content` (Text)
- `created_at` (Timestamp)

---

## 3. Hệ Thống Học Tập (My Learning & Progress)

### `enrollments`
Lưu trạng thái tham gia khóa học của học viên. (Dữ liệu cho tính năng My Learning).
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `course_id` (UUID, Foreign Key -> `courses.id`)
- `status` (Enum: `IN_PROGRESS`, `COMPLETED`)
- `progress_percent` (Int: 0-100)
- `enrolled_at` (Timestamp)

### `lesson_progress`
Theo dõi trạng thái hoàn thành và ghi chú cá nhân của từng bài học.
- `id` (UUID, Primary Key)
- `enrollment_id` (UUID, Foreign Key -> `enrollments.id`)
- `lesson_id` (UUID, Foreign Key -> `lessons.id`)
- `is_completed` (Boolean)
- `notes` (Text) - Ghi chú cá nhân của học viên cho bài này

---

## 4. Hệ Thống Bài Tập (Assignments)

### `assignments`
Đề bài tập do giảng viên tạo.
- `id` (UUID, Primary Key)
- `course_id` (UUID, Foreign Key -> `courses.id`)
- `title` (String)
- `due_date` (Timestamp)
- `total_score` (Int)

### `assignment_submissions`
Bài nộp thực tế của sinh viên (Frontend DTO gộp chung phần này và phần trên).
- `id` (UUID, Primary Key)
- `assignment_id` (UUID, Foreign Key -> `assignments.id`)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `status` (Enum: `PENDING`, `SUBMITTED`, `GRADED`, `LATE`)
- `grade` (Int, Optional)
- `instructor_feedback` (Text, Optional)
- `submission_notes` (Text, Optional)
- `submitted_at` (Timestamp)

### `submission_files`
Các file đính kèm trong bài nộp.
- `id` (UUID, Primary Key)
- `submission_id` (UUID, Foreign Key -> `assignment_submissions.id`)
- `name` (String)
- `url` (String)

---

## 5. Hệ Thống Mở Rộng Khác (Misc)

### `certificates`
Chứng chỉ hoàn thành khóa học.
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `course_id` (UUID, Foreign Key -> `courses.id`)
- `issue_date` (Timestamp)
- `certificate_url` (String)

### `notifications`
Thông báo hệ thống.
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `title` (String)
- `message` (Text)
- `type` (String) - vd: `SYSTEM`, `COURSE_UPDATE`, `ACHIEVEMENT`
- `is_read` (Boolean)
- `created_at` (Timestamp)

### `bookmarks` (Saved Items)
Tính năng lưu lại bài học / khóa học.
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key -> `users.id`)
- `item_type` (Enum: `COURSE`, `LESSON`)
- `item_id` (UUID) - ID của Course hoặc Lesson tương ứng
- `collection_name` (String) - Nhóm bộ sưu tập (mặc định: "Saved")

---

## Lời Khuyên Cho Team Backend
- **Data Transfer Objects (DTO):** Khi tạo các API Endpoint (ví dụ: `GET /api/v1/courses/my-learning`), Backend cần sử dụng cú pháp `JOIN` các bảng `enrollments` và `courses` để trả về đúng cấu trúc Flat JSON (gồm cả course title, image và tiến độ) giống y hệt như các Type trong thư mục `src/features/mylearning/types/index.ts` ở Frontend.
- **Computed/Aggregate Fields:** Các trường như `students`, `ratingCount`, `rating` trong bảng `courses` nên được tính toán (Trigger/Cronjob) và cache lại thay vì count realtime mỗi lần query để tối ưu hiệu suất.
