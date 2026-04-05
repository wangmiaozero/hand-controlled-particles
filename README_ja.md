# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <strong>日本語</strong> |
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
  🎮 手のジェスチャーで 3D パーティクルを操作 — 専用ハードは不要、カメラだけで OK！
</p>

---

## ✨ 機能

- 🖐️ **リアルタイム手トラッキング** — MediaPipe Hands、AI はブラウザ内で実行
- 🌍 **複数のパーティクル形状** — 地球、ハート、土星、ツリー、花火の 5 種を切り替え
- 🎯 **ジェスチャー操作**
  - 👊 グー → パーティクル収縮 + 形状切り替え
  - 🖐️ 開いた手 → パーティクルが広がる
  - ✋ 左手のグー → 前の形状
  - 🤚 右手のグー → 次の形状
- 🎨 **ビジュアル** — ランダムな色変化、フォグ、自動回転
- 📱 **レスポンシブ** — デスクトップとモバイル対応

## 🎬 デモ

> カメラをオンにして、4000 個のパーティクルを手で形を切り替えましょう！

| 地球 | ハート | 土星 |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| ツリー | 花火 |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 クイックスタート

### 依存関係のインストール

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### 開発サーバー

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開き、カメラを許可してください。

### 本番ビルド

```bash
npm run build
```

## 🛠️ 技術スタック

| 技術 | 説明 |
|------|------|
| [Vue 3](https://vuejs.org/) | プログレッシブ JS フレームワーク |
| [Three.js](https://threejs.org/) | 3D グラフィックスライブラリ |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Google 手部トラッキング AI |
| [TypeScript](https://www.typescriptlang.org/) | 型付き JavaScript |
| [Vite](https://vitejs.dev/) | 次世代フロントエンドツール |

## 📁 プロジェクト構成

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # エントリ
    ├── App.vue                 # ルートコンポーネント
    ├── style.css               # グローバルスタイル
    ├── components/
    │   ├── VideoContainer.vue  # カメラプレビュー
    │   ├── BottomBar.vue       # 下部バー
    │   └── LoadingOverlay.vue  # ローディング
    └── composables/
        ├── useParticleSystem.ts # Three.js パーティクル
        └── useHandTracking.ts   # MediaPipe 手トラッキング
```

## 🎮 使い方

### ジェスチャー

| ジェスチャー | 効果 |
|------|------|
| 👊 グー（右手） | 収縮 + 次の形状 |
| 👊 グー（左手） | 収縮 + 前の形状 |
| 🖐️ 開いた手 | パーティクルを外側へ |
| ✊ 中立 | デフォルトサイズ |

### UI

- 下部の形状ボタンで直接切り替え
- ドラッグで視点回転
- ホイールでズーム

## 🔧 設定

### パーティクルパラメータ

`src/composables/useParticleSystem.ts` で調整:

```typescript
const PARTICLE_COUNT = 4000  // パーティクル数
const PARTICLE_SIZE = 0.15   // サイズ
```

### ジェスチャー感度

`src/App.vue` のしきい値:

```typescript
const CLOSE_THRESHOLD = 0.08  // グー検出
const OPEN_THRESHOLD = 0.16   // 開いた手
```

## 🌐 ブラウザ対応

| ブラウザ | 対応 |
|--------|------|
| Chrome | ✅ 推奨 |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ HTTPS が必要 |

> ⚠️ WebGL と getUserMedia API が必要です

## 📄 ライセンス

[MIT](./LICENSE)

## 🤝 コントリビューション

Issue・PR 歓迎！

1. このリポジトリを Fork
2. ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. コミット (`git commit -m 'Add some AmazingFeature'`)
4. プッシュ (`git push origin feature/AmazingFeature`)
5. Pull Request を開く

## ⭐ Star History

役に立ったら ⭐ をお願いします！

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
