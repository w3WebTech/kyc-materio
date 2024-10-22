<template>
  <div class="flex items-center justify-center">
    <UiButton @click="triggerConfetti()">Random Direction</UiButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import confetti from 'canvas-confetti'
function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min
}
const triggerConfetti = () => {
  confetti({
    angle: randomInRange(360, 360),
    spread: randomInRange(360, 360),
    particleCount: randomInRange(200, 360),
    origin: { y: 0.6 },
  })
}
</script>
