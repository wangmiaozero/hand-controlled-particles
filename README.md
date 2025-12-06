# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README_ZH.md">简体中文</a> | <strong>English</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.4-42b883?style=flat-square&logo=vue.js" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Three.js-0.160-black?style=flat-square&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/MediaPipe-Hands-4285F4?style=flat-square&logo=google" alt="MediaPipe" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.1-646cff?style=flat-square&logo=vite" alt="Vite" />
</p>

<p align="center">
  🎮 Control 3D particle effects with hand gestures — no hardware needed, just a camera!
</p>

---

## ✨ Features

- 🖐️ **Real-time Hand Tracking** - Powered by MediaPipe Hands, AI runs directly in browser
- 🌍 **Multiple Particle Shapes** - Earth, Heart, Saturn, Tree, Fireworks - 5 shapes to switch
- 🎯 **Gesture-based Interaction**
  - 👊 Fist → Particles contract + switch shape
  - 🖐️ Open hand → Particles spread out
  - ✋ Left hand fist → Previous shape
  - 🤚 Right hand fist → Next shape
- 🎨 **Visual Effects** - Random color changes, fog effect, auto-rotation
- 📱 **Responsive Design** - Works on desktop and mobile

## 🎬 Demo

> Open your camera and control 4000 particles switching between different shapes with your hands!

| Earth | Heart | Saturn |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Tree | Fireworks |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Quick Start

### Install Dependencies

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Start Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser and allow camera access to start!

### Build for Production

```bash
npm run build
```

## 🛠️ Tech Stack

| Technology | Description |
|------|------|
| [Vue 3](https://vuejs.org/) | Progressive JavaScript Framework |
| [Three.js](https://threejs.org/) | 3D Graphics Library |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Google Hand Tracking AI Model |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Next Generation Frontend Tooling |

## 📁 Project Structure

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Entry file
    ├── App.vue                 # Main component
    ├── style.css               # Global styles
    ├── components/
    │   ├── VideoContainer.vue  # Camera preview component
    │   ├── BottomBar.vue       # Bottom control bar component
    │   └── LoadingOverlay.vue  # Loading animation component
    └── composables/
        ├── useParticleSystem.ts # Three.js particle system
        └── useHandTracking.ts   # MediaPipe hand tracking
```

## 🎮 User Guide

### Gesture Controls

| Gesture | Effect |
|------|------|
| 👊 Fist (Right hand) | Contract particles + switch to next shape |
| 👊 Fist (Left hand) | Contract particles + switch to previous shape |
| 🖐️ Open palm | Spread particles outward |
| ✊ Neutral state | Particles stay at default size |

### UI Controls

- Click shape buttons at bottom to switch directly
- Drag mouse to rotate view
- Scroll wheel to zoom in/out

## 🔧 Configuration

### Particle Parameters

Adjust in `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // Number of particles
const PARTICLE_SIZE = 0.15   // Particle size
```

### Gesture Sensitivity

Adjust thresholds in `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // Fist detection threshold
const OPEN_THRESHOLD = 0.16   // Open hand detection threshold
```

## 🌐 Browser Support

| Browser | Support |
|--------|------|
| Chrome | ✅ Recommended |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ Requires HTTPS |

> ⚠️ Requires WebGL and getUserMedia API support

## 📄 License

[MIT](./LICENSE)

## 🤝 Contributing

Issues and PRs are welcome!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Star History

If you find this project helpful, please give it a ⭐!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
