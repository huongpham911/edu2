# Hướng dẫn Deploy lên Dokploy

## 📝 Yêu cầu
- Docker đã được cài đặt
- Git repository đã được push lên GitHub
- Tài khoản Dokploy

### ⚠️ Lưu ý về Port
- **Container port**: 3000 (cả internal và external)
- **Dokploy**: Tự động detect port 3000
- **Local testing**: localhost:3000

## 🚀 Cách Deploy

### 1. Trên Dokploy Dashboard
1. Đăng nhập vào Dokploy
2. Tạo một project mới
3. Chọn "Deploy from Git"
4. Nhập URL repository: `https://github.com/huongpham911/edu2.git`
5. Chọn branch: `main`
6. Dokploy sẽ tự động detect Dockerfile
7. Dokploy sẽ tự động detect và map port 3000
   - Container Port: 3000
   - Public Ports: 80 (HTTP), 443 (HTTPS)
   - SSL: Tự động

### 2. Cấu hình Environment Variables (nếu cần)
```
NODE_ENV=production
REACT_APP_SITE_URL=https://sman3kutacane.my.id
REACT_APP_CONTACT_EMAIL=informasi@sman3kutacane.my.id
```

### 3. Cấu hình Domain
- Trong Dokploy, vào phần "Domains"
- Thêm domain: `sman3kutacane.my.id`
- Dokploy sẽ tự động tạo SSL certificate

## 🧪 Test Local với Docker

### Build và chạy container:
```bash
# Build image
docker build -t sman3-kutacane .

# Chạy container trên port 3000
docker run -p 3000:3000 sman3-kutacane
```

### Hoặc sử dụng docker-compose:
```bash
docker-compose up --build
```

Sau đó truy cập: http://localhost:3000

### 🔄 Giải thích Port Mapping
```
Local Development (npm start):     http://localhost:3001  (dev server)
Local Docker Test:               http://localhost:3000  (container)
Dokploy Production:              https://sman3kutacane.my.id
  - Flow: User(443) -> Dokploy SSL -> Container(3000)
```

## 📁 Cấu trúc Files Deploy
- `Dockerfile` - Multi-stage build với Nginx
- `nginx.conf` - Cấu hình Nginx với optimization
- `.dockerignore` - Loại trừ file không cần thiết
- `docker-compose.yml` - Cho test local

## ⚡ Tối ưu hóa
- Gzip compression được bật
- Static assets được cache 1 năm
- Security headers được thêm
- Health check endpoint: `/health`
- Support client-side routing (React Router)

## 🔧 Troubleshooting
- Nếu lỗi 404: Kiểm tra nginx config cho client-side routing
- Nếu images không load: Kiểm tra path trong code
- Nếu build failed: Kiểm tra node_modules và dependencies
