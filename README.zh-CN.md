# ✋ Hand Controlled 3D Particles

<p align="center">
  <strong>简体中文</strong> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_ru.md">Русский</a> |
  <a href="./README_es.md">Español</a> |
  <a href="./README_pt.md">Português</a> |
  <a href="./README_it.md">Italiano</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
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
  🎮 用手势控制 3D 粒子效果 —— 无需任何硬件，只需摄像头！
</p>

---

## ✨ 特性

- 🖐️ **实时手势识别** - 基于 MediaPipe Hands，浏览器端 AI 识别
- 🌍 **多种粒子形态** - 地球、爱心、土星、圣诞树、烟花 5 种形态切换
- 🎯 **手势交互控制**
  - 👊 握拳 → 粒子收缩 + 切换形态
  - 🖐️ 张开 → 粒子散开扩展
  - ✋ 左手握拳 → 上一个形态
  - 🤚 右手握拳 → 下一个形态
- 🎨 **视觉效果** - 粒子随机变色、雾化效果、自动旋转
- 📱 **响应式设计** - 支持桌面和移动端

## 🎬 演示

> 打开摄像头，用手势控制 4000 个粒子在不同形态间自由切换！

| 地球 | 爱心 | 土星 |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| 圣诞树 | 烟花 |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 快速开始

### 安装依赖

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### 启动开发服务器

```bash
npm run dev
```

浏览器打开 `http://localhost:5173`，允许摄像头权限即可体验！

### 构建生产版本

```bash
npm run build
```

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| [Vue 3](https://vuejs.org/) | 渐进式 JavaScript 框架 |
| [Three.js](https://threejs.org/) | 3D 图形库 |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Google 手部追踪 AI 模型 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全的 JavaScript |
| [Vite](https://vitejs.dev/) | 下一代前端构建工具 |

## 📁 项目结构

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # 入口文件
    ├── App.vue                 # 主组件
    ├── style.css               # 全局样式
    ├── components/
    │   ├── VideoContainer.vue  # 摄像头预览组件
    │   ├── BottomBar.vue       # 底部控制栏组件
    │   └── LoadingOverlay.vue  # 加载动画组件
    └── composables/
        ├── useParticleSystem.ts # Three.js 粒子系统
        └── useHandTracking.ts   # MediaPipe 手势识别
```

## 🎮 使用指南

### 手势操作

| 手势 | 效果 |
|------|------|
| 👊 握拳（右手） | 粒子收缩 + 切换到下一个形态 |
| 👊 握拳（左手） | 粒子收缩 + 切换到上一个形态 |
| 🖐️ 张开手掌 | 粒子散开扩展 |
| ✊ 中间状态 | 粒子保持默认大小 |

### 界面操作

- 点击底部形状按钮可直接切换
- 鼠标拖拽可旋转视角
- 滚轮缩放可调整距离

## 🔧 配置说明

### 粒子参数

在 `src/composables/useParticleSystem.ts` 中可调整：

```typescript
const PARTICLE_COUNT = 4000  // 粒子数量
const PARTICLE_SIZE = 0.15   // 粒子大小
```

### 手势灵敏度

在 `src/App.vue` 中可调整阈值：

```typescript
const CLOSE_THRESHOLD = 0.08  // 握拳判定阈值
const OPEN_THRESHOLD = 0.16   // 张开判定阈值
```

## 🌐 浏览器支持

| 浏览器 | 支持 |
|--------|------|
| Chrome | ✅ 推荐 |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ 需要 HTTPS |

> ⚠️ 需要支持 WebGL 和 getUserMedia API

## 📄 License

[MIT](./LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 PR！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## ⭐ Star History

如果这个项目对你有帮助，请给个 ⭐ 支持一下！

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
