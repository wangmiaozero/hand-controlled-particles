<script setup lang="ts">
defineProps<{
  shape: string
  shapes: string[]
  currentIndex: number
  gestureSide: 'Left' | 'Right' | 'None'
  gestureMode: 'Contract' | 'Spread' | 'Neutral'
}>()

const emit = defineEmits<{
  selectShape: [index: number]
}>()
</script>

<template>
  <div class="bottom-bar">
    <!-- 左：当前形状 + 提示 -->
    <div class="bar-section">
      <span>Shape:</span>
      <span class="badge">{{ shape }}</span>
      <span class="hint">握拳左手 → 上一个 ｜ 握拳右手 → 下一个</span>
    </div>

    <!-- 中间：形状按钮 -->
    <div class="bar-section shape-buttons">
      <button
        v-for="(name, idx) in shapes"
        :key="name"
        class="shape-btn"
        :class="{ active: idx === currentIndex }"
        @click="emit('selectShape', idx)"
      >
        {{ name }}
      </button>
    </div>

    <!-- 右侧：手势 / 模式状态 -->
    <div class="bar-section">
      <span>Hand: <span class="badge">{{ gestureSide }}</span></span>
      <span>
        Mode:
        <span
          class="badge"
          :class="{
            'badge-gesture-contract': gestureMode === 'Contract',
            'badge-gesture-spread': gestureMode === 'Spread',
          }"
        >
          {{ gestureMode }}
        </span>
      </span>
      <span class="hint">握拳 = 收缩 ｜ 张开 = 散开</span>
    </div>
  </div>
</template>

<style scoped>
.bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 72px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.2));
  backdrop-filter: blur(14px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 15;
}

.bar-section {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
}

.shape-buttons {
  display: flex;
  gap: 8px;
}

.shape-btn {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  font-size: 0.8rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.shape-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.shape-btn.active {
  background: linear-gradient(135deg, #00ffff, #00b3ff);
  border-color: rgba(0, 0, 0, 0.4);
  color: #050505;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.6);
}

.badge {
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.badge-gesture-contract {
  background: rgba(0, 255, 190, 0.12);
  border-color: rgba(0, 255, 190, 0.6);
  color: #72ffe2;
}

.badge-gesture-spread {
  background: rgba(0, 179, 255, 0.12);
  border-color: rgba(0, 179, 255, 0.7);
  color: #7fdaff;
}

.hint {
  font-size: 0.75rem;
  opacity: 0.7;
}
</style>

