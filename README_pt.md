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
  <strong>Português</strong> |
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
  🎮 Controle efeitos de partículas 3D com gestos — sem hardware extra, só a câmera!
</p>

---

## ✨ Recursos

- 🖐️ **Rastreamento de mãos em tempo real** — MediaPipe Hands; a IA roda no navegador
- 🌍 **Várias formas de partículas** — Terra, coração, Saturno, árvore, fogos de artifício (5 formas)
- 🎯 **Interação por gestos**
  - 👊 Punho → partículas contraem + troca de forma
  - 🖐️ Mão aberta → partículas se espalham
  - ✋ Punho esquerdo → forma anterior
  - 🤚 Punho direito → próxima forma
- 🎨 **Efeitos visuais** — Cores aleatórias, névoa, rotação automática
- 📱 **Design responsivo** — Desktop e mobile

## 🎬 Demo

> Abra a câmera e controle 4000 partículas trocando de forma com as mãos!

| Terra | Coração | Saturno |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Árvore | Fogos |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Início rápido

### Instalar dependências

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Servidor de desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:5173` no navegador e permita a câmera.

### Build de produção

```bash
npm run build
```

## 🛠️ Stack

| Tecnologia | Descrição |
|------|------|
| [Vue 3](https://vuejs.org/) | Framework JavaScript progressivo |
| [Three.js](https://threejs.org/) | Biblioteca gráfica 3D |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Modelo de rastreamento de mãos Google |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript com tipos |
| [Vite](https://vitejs.dev/) | Ferramentas frontend modernas |

## 📁 Estrutura

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Entrada
    ├── App.vue                 # Componente raiz
    ├── style.css               # Estilos globais
    ├── components/
    │   ├── VideoContainer.vue  # Preview da câmera
    │   ├── BottomBar.vue       # Barra inferior
    │   └── LoadingOverlay.vue  # Carregamento
    └── composables/
        ├── useParticleSystem.ts # Partículas Three.js
        └── useHandTracking.ts   # MediaPipe mãos
```

## 🎮 Uso

### Gestos

| Gesto | Efeito |
|------|------|
| 👊 Punho (mão direita) | Contrair + próxima forma |
| 👊 Punho (mão esquerda) | Contrair + forma anterior |
| 🖐️ Palma aberta | Espalhar partículas |
| ✊ Neutro | Tamanho padrão |

### Interface

- Botões de forma embaixo para trocar direto
- Arrastar para girar a visão
- Roda para zoom

## 🔧 Configuração

### Parâmetros das partículas

Em `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // Quantidade
const PARTICLE_SIZE = 0.15   // Tamanho
```

### Sensibilidade dos gestos

Limites em `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // Detecção de punho
const OPEN_THRESHOLD = 0.16   // Mão aberta
```

## 🌐 Navegadores

| Navegador | Suporte |
|--------|------|
| Chrome | ✅ Recomendado |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ Requer HTTPS |

> ⚠️ São necessários WebGL e a API getUserMedia

## 📄 Licença

[MIT](./LICENSE)

## 🤝 Contribuir

Issues e PRs são bem-vindos!

1. Faça fork do repositório
2. Branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ⭐ Star History

Se o projeto ajudou, uma ⭐ é apreciada!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
