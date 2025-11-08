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

Xong!

