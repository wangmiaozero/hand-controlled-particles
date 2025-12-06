<script setup lang="ts"></script>

<template>
  <div class="loading">
    <div class="loading-content">
      <div class="spinner"></div>
      <p class="loading-text">Initializing AI &amp; Graphics...</p>
      <span class="loading-hint">Please allow camera access</span>
    </div>
  </div>
</template>

<style scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  pointer-events: none;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  z-index: 20;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top-color: #00ffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-size: 1.5rem;
  margin: 0;
}

.loading-hint {
  font-size: 0.8rem;
  opacity: 0.7;
}
</style>

