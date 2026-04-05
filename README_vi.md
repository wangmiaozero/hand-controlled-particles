# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <strong>Tiếng Việt</strong> |
  <a href="./README_ar.md">العربية</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.4-42b883?style=flat-square&logo=vue.js" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Three.js-0.160-black?style=flat-square&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/MediaPipe-Hands-4285F4?style=flat-square&logo=google" alt="MediaPipe" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.1-646cff?style=flat-square&logo=vite" alt="Vite" />
</p>

<p align="center">
  🎮 Điều khiển hiệu ứng hạt 3D bằng cử chỉ tay — không cần phần cứng thêm, chỉ cần webcam!
</p>

---

## ✨ Tính năng

- 🖐️ **Theo dõi tay thời gian thực** — MediaPipe Hands, AI chạy ngay trên trình duyệt
- 🌍 **Nhiều hình dạng hạt** — Trái đất, trái tim, Sao Thổ, cây, pháo hoa (5 hình)
- 🎯 **Tương tác cử chỉ**
  - 👊 Nắm tay → hạt co lại + đổi hình
  - 🖐️ Bàn tay mở → hạt tỏa ra
  - ✋ Nắm tay trái → hình trước
  - 🤚 Nắm tay phải → hình sau
- 🎨 **Hiệu ứng** — Đổi màu ngẫu nhiên, sương mù, tự quay
- 📱 **Responsive** — Máy tính và điện thoại

## 🎬 Demo

> Bật camera và điều khiển 4000 hạt chuyển hình bằng tay!

| Trái đất | Trái tim | Sao Thổ |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Cây | Pháo hoa |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Bắt đầu nhanh

### Cài đặt phụ thuộc

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Chạy dev server

```bash
npm run dev
```

Mở `http://localhost:5173` trong trình duyệt và cấp quyền camera.

### Build production

```bash
npm run build
```

## 🛠️ Công nghệ

| Công nghệ | Mô tả |
|------|------|
| [Vue 3](https://vuejs.org/) | Framework JavaScript tiến bộ |
| [Three.js](https://threejs.org/) | Thư viện đồ họa 3D |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Mô hình theo dõi tay Google |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript có kiểu |
| [Vite](https://vitejs.dev/) | Công cụ frontend hiện đại |

## 📁 Cấu trúc dự án

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Điểm vào
    ├── App.vue                 # Component gốc
    ├── style.css               # Style toàn cục
    ├── components/
    │   ├── VideoContainer.vue  # Xem trước camera
    │   ├── BottomBar.vue       # Thanh dưới
    │   └── LoadingOverlay.vue  # Loading
    └── composables/
        ├── useParticleSystem.ts # Hệ hạt Three.js
        └── useHandTracking.ts   # MediaPipe tay
```

## 🎮 Hướng dẫn

### Cử chỉ

| Cử chỉ | Hiệu ứng |
|------|------|
| 👊 Nắm (tay phải) | Co + hình tiếp theo |
| 👊 Nắm (tay trái) | Co + hình trước |
| 🖐️ Lòng bàn tay mở | Hạt tỏa ra ngoài |
| ✊ Trung lập | Kích thước mặc định |

### Giao diện

- Nút hình ở dưới để đổi trực tiếp
- Kéo chuột để xoay góc nhìn
- Con lăn để zoom

## 🔧 Cấu hình

### Tham số hạt

Trong `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // Số hạt
const PARTICLE_SIZE = 0.15   // Kích thước
```

### Độ nhạy cử chỉ

Ngưỡng trong `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // Phát hiện nắm tay
const OPEN_THRESHOLD = 0.16   // Tay mở
```

## 🌐 Trình duyệt

| Trình duyệt | Hỗ trợ |
|--------|------|
| Chrome | ✅ Khuyến nghị |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ Cần HTTPS |

> ⚠️ Cần WebGL và API getUserMedia

## 📄 Giấy phép

[MIT](./LICENSE)

## 🤝 Đóng góp

Chào mừng Issue và PR!

1. Fork repository
2. Tạo nhánh (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## ⭐ Star History

Nếu dự án hữu ích, hãy cho một ⭐!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
