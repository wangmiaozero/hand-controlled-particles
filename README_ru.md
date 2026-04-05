# ✋ Hand Controlled 3D Particles

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README_ko.md">한국어</a> |
  <a href="./README_fr.md">Français</a> |
  <a href="./README_de.md">Deutsch</a> |
  <a href="./README_ja.md">日本語</a> |
  <strong>Русский</strong> |
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
  🎮 Управляйте 3D-частицами жестами рук — без лишнего оборудования, только камера!
</p>

---

## ✨ Возможности

- 🖐️ **Отслеживание рук в реальном времени** — MediaPipe Hands, ИИ в браузере
- 🌍 **Несколько форм** — Земля, сердце, Сатурн, ёлка, фейерверк (5 форм)
- 🎯 **Жесты**
  - 👊 Кулак → сжатие частиц + смена формы
  - 🖐️ Открытая ладонь → расширение
  - ✋ Левый кулак → предыдущая форма
  - 🤚 Правый кулак → следующая форма
- 🎨 **Визуал** — случайные цвета, туман, авто-вращение
- 📱 **Адаптив** — десктоп и мобильные

## 🎬 Демо

> Включите камеру и переключайте 4000 частиц между формами руками!

| Земля | Сердце | Сатурн |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| Ёлка | Фейерверк |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 Быстрый старт

### Установка зависимостей

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### Сервер разработки

```bash
npm run dev
```

Откройте `http://localhost:5173` и разрешите доступ к камере.

### Сборка

```bash
npm run build
```

## 🛠️ Стек

| Технология | Описание |
|------|------|
| [Vue 3](https://vuejs.org/) | Прогрессивный JS-фреймворк |
| [Three.js](https://threejs.org/) | 3D-графика |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | Модель отслеживания рук Google |
| [TypeScript](https://www.typescriptlang.org/) | Типизированный JavaScript |
| [Vite](https://vitejs.dev/) | Современный фронтенд-инструмент |

## 📁 Структура

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # Точка входа
    ├── App.vue                 # Корневой компонент
    ├── style.css               # Глобальные стили
    ├── components/
    │   ├── VideoContainer.vue  # Превью камеры
    │   ├── BottomBar.vue       # Нижняя панель
    │   └── LoadingOverlay.vue  # Загрузка
    └── composables/
        ├── useParticleSystem.ts # Three.js частицы
        └── useHandTracking.ts   # MediaPipe руки
```

## 🎮 Управление

### Жесты

| Жест | Эффект |
|------|------|
| 👊 Кулак (правая рука) | Сжатие + следующая форма |
| 👊 Кулак (левая рука) | Сжатие + предыдущая форма |
| 🖐️ Открытая ладонь | Расширение наружу |
| ✊ Нейтрально | Размер по умолчанию |

### Интерфейс

- Кнопки форм внизу
- Перетаскивание мышью — поворот
- Колёсико — масштаб

## 🔧 Настройка

### Параметры частиц

В `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // Количество
const PARTICLE_SIZE = 0.15   // Размер
```

### Чувствительность

Пороги в `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // Кулак
const OPEN_THRESHOLD = 0.16   // Открытая ладонь
```

## 🌐 Браузеры

| Браузер | Поддержка |
|--------|------|
| Chrome | ✅ Рекомендуется |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ Нужен HTTPS |

> ⚠️ Требуются WebGL и getUserMedia

## 📄 Лицензия

[MIT](./LICENSE)

## 🤝 Вклад

Issues и PR приветствуются!

1. Форкните репозиторий
2. Ветка (`git checkout -b feature/AmazingFeature`)
3. Коммит (`git commit -m 'Add some AmazingFeature'`)
4. Пуш (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## ⭐ Star History

Если проект полезен — поставьте ⭐!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
