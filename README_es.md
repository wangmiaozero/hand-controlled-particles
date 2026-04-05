# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <a href="./README_ru.md">Русский</a> |
  <strong>Español</strong> |
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
  🎮 Controla efectos de partículas 3D con gestos de mano — sin hardware extra, solo la cámara.
</p>

---

## ✨ Características

- 🖐️ **Seguimiento de manos en tiempo real** — MediaPipe Hands; la IA corre en el navegador
- 🌍 **Varias formas de partículas** — Tierra, corazón, Saturno, árbol, fuegos artificiales (5 formas)
- 🎯 **Interacción por gestos**
  - 👊 Puño → partículas se contraen + cambio de forma
  - 🖐️ Mano abierta → partículas se expanden
  - ✋ Puño izquierdo → forma anterior
  - 🤚 Puño derecho → forma siguiente
- 🎨 **Efectos visuales** — Colores aleatorios, niebla, rotación automática
- 📱 **Diseño responsive** — Escritorio y móvil

## 🎬 Demo

> Abre la cámara y controla 4000 partículas cambiando de forma con las manos.

| Tierra | Corazón | Saturno |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Árbol | Fuegos artificiales |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Inicio rápido

### Instalar dependencias

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en el navegador y permite el acceso a la cámara.

### Build de producción

```bash
npm run build
```

## 🛠️ Stack tecnológico

| Tecnología | Descripción |
|------|------|
| [Vue 3](https://vuejs.org/) | Framework JavaScript progresivo |
| [Three.js](https://threejs.org/) | Biblioteca gráfica 3D |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Modelo de seguimiento de manos de Google |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript con tipos |
| [Vite](https://vitejs.dev/) | Herramientas frontend modernas |

## 📁 Estructura del proyecto

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Entrada
    ├── App.vue                 # Componente raíz
    ├── style.css               # Estilos globales
    ├── components/
    │   ├── VideoContainer.vue  # Vista previa de cámara
    │   ├── BottomBar.vue       # Barra inferior
    │   └── LoadingOverlay.vue  # Carga
    └── composables/
        ├── useParticleSystem.ts # Partículas Three.js
        └── useHandTracking.ts   # MediaPipe manos
```

## 🎮 Guía de uso

### Gestos

| Gesto | Efecto |
|------|------|
| 👊 Puño (mano derecha) | Contraer + forma siguiente |
| 👊 Puño (mano izquierda) | Contraer + forma anterior |
| 🖐️ Palma abierta | Expandir partículas |
| ✊ Neutro | Tamaño por defecto |

### Interfaz

- Botones de forma abajo para cambiar directamente
- Arrastrar para rotar la vista
- Rueda para zoom

## 🔧 Configuración

### Parámetros de partículas

En `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // Número de partículas
const PARTICLE_SIZE = 0.15   // Tamaño
```

### Sensibilidad de gestos

Umbrales en `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // Detección de puño
const OPEN_THRESHOLD = 0.16   // Mano abierta
```

## 🌐 Navegadores

| Navegador | Soporte |
|--------|------|
| Chrome | ✅ Recomendado |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ Requiere HTTPS |

> ⚠️ Se necesitan WebGL y la API getUserMedia

## 📄 Licencia

[MIT](./LICENSE)

## 🤝 Contribuir

¡Issues y PR son bienvenidos!

1. Haz fork del repositorio
2. Rama de función (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## ⭐ Star History

Si el proyecto te ayuda, ¡una ⭐ ayuda!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
