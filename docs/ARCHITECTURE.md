# KIẾN TRÚC HỆ THỐNG — FROM BURNOUT TO BURN BRIGHT (ULIS - VNU)

## 1. Tổng Quan Kiến Trúc
Hệ thống là một Single Page Application (SPA) hiện đại, tinh gọn và giàu tính tương tác, được xây dựng dựa trên Vanilla JavaScript ES6+, Tailwind CSS và FontAwesome, kết hợp kiến trúc Module hóa tách biệt giữa Dữ liệu (Data), Dịch vụ Logic (Services), Giao diện (Components) và Bộ điều phối (App Router/State Controller).

```text
web_uliss/
│
├── index.html                  # Main Entry HTML (Fonts, Tailwind, Modal Root)
│
├── css/
│   └── styles.css              # Custom Animations, Glassmorphism, Letter Theme, DnD Styles
│
├── js/
│   ├── data.js                 # Handbook Content, Quizzes, DnD Pairs, 11-Day Challenge Data
│   ├── services.js             # Auth, Streak, Progress, Favorites, Letters, Notification, Search Services
│   ├── components.js           # UI Components (Navbar, Dashboard, 4 Chapters, DnD, Letter, Search, ...)
│   └── app.js                  # Main Application Controller, Router, Lifecycle, Event Listeners
│
├── docs/
│   ├── FEATURE_CHECKLIST.md    # Bảng theo dõi tiến độ và trạng thái test
│   ├── ARCHITECTURE.md         # Tài liệu kiến trúc hệ thống
│   └── TEST_REPORT.md          # Báo cáo kiểm thử chi tiết
│
└── tests/
    └── e2e_test.py             # Playwright Automated End-to-End Test Suite
```

---

## 2. Thiết Kế Dữ Liệu & Cách Ly Người Dùng (Data Model & Multi-User Isolation)

Hệ thống hỗ trợ nhiều người dùng trên cùng một trình duyệt với cơ chế cách ly dữ liệu triệt để:

### 2.1 Database Schema (LocalStorage)
1. `bb_users_db`: Danh sách các tài khoản người dùng đã đăng ký.
   ```json
   [
     {
       "id": "usr_1720000000000",
       "name": "Nguyễn Văn ULIS",
       "email": "sinhvien@vnu.edu.vn",
       "password": "hashed_or_plain_for_client",
       "role": "Sinh viên ULIS",
       "createdAt": "2026-08-22T09:00:00.000Z"
     }
   ]
   ```

2. `bb_active_user`: Người dùng đang đăng nhập hiện tại (`null` nếu chưa đăng nhập).

3. `bb_userdata_<userId>`: Kho dữ liệu cá nhân hóa gắn liền với từng User ID:
   - **Progress**:
     - `lastActiveActivity`: `{ chapterId, sectionId, title, path, timestamp }`
     - `ch1`: `{ testResult: { score, timestamp, answers: [...], level, interpretation } }`
     - `ch2`: `{ readSections: [...], iceberg: { floating: [...], submerged: [...] } }`
     - `ch3`: `{ dndState: { pairs: { ... }, isCompleted: bool, score: number }, lusiAnswers: { ... }, energyMap: { 0: "green", ... }, pomodoro: { completedSessions: number } }`
     - `ch4`: `{ videoCompleted: bool, videoProgressSeconds: number, challenge11Days: { 1: { completed: bool, note: "" }, ... }, valueFlower: { 1: "", ... } }`
   - **Streak**:
     - `{ count: 7, lastActivityDate: "2026-08-22", history: ["2026-08-20", "2026-08-21", "2026-08-22"] }`
   - **Favorites**:
     - `[ { id: "fav_1", title: "...", chapterId: 2, category: "Mô hình Tảng băng", snippet: "...", path: "ch2" } ]`
   - **FutureLetters**:
     - `[ { id: "let_1", recipient: "Tôi của năm 4", content: "...", signature: "Nam", mood: "hopeful", createdAt: "...", unlockDate: "2026-12-31", sealed: true, isOpened: false } ]`
   - **Notifications / Email Inbox**:
     - `[ { id: "notif_1", type: "streak", title: "🔥 Nhắc nhở Streak", message: "...", date: "...", isRead: false, emailSent: true } ]`
   - **SentEmailCooldowns**:
     - `{ "streak_2026-08-22": 1724319600000, "inactivity_2026-08-22": 1724319600000 }`

---

## 3. Design System & UX Principles
- **Fonts**: 
  - `Josefin Sans`: Sử dụng cho Tiêu đề, Logo, Huy hiệu, Số đo lớn, Điểm số.
  - `Nunito`: Sử dụng cho Nội dung đọc, Bài tập, Form, Dialog, Nút bấm.
- **Bảng màu**:
  - Chủ đạo: Xanh Ngọc & Xanh Lục Bảo (`Emerald #059669`, `Teal #0d9488`) biểu trưng cho sự hồi sinh, bình an và năng lượng tinh thần tích cực.
  - Future Letter Tone: Pastel Hồng (`Pink #ec4899`, `#f472b6`) kết hợp Xanh Lá dịu dàng (`Emerald #10b981`), phong bì sáp niêm phong cổ điển.
  - Gamification: Lửa Cam Duolingo (`Orange #f97316`) cho Daily Streak.

---

## 4. Dịch Vụ & Xử Lý Logic Cốt Lõi (Core Services)

1. **AuthService**: Quản lý Đăng ký (kiểm tra trùng email, validate), Đăng nhập, Đăng xuất, Khách, và nạp dữ liệu riêng biệt.
2. **StreakService**:
   - Định nghĩa **Meaningful Activity**: Submit bài test Ch1, Hoàn thành đọc Ch2, Giải bài tập DnD Ch3, Hoàn thành 1 phiên Pomodoro, Check-in ngày Challenge Ch4, Niêm phong Thư tương lai.
   - So sánh ngày: Nếu ngày cuối là hôm nay -> không tăng; nếu là hôm qua -> `streak + 1`; nếu cách >= 2 ngày -> reset về 1.
3. **ProgressService**:
   - Tính toán % tiến độ của 4 chương và tổng tiến độ toàn bộ handbook.
   - Lưu trữ `lastActiveActivity` để nút "Tiếp tục" (Resume) luôn trỏ chính xác vào điểm dừng.
4. **FavoriteService**: Thêm / Xóa / Kiểm tra mục yêu thích không bị trùng lặp.
5. **FutureLetterService**:
   - Validate ngày tương lai (phải > ngày hiện tại).
   - Khóa nội dung sau khi niêm phong (Sealed).
   - Tự động kiểm tra điều kiện mở thư khi ngày hiện tại >= `unlockDate`.
6. **Notification & EmailService**:
   - Định kỳ kiểm tra: Inactivity (chưa hoàn thành), Streak Risk (chưa hoạt động trong ngày), Letter Ready (thư đã đến ngày mở).
   - Hệ thống chống spam / Duplicate prevention dựa trên key cooldown 24h.
   - Hiển thị Notification Bell + Trung tâm Hộp thư mô phỏng (Simulated Email Mailbox) để xem email thực tế được render ra sao.
7. **SearchService**:
   - Lập chỉ mục nội dung toàn bộ 4 chương, bài tập, công cụ.
   - Tìm kiếm thời gian thực với kết quả kèm đường dẫn điều hướng trực tiếp.
