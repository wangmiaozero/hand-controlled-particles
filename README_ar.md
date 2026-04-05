# ✋ Hand Controlled 3D Particles

<p align="center" dir="rtl">
  <a href="./README.zh-CN.md">简体中文</a> |
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
  <strong>العربية</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.4-42b883?style=flat-square&logo=vue.js" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Three.js-0.160-black?style=flat-square&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/MediaPipe-Hands-4285F4?style=flat-square&logo=google" alt="MediaPipe" />
  <img src="https://img.shields.io/badge/TypeScript-5.4-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.1-646cff?style=flat-square&logo=vite" alt="Vite" />
</p>

<p align="center" dir="rtl">
  🎮 تحكّم في جزيئات ثلاثية الأبعاد بإيماءات اليد — دون أجهزة إضافية، فقط الكاميرا!
</p>

---

## ✨ الميزات

- 🖐️ **تتبع اليد في الوقت الفعلي** — MediaPipe Hands، يعمل الذكاء الاصطناعي في المتصفح
- 🌍 **أشكال جزيئات متعددة** — أرض، قلب، زحل، شجرة، ألعاب نارية (5 أشكال)
- 🎯 **تفاعل بالإيماءات**
  - 👊 قبضة → انكماش الجزيئات + تغيير الشكل
  - 🖐️ يد مفتوحة → توسع الجزيئات
  - ✋ قبضة اليسار → الشكل السابق
  - 🤚 قبضة اليمين → الشكل التالي
- 🎨 **مؤثرات بصرية** — ألوان عشوائية، ضباب، دوران تلقائي
- 📱 **تصميم متجاوب** — سطح المكتب والجوال

## 🎬 عرض

> شغّل الكاميرا وتحكّم في 4000 جزيء يتبدّل شكلها بيديك!

| الأرض | القلب | زحل |
|:---:|:---:|:---:|
| 🌍 Earth | 💖 Heart | 🪐 Saturn |

| الشجرة | الألعاب النارية |
|:---:|:---:|
| 🎄 Tree | 🎆 Fireworks |

## 🚀 البدء السريع

### تثبيت التبعيات

```bash
git clone https://github.com/wangmiaozero/hand-controlled-particles.git
cd hand-controlled-particles
npm install
```

### خادم التطوير

```bash
npm run dev
```

افتح `http://localhost:5173` في المتصفح واسمح بالوصول إلى الكاميرا.

### البناء للإنتاج

```bash
npm run build
```

## 🛠️ التقنيات

| التقنية | الوصف |
|------|------|
| [Vue 3](https://vuejs.org/) | إطار JavaScript تدريجي |
| [Three.js](https://threejs.org/) | مكتبة رسوم ثلاثية الأبعاد |
| [MediaPipe Hands](https://google.github.io/mediapipe/solutions/hands.html) | نموذج تتبع اليد من Google |
| [TypeScript](https://www.typescriptlang.org/) | JavaScript مع أنواع |
| [Vite](https://vitejs.dev/) | أدوات واجهة أمامية حديثة |

## 📁 هيكل المشروع

```
hand-controlled-particles/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.ts                 # نقطة الدخول
    ├── App.vue                 # المكوّن الجذر
    ├── style.css               # الأنماط العامة
    ├── components/
    │   ├── VideoContainer.vue  # معاينة الكاميرا
    │   ├── BottomBar.vue       # الشريط السفلي
    │   └── LoadingOverlay.vue  # التحميل
    └── composables/
        ├── useParticleSystem.ts # نظام الجزيئات Three.js
        └── useHandTracking.ts   # تتبع اليد MediaPipe
```

## 🎮 الاستخدام

### الإيماءات

| الإيماءة | التأثير |
|------|------|
| 👊 قبضة (اليد اليمنى) | انكماش + الشكل التالي |
| 👊 قبضة (اليد اليسرى) | انكماش + الشكل السابق |
| 🖐️ راحة مفتوحة | توسيع الجزيئات |
| ✊ محايد | الحجم الافتراضي |

### الواجهة

- أزرار الأشكال في الأسفل للتبديل مباشرة
- السحب لتدوير المنظر
- العجلة للتكبير والتصغير

## 🔧 الإعداد

### معاملات الجزيئات

في `src/composables/useParticleSystem.ts`:

```typescript
const PARTICLE_COUNT = 4000  // عدد الجزيئات
const PARTICLE_SIZE = 0.15   // الحجم
```

### حساسية الإيماءات

العتبات في `src/App.vue`:

```typescript
const CLOSE_THRESHOLD = 0.08  // كشف القبضة
const OPEN_THRESHOLD = 0.16   // اليد المفتوحة
```

## 🌐 المتصفحات

| المتصفح | الدعم |
|--------|------|
| Chrome | ✅ موصى به |
| Edge | ✅ |
| Firefox | ✅ |
| Safari | ⚠️ يتطلب HTTPS |

> ⚠️ يتطلب WebGL وواجهة getUserMedia

## 📄 الترخيص

[MIT](./LICENSE)

## 🤝 المساهمة

مرحب بالمسائل وطلبات السحب!

1. انسخ المستودع (Fork)
2. أنشئ فرعًا (`git checkout -b feature/AmazingFeature`)
3. اكتب التزامًا (`git commit -m 'Add some AmazingFeature'`)
4. ادفع (`git push origin feature/AmazingFeature`)
5. افتح طلب سحب

## ⭐ Star History

إذا كان المشروع مفيدًا، نجم ⭐ يُسعدنا!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/wangmiaozero">wangmiaozero</a>
</p>
