<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import VideoContainer from './components/VideoContainer.vue'
import BottomBar from './components/BottomBar.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'
import { useParticleSystem } from './composables/useParticleSystem'
import { useHandTracking } from './composables/useHandTracking'

const canvasContainer = ref<HTMLElement | null>(null)
const videoElement = ref<HTMLVideoElement | null>(null)
const isLoading = ref(true)

const {
  state,
  shapeNames,
  currentShapeIndex,
  setShapeByIndex,
  nextShape,
  prevShape,
  init: initParticles,
  animate,
  cleanup: cleanupParticles,
} = useParticleSystem()

const { init: initHandTracking, cleanup: cleanupHandTracking } = useHandTracking({
  onResults: (results) => {
    isLoading.value = false

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      state.handActive = true

      const landmarks = results.multiHandLandmarks[0]
      const handedness = results.multiHandedness?.[0]?.label ?? 'Right'
      state.gestureSide = handedness

      const thumbTip = landmarks[4]
      const indexTip = landmarks[8]

      const distance = Math.sqrt(
        Math.pow(thumbTip.x - indexTip.x, 2) + Math.pow(thumbTip.y - indexTip.y, 2)
      )

      const CLOSE_THRESHOLD = 0.08
      const OPEN_THRESHOLD = 0.16

      let pinchState: 'closed' | 'open' | 'neutral' = 'neutral'
      if (distance < CLOSE_THRESHOLD) {
        pinchState = 'closed'
      } else if (distance > OPEN_THRESHOLD) {
        pinchState = 'open'
      }

      if (pinchState === 'closed') {
        state.targetScale = 0.5
        state.gestureMode = 'Contract'
        state.noiseStrength = 0.05
      } else if (pinchState === 'open') {
        state.targetScale = 2.0
        state.gestureMode = 'Spread'
        state.noiseStrength = 0.6
      } else {
        state.targetScale = 1.0
        state.gestureMode = 'Neutral'
        state.noiseStrength = 0.2
      }

      if (state.prevPinchState !== 'closed' && pinchState === 'closed') {
        if (handedness === 'Right') {
          nextShape()
        } else if (handedness === 'Left') {
          prevShape()
        }
      }

      state.prevPinchState = pinchState
    } else {
      state.handActive = false
      state.gestureSide = 'None'
      state.gestureMode = 'Neutral'
      state.targetScale = 1.0
      state.noiseStrength = 0.05
      state.prevPinchState = 'neutral'
    }
  },
})

onMounted(() => {
  if (canvasContainer.value) {
    initParticles(canvasContainer.value)
    animate()
  }
  if (videoElement.value) {
    initHandTracking(videoElement.value)
  }
})

onUnmounted(() => {
  cleanupParticles()
  cleanupHandTracking()
})
</script>

<template>
  <div class="app-container">
    <div ref="canvasContainer" class="canvas-container"></div>

    <LoadingOverlay v-if="isLoading" />

    <VideoContainer ref="videoElement" @video-ready="(el) => (videoElement = el)" />

    <BottomBar
      :shape="state.shape"
      :shapes="shapeNames"
      :current-index="currentShapeIndex"
      :gesture-side="state.gestureSide"
      :gesture-mode="state.gestureMode"
      @select-shape="setShapeByIndex"
    />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.canvas-container {
  width: 100%;
  height: 100%;
}
</style>

