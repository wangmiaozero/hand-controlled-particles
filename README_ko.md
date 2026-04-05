# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <strong>한국어</strong> |
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
  🎮 손 제스처로 3D 파티클 효과를 조작하세요 — 별도 하드웨어 없이 카메라만 있으면 됩니다!
</p>

---

## ✨ 기능

- 🖐️ **실시간 손 추적** - MediaPipe Hands 기반, AI가 브라우저에서 직접 실행
- 🌍 **다양한 파티클 형태** - 지구, 하트, 토성, 트리, 불꽃놀이 등 5가지 전환
- 🎯 **제스처 상호작용**
  - 👊 주먹 → 파티클 수축 + 형태 전환
  - 🖐️ 손 펴기 → 파티클 확산
  - ✋ 왼손 주먹 → 이전 형태
  - 🤚 오른손 주먹 → 다음 형태
- 🎨 **시각 효과** - 무작위 색 변화, 안개 효과, 자동 회전
- 📱 **반응형 디자인** - 데스크톱과 모바일 지원

## 🎬 데모

> 카메라를 켜고 손으로 4000개의 파티클이 여러 형태로 바뀌는 것을 조작해 보세요!

| 지구 | 하트 | 토성 |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| 트리 | 불꽃놀이 |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 빠른 시작

### 의존성 설치

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열고 카메라 권한을 허용하세요!

### 프로덕션 빌드

```bash
npm run build
```

## 🛠️ 기술 스택

| 기술 | 설명 |
|------|------|
| [Vue 3](https://vuejs.org/) | 프로그레시브 JavaScript 프레임워크 |
| [Three.js](https://threejs.org/) | 3D 그래픽 라이브러리 |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Google 손 추적 AI 모델 |
| [TypeScript](https://www.typescriptlang.org/) | 타입 안전 JavaScript |
| [Vite](https://vitejs.dev/) | 차세대 프론트엔드 도구 |

## 📁 프로젝트 구조

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # 진입점
    ├── App.vue                 # 루트 컴포넌트
    ├── style.css               # 전역 스타일
    ├── components/
    │   ├── VideoContainer.vue  # 카메라 미리보기
    │   ├── BottomBar.vue       # 하단 컨트롤 바
    │   └── LoadingOverlay.vue  # 로딩 오버레이
    └── composables/
        ├── useParticleSystem.ts # Three.js 파티클 시스템
        └── useHandTracking.ts   # MediaPipe 손 추적
```

## 🎮 사용 안내

### 제스처 조작

| 제스처 | 효과 |
|------|------|
| 👊 주먹 (오른손) | 파티클 수축 + 다음 형태로 전환 |
| 👊 주먹 (왼손) | 파티클 수축 + 이전 형태로 전환 |
| 🖐️ 손바닥 펴기 | 파티클 바깥으로 확산 |
| ✊ 중립 | 파티클 기본 크기 유지 |

### UI 조작

- 하단 형태 버튼으로 직접 전환
- 마우스 드래그로 시점 회전
- 휠로 확대/축소

## 🔧 설정

### 파티클 파라미터

`src/composables/useParticleSystem.ts`에서 조정:

```typescript
const PARTICLE_COUNT = 4000  // 파티클 개수
const PARTICLE_SIZE = 0.15   // 파티클 크기
```

### 제스처 민감도

`src/App.vue`에서 임계값 조정:

```typescript
const CLOSE_THRESHOLD = 0.08  // 주먹 감지 임계값
const OPEN_THRESHOLD = 0.16   // 손 펴기 임계값
```

## 🌐 브라우저 지원

| 브라우저 | 지원 |
|--------|------|
| Chrome | ✅ 권장 |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ HTTPS 필요 |

> ⚠️ WebGL 및 getUserMedia API 지원 필요

## 📄 라이선스

[MIT](./LICENSE)

## 🤝 기여

Issue와 PR을 환영합니다!

1. 이 저장소를 Fork
2. 기능 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시 (`git push origin feature/AmazingFeature`)
5. Pull Request 열기

## ⭐ Star History

프로젝트가 도움이 되었다면 ⭐를 눌러 주세요!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
