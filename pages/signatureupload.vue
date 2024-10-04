<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '~/stores/user'
const counterStore = useCounterStore()
export default defineComponent({
  data() {
    return {
      fileInput: null as HTMLInputElement | null,
      images: null as string | null,
      isDialogVisible: false,
    }
  },
  methods: {
    openFileInput() {
      if (this.fileInput) {
        this.fileInput.click()
      }
    },
    handleFileUpload(event: Event) {
      const input = event.target as HTMLInputElement
      if (input.files && input.files[0]) {
        const file = input.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          if (typeof e.target?.result === 'string') {
            this.images = e.target.result
          }
        }
        reader.readAsDataURL(file)
      }
    },
    proceed() {
      this.increment()
      this.$router.push('/segmentactivation')
    },
    increment() {
      counterStore.increment()
    },
    navigateBack() {
      this.decrement()
      this.$router.push('/cameraaccess')
    },
    decrement() {
      counterStore.decrement()
    },
  },
  mounted() {
    this.fileInput = this.$refs.fileInput as HTMLInputElement
  },
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCol class="py-1">Signature</VCol>
      <VCol class="font-bold text-lg py-1">Add Your Signature</VCol>
      <VCol class="py-1">Your SIgnature is required to securely open your demat account</VCol>
      <VCol
        cols="12"
        class=""
      >
        <div class="border border-gray rounded-md h-40">
          <VCol @click="openFileInput">
            <div>Draw your sign in this box...</div>
          </VCol>
          <input
            type="file"
            ref="fileInput"
            id="fileInput"
            @change="handleFileUpload"
            hidden
          />
        </div>
      </VCol>

      <VCol
        class="fixed bottom-0"
        cols="12"
      >
        <VRow>
          <VCol cols="5">
            <VBtn
              class="w-full"
              color="secondary"
              type="reset"
              variant="outlined"
              @click="navigateBack"
            >
              BACK
            </VBtn>
          </VCol>
          <VCol cols="7">
            <VBtn
              class="w-[80%]"
              type="submit"
              @click="proceed"
            >
              PROCEED
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VCol></VRow
  >
</template>

<style lang="scss">
// .v-card {
//   position: none !important;
//   bottom: 0 !important;
// }
// .v-dialog .v-overlay__content {
//   max-width: 75% !important;
// }
</style>
