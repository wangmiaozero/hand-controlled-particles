<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
  videoReady: [element: HTMLVideoElement]
}>()

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (videoRef.value) {
    emit('videoReady', videoRef.value)
  }
})
</script>

<template>
  <div class="video-container">
    <video ref="videoRef" class="input-video" playsinline></video>
  </div>
</template>

<style scoped>
.video-container {
  position: absolute;
  bottom: 90px;
  left: 20px;
  width: 200px;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  transform: scaleX(-1);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
}

.input-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

