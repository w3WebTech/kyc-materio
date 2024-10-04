<template>
  <!-- Existing code here -->

  <!-- <div v-if="imageData">
      <img
        :src="imageData"
        alt=""
      />
    </div> -->

  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCol class="d-flex justify-center items-center">
        <div>
          <video
            ref="video"
            autoplay
            class="rounded-full"
            style="width: 200px; height: 200px; object-fit: cover"
          ></video>
        </div>
      </VCol>

      <VCol
        cols="12"
        class=""
      >
        <VBtn
          block
          color="secondary"
          type="reset"
          variant="outlined"
          >BACK</VBtn
        >
      </VCol>
      <VCol cols="12">
        <VBtn
          block
          type="submit"
          @click="captureImage"
          >PROCEED</VBtn
        >
      </VCol>
    </VCol>
  </VRow>

  <!-- Existing code here -->
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const video = ref<HTMLVideoElement | null>(null)
const imageData = ref<string | null>(null) // imageData should be a ref<string | null>

const initCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    if (video.value) {
      video.value.srcObject = stream
    }
  } catch (error) {
    console.error('Error accessing camera:', error)
    // Handle error here
  }
}

const captureImage = () => {
  const canvas = document.createElement('canvas')
  if (video.value) {
    canvas.width = video.value.videoWidth
    canvas.height = video.value.videoHeight
    canvas.getContext('2d')?.drawImage(video.value, 0, 0, canvas.width, canvas.height)
    imageData.value = canvas.toDataURL('image/png') // Set imageData.value instead of directly assigning

    // Now you can do something with the captured image data
    console.log('Captured image data:', imageData.value)
  }
}

onMounted(() => {
  initCamera()
})

onUnmounted(() => {
  if (video.value && video.value.srcObject) {
    const tracks = video.value.srcObject.getTracks()
    tracks.forEach(track => track.stop())
  }
})
</script>
 