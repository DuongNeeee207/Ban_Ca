# AQUARIUM — Premium Ornamental Fish Showcase

Website trưng bày và giới thiệu các dòng cá cảnh cao cấp với phong cách thiết kế **Minimalist Luxury & Modern Aquarium**.

Đóng vai trò như một showroom / gallery nghệ thuật cá cảnh trực tuyến, người dùng có thể khám phá các loài cá thuần chủng, xem hình ảnh sắc nét, video bơi lội thực tế, thông số nước chuẩn mực và liên hệ trực tiếp người bán qua Zalo hoặc Hotline.

> **Lưu ý:** Website không có giỏ hàng, không thanh toán trực tuyến và không yêu cầu đăng nhập. Mục tiêu hướng tới trải nghiệm Trưng Bày – Khám Phá – Tư Vấn & Kết Nối Mua Hàng Trực Tiếp.

---

## 🌟 Tính Năng Nổi Bật

- **Hero Showcase:** Mở đầu với video bơi lội chất lượng cao, khẩu hiệu *"THE ART OF AQUARIUM — Discover the beauty beneath the water"*.
- **Interactive Bento Gallery:** Lưới cá bất đối xứng hiện đại. Khi hover:
  - Phóng to ảnh nhẹ nhàng (`scale-105`).
  - Tự động chuyển sang video chuyển động thực tế của cá (tự động muted).
  - Hiển thị tên cá, tên khoa học, giá tham khảo và nút "XEM CHI TIẾT".
- **Phân Loại 9 Danh Mục Tuyển Chọn:**
  - Cá Betta (Halfmoon Rosetail, Samurai Plakat)
  - Cá Koi (Kohaku Dainichi, Showa Sanshoku)
  - Cá Ranchu & Vàng (Calico Ngũ Sắc, Oranda Hạc Đỉnh Hồng)
  - Cá Guppy (Full Gold 24K Ribbon, Albino Blue Topaz)
  - Cá Neon (Cardinal Tetra Vua Nam Mỹ)
  - Cá Rồng (Huyết Long Super Red King F4, Kim Long Quá Bối 24K)
  - Cá Đĩa (Heckel Cross Red Turquoise, Albino White Diamond)
  - Cá Thủy Sinh (Altum Angelfish Orinoco, Apistogramma Triple Red)
  - Các dòng cá quý hiếm độc bản (Zebra Pleco L-046, Cửu Sừng Platinum)
- **Trang Chi Tiết Từng Cá Thể:**
  - Media Gallery với chuyển đổi Album ảnh & Trình phát Video thực tế (Play/Pause, Mute/Unmute).
  - Tích hợp Lightbox phóng to ảnh toàn màn hình.
  - Bảng thông số chi tiết: Kích thước, tuổi, nguồn gốc, giới tính, dinh dưỡng, tập tính.
  - Bảng thông số nước: Độ pH, Nhiệt độ, Độ cứng, Kích thước bể chuẩn.
  - Kênh liên hệ trực tiếp: **LIÊN HỆ MUA CÁ**, **CHAT ZALO (kèm mã cá tự động)**, **GỌI ĐIỆN**.
  - Đề xuất cá tương tự cùng danh mục.
- **Tìm Kiếm & Lọc Nhanh (Search Modal):** Tìm kiếm tức thì theo tên, tên La-tinh, nguồn gốc hoặc thẻ danh mục kèm phím tắt `Esc`.
- **Giới Thiệu & Liên Hệ:** Câu chuyện thương hiệu, quy trình kiểm dịch & thuần dưỡng 5 bước, cam kết bảo hành cá sống khỏe, bản đồ Google Maps và đặt lịch thưởng cá 1:1.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Typography:** Cinzel, Cormorant Garamond, Plus Jakarta Sans
- **Dữ liệu:** Tách biệt độc lập trong `src/data/` (dễ dàng mở rộng, thêm cá mới)

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu cầu:
- Node.js (phiên bản 18+ trở lên)
- Git

### Cài đặt:
```bash
# Clone repository
git clone https://github.com/DuongNeeee207/Ban_Ca.git

# Di chuyển vào thư mục dự án
cd Ban_Ca

# Cài đặt các gói phụ thuộc
npm install

# Khởi chạy máy chủ phát triển
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173/`

### Đóng gói sản xuất:
```bash
npm run build
```
