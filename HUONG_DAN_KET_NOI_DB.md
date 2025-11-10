# 🔌 Hướng dẫn kết nối Database MySQL

## Bước 1: Tạo file `.env`

Tạo file `.env` trong thư mục gốc:

```env
PORT=8081
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=qlycv
DB_PORT=3306
```

## Bước 2: Đảm bảo XAMPP đang chạy

- Start MySQL trong XAMPP Control Panel

## Bước 3: Tạo database trong MySQL

Mở phpMyAdmin (http://localhost/phpmyadmin) hoặc MySQL command line:

```sql
CREATE DATABASE IF NOT EXISTS qlycv CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## Bước 4: Chạy server

```bash
npm start
```

Nếu kết nối thành công, bạn sẽ thấy:
```
✅ Kết nối database MySQL thành công!
>>> Project is running on port: 8081
```

## Sử dụng kết nối database trong code

Import pool từ connectDB.js:

```javascript
import { pool } from './configs/connectDB.js';

// Ví dụ query
const [rows] = await pool.query('SELECT * FROM users');
console.log(rows);
```
// Nội dung export :

CREATE TABLE Role (
  MaRole INT AUTO_INCREMENT PRIMARY KEY,
  TenRole VARCHAR(50) NOT NULL
);

-- --------------------------------------------------------
-- Tạo bảng User
CREATE TABLE User (
  MaUser INT AUTO_INCREMENT PRIMARY KEY,
  TenDangNhap VARCHAR(100) NOT NULL,
  MatKhau VARCHAR(255) NOT NULL,
  Email VARCHAR(100),
  MaRole INT,
  FOREIGN KEY (MaRole) REFERENCES Role(MaRole)
);

-- --------------------------------------------------------
-- Tạo bảng Congty
CREATE TABLE Congty (
  MaCongty INT AUTO_INCREMENT PRIMARY KEY,
  TenCongty VARCHAR(100) NOT NULL,
  Diachi VARCHAR(255),
  Email VARCHAR(100),
  Sdt VARCHAR(20)
);

-- --------------------------------------------------------
-- Tạo bảng Nhatuyendung
CREATE TABLE Nhatuyendung (
  MaNTD INT AUTO_INCREMENT PRIMARY KEY,
  TenNTD VARCHAR(100) NOT NULL,
  Email VARCHAR(100),
  Sdt VARCHAR(20),
  MaCongty INT,
  FOREIGN KEY (MaCongty) REFERENCES Congty(MaCongty)
);

-- --------------------------------------------------------
-- Tạo bảng Hinhthuc
CREATE TABLE Hinhthuc (
  MaHinhthuc INT AUTO_INCREMENT PRIMARY KEY,
  TenHinhthuc VARCHAR(100) NOT NULL
);

-- --------------------------------------------------------
-- Tạo bảng Nganhnghe
CREATE TABLE Nganhnghe (
  MaNganhnghe INT AUTO_INCREMENT PRIMARY KEY,
  TenNganhnghe VARCHAR(100) NOT NULL
);

-- --------------------------------------------------------
-- Tạo bảng Tintuyendung
CREATE TABLE Tintuyendung (
  MaTin INT AUTO_INCREMENT PRIMARY KEY,
  Tieude VARCHAR(200) NOT NULL,
  Mota TEXT,
  Yeucau TEXT,
  Luong DECIMAL(12,2),
  Ngaydang DATE,
  MaNTD INT,
  MaHinhthuc INT,
  MaNganhnghe INT,
  FOREIGN KEY (MaNTD) REFERENCES Nhatuyendung(MaNTD),
  FOREIGN KEY (MaHinhthuc) REFERENCES Hinhthuc(MaHinhthuc),
  FOREIGN KEY (MaNganhnghe) REFERENCES Nganhnghe(MaNganhnghe)
);

-- --------------------------------------------------------
-- Tạo bảng Hoso
CREATE TABLE Hoso (
  MaHoso INT AUTO_INCREMENT PRIMARY KEY,
  TenHoso VARCHAR(100) NOT NULL,
  Trinhdo VARCHAR(100),
  Kinhnghiem TEXT,
  MaUser INT,
  FOREIGN KEY (MaUser) REFERENCES User(MaUser)
);

-- --------------------------------------------------------
-- Tạo bảng Trangthaiungtuyen
CREATE TABLE Trangthaiungtuyen (
  MaTrangthai INT AUTO_INCREMENT PRIMARY KEY,
  TenTrangthai VARCHAR(100) NOT NULL
);

-- --------------------------------------------------------
-- Tạo bảng Donungtuyen
CREATE TABLE Donungtuyen (
  MaDon INT AUTO_INCREMENT PRIMARY KEY,
  NgayUngtuyen DATE,
  MaTin INT,
  MaHoso INT,
  MaTrangthai INT,
  FOREIGN KEY (MaTin) REFERENCES Tintuyendung(MaTin),
  FOREIGN KEY (MaHoso) REFERENCES Hoso(MaHoso),
  FOREIGN KEY (MaTrangthai) REFERENCES Trangthaiungtuyen(MaTrangthai)
);



Xong!

