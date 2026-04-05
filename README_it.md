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
  <strong>Italiano</strong> |
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
  🎮 Controlla particelle 3D con i gesti delle mani — niente hardware extra, solo la fotocamera!
</p>

---

## ✨ Funzionalità

- 🖐️ **Tracciamento mani in tempo reale** — MediaPipe Hands; l’IA gira nel browser
- 🌍 **Più forme di particelle** — Terra, cuore, Saturno, albero, fuochi d’artificio (5 forme)
- 🎯 **Interazione a gesti**
  - 👊 Pugno → particelle si contraggono + cambio forma
  - 🖐️ Mano aperta → particelle si espandono
  - ✋ Pugno sinistro → forma precedente
  - 🤚 Pugno destro → forma successiva
- 🎨 **Effetti visivi** — Colori casuali, nebbia, rotazione automatica
- 📱 **Design responsive** — Desktop e mobile

## 🎬 Demo

> Apri la fotocamera e controlla 4000 particelle che cambiano forma con le mani!

| Terra | Cuore | Saturno |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Albero | Fuochi |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Avvio rapido

### Installazione dipendenze

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Server di sviluppo

```bash
npm run dev
```

Apri `http://localhost:5173` nel browser e consenti l’accesso alla fotocamera.

### Build di produzione

```bash
npm run build
```

## 🛠️ Stack tecnologico

| Tecnologia | Descrizione |
|------|------|
| [Vue 3](https://vuejs.org/) | Framework JavaScript progressivo |
| [Three.js](https://threejs.org/) | Libreria grafica 3D |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Modello tracciamento mani Google |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript tipizzato |
| [Vite](https://vitejs.dev/) | Tooling frontend moderno |

## 📁 Struttura progetto

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Entry
    ├── App.vue                 # Componente root
    ├── style.css               # Stili globali
    ├── components/
    │   ├── VideoContainer.vue  # Anteprima camera
    │   ├── BottomBar.vue       # Barra inferiore
    │   └── LoadingOverlay.vue  # Caricamento
    └── composables/
        ├── useParticleSystem.ts # Particelle Three.js
        └── useHandTracking.ts   # MediaPipe mani
```

## 🎮 Guida

### Gesti

| Gesto | Effetto |
|------|------|
| 👊 Pugno (mano destra) | Contrai + forma successiva |
| 👊 Pugno (mano sinistra) | Contrai + forma precedente |
| 🖐️ Palmo aperto | Espandi particelle |
| ✊ Neutro | Dimensione predefinita |

### Interfaccia

- Pulsanti forma in basso per cambiare direttamente
- Trascina per ruotare la vista
- Rotella per zoom

## 🔧 Configurazione

### Parametri particelle

In `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // Numero particelle
const PARTICLE_SIZE = 0.15   // Dimensione
```

### Sensibilità gesti

Soglie in `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // Rilevamento pugno
const OPEN_THRESHOLD = 0.16   // Mano aperta
```

## 🌐 Browser

| Browser | Supporto |
|--------|------|
| Chrome | ✅ Consigliato |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ Richiede HTTPS |

> ⚠️ Servono WebGL e API getUserMedia

## 📄 Licenza

[MIT](./LICENSE)

## 🤝 Contributi

Issue e PR benvenuti!

1. Fork del repository
2. Branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## ⭐ Star History

Se il progetto è utile, una ⭐ fa piacere!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
