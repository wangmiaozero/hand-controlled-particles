# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <strong>Deutsch</strong> |
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
  🎮 Steuern Sie 3D-Partikeleffekte per Handgesten — keine Extra-Hardware, nur eine Kamera!
</p>

---

## ✨ Funktionen

- 🖐️ **Echtzeit-Handverfolgung** — MediaPipe Hands, KI läuft im Browser
- 🌍 **Mehrere Partikelformen** — Erde, Herz, Saturn, Baum, Feuerwerk (5 Formen)
- 🎯 **Gestensteuerung**
  - 👊 Faust → Partikel ziehen sich zusammen + Form wechseln
  - 🖐️ Offene Hand → Partikel verteilen sich
  - ✋ Linke Faust → vorherige Form
  - 🤚 Rechte Faust → nächste Form
- 🎨 **Effekte** — Zufällige Farben, Nebel, automatische Rotation
- 📱 **Responsives Layout** — Desktop und Mobil

## 🎬 Demo

> Kamera einschalten und 4000 Partikel per Hand zwischen Formen wechseln lassen!

| Erde | Herz | Saturn |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Baum | Feuerwerk |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Schnellstart

### Abhängigkeiten installieren

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Entwicklungsserver

```bash
npm run dev
```

`http://localhost:5173` im Browser öffnen und Kamerazugriff erlauben.

### Produktions-Build

```bash
npm run build
```

## 🛠️ Technologie-Stack

| Technologie | Beschreibung |
|------|------|
| [Vue 3](https://vuejs.org/) | Progressives JavaScript-Framework |
| [Three.js](https://threejs.org/) | 3D-Grafikbibliothek |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Google Hand-Tracking-Modell |
| [TypeScript](https://www.typescriptlang.org/) | Typisiertes JavaScript |
| [Vite](https://vitejs.dev/) | Modernes Frontend-Tooling |

## 📁 Projektstruktur

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Einstieg
    ├── App.vue                 # Root-Komponente
    ├── style.css               # Globale Styles
    ├── components/
    │   ├── VideoContainer.vue  # Kamera-Vorschau
    │   ├── BottomBar.vue       # untere Leiste
    │   └── LoadingOverlay.vue  # Ladeanimation
    └── composables/
        ├── useParticleSystem.ts # Three.js Partikelsystem
        └── useHandTracking.ts   # MediaPipe Hand-Tracking
```

## 🎮 Bedienung

### Gesten

| Geste | Wirkung |
|------|------|
| 👊 Faust (rechte Hand) | Zusammenziehen + nächste Form |
| 👊 Faust (linke Hand) | Zusammenziehen + vorherige Form |
| 🖐️ Offene Hand | Partikel nach außen |
| ✊ Neutral | Standardgröße |

### UI

- Form-Buttons unten zum direkten Wechsel
- Maus ziehen zum Drehen der Ansicht
- Mausrad zum Zoomen

## 🔧 Konfiguration

### Partikelparameter

In `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // Anzahl Partikel
const PARTICLE_SIZE = 0.15   // Größe
```

### Gestenempfindlichkeit

Schwellen in `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // Faust-Erkennung
const OPEN_THRESHOLD = 0.16   // offene Hand
```

## 🌐 Browser

| Browser | Unterstützung |
|--------|------|
| Chrome | ✅ Empfohlen |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ HTTPS erforderlich |

> ⚠️ WebGL und getUserMedia API erforderlich

## 📄 Lizenz

[MIT](./LICENSE)

## 🤝 Mitwirken

Issues und PRs willkommen!

1. Repository forken
2. Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen (`git push origin feature/AmazingFeature`)
5. Pull Request öffnen

## ⭐ Star History

Wenn das Projekt hilft, gerne einen ⭐ dalassen!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
