<template>
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
          @click="navigateBack"
          >BACK</VBtn
        >
      </VCol>

      <VCol cols="12">
        <VBtn
          block
          @click="proceed"
          >PROCEED</VBtn
        >
      </VCol>
    </VCol>
  </VRow>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import { useCounterStore } from '~/stores/user'
const counterStore = useCounterStore()
export default {
  setup() {
    const video = ref<HTMLVideoElement | null>(null)
    const imageData = ref<string | null>(null)

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
      if (video.value && video.value.videoWidth && video.value.videoHeight) {
        canvas.width = video.value.videoWidth
        canvas.height = video.value.videoHeight
        canvas.getContext('2d')?.drawImage(video.value, 0, 0, canvas.width, canvas.height)
        imageData.value = canvas.toDataURL('image/png')

        // Emit the 'next-page' event with the payload
        const instance = getCurrentInstance()
        if (instance) {
          instance.emit('next-page', 'SixthStep-1')
        }
      }
    }

    const route = () => {
      console.log('Route function called')
      const instance = getCurrentInstance()
      if (instance) {
        instance.emit('next-page', 'SixthStep-1')
      }
    }

    const changePAN = () => {
      // Implement your change PAN logic here
    }

    onMounted(() => {
      initCamera()
    })

    onUnmounted(() => {
      if (video.value && video.value.srcObject) {
        const tracks = video.value.srcObject!.getTracks()
        tracks.forEach(track => track.stop())
      }
    })

    return {
      changePAN,
      route,
    }
  },
  methods: {
    proceed() {
      this.increment()
      this.$router.push('/signatureupload')
    },
    increment() {
      counterStore.increment()
    },
    navigateBack() {
      this.$router.push('/selfie')
    },
  },
}
</script>
