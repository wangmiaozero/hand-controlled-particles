# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <strong>Français</strong> |
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
  🎮 Contrôlez des particules 3D par gestes de la main — aucun matériel requis, juste une caméra !
</p>

---

## ✨ Fonctionnalités

- 🖐️ **Suivi des mains en temps réel** — MediaPipe Hands, l’IA s’exécute dans le navigateur
- 🌍 **Plusieurs formes de particules** — Terre, cœur, Saturne, arbre, feux d’artifice (5 formes)
- 🎯 **Interaction par gestes**
  - 👊 Poing → particules qui se contractent + changement de forme
  - 🖐️ Main ouverte → particules qui s’écartent
  - ✋ Poing gauche → forme précédente
  - 🤚 Poing droit → forme suivante
- 🎨 **Effets visuels** — Couleurs aléatoires, brouillard, rotation automatique
- 📱 **Design responsive** — Bureau et mobile

## 🎬 Démo

> Ouvrez la caméra et faites passer 4000 particules d’une forme à l’autre avec vos mains !

| Terre | Cœur | Saturne |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Arbre | Feux d’artifice |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Démarrage rapide

### Installer les dépendances

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez `http://localhost:5173` dans le navigateur et autorisez l’accès à la caméra.

### Build de production

```bash
npm run build
```

## 🛠️ Stack technique

| Technologie | Description |
|------|------|
| [Vue 3](https://vuejs.org/) | Framework JavaScript progressif |
| [Three.js](https://threejs.org/) | Bibliothèque graphique 3D |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Modèle de suivi des mains Google |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript typé |
| [Vite](https://vitejs.dev/) | Outils frontend modernes |

## 📁 Structure du projet

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Point d’entrée
    ├── App.vue                 # Composant racine
    ├── style.css               # Styles globaux
    ├── components/
    │   ├── VideoContainer.vue  # Aperçu caméra
    │   ├── BottomBar.vue       # Barre inférieure
    │   └── LoadingOverlay.vue  # Chargement
    └── composables/
        ├── useParticleSystem.ts # Système de particules Three.js
        └── useHandTracking.ts   # Suivi MediaPipe
```

## 🎮 Guide d’utilisation

### Gestes

| Geste | Effet |
|------|------|
| 👊 Poing (main droite) | Contracter + forme suivante |
| 👊 Poing (main gauche) | Contracter + forme précédente |
| 🖐️ Paume ouverte | Écarter les particules |
| ✊ Neutre | Taille par défaut |

### Interface

- Boutons de forme en bas pour changer directement
- Glisser pour faire tourner la vue
- Molette pour zoomer

## 🔧 Configuration

### Paramètres des particules

Dans `src/composables/useParticleSystem.ts` :

```typescript
const PARTICLE_COUNT = 4000  // Nombre de particules
const PARTICLE_SIZE = 0.15   // Taille des particules
```

### Sensibilité des gestes

Seuils dans `src/App.vue` :

```typescript
const CLOSE_THRESHOLD = 0.08  // Détection du poing
const OPEN_THRESHOLD = 0.16   // Main ouverte
```

## 🌐 Navigateurs

| Navigateur | Support |
|--------|------|
| Chrome | ✅ Recommandé |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ HTTPS requis |

> ⚠️ WebGL et API getUserMedia nécessaires

## 📄 Licence

[MIT](./LICENSE)

## 🤝 Contribution

Issues et PR les bienvenues !

1. Fork du dépôt
2. Branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commits (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## ⭐ Star History

Si le projet vous aide, un ⭐ est apprécié !

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
