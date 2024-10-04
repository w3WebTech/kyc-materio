<script lang="ts" >
export default {
  data() {
    return {
      checkbox: false,
      checkbox1: false,
      checkbox2: false,
    }
  },
  methods: {},
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCol class="px-3">Selfie</VCol>
      <VCol class="font-bold text-lg pt-1">Click A Selfie</VCol>
      <VCol class="px-3 py-1">Your Live Photo is required to sequirely open your demat account</VCol>
      <VCol>
        <img
          src="@/public/selfie.jpeg"
          alt=""
          class="w-full"
        />
      </VCol>
      <VCol>
        <VAlert
          border="start"
          border-color="warning"
        >
          To proceed with clicking a selfie,we need access to your webcam and location.Please allow the permissions to
          proceed.
        </VAlert></VCol
      >

      <VRow class="">
        <VCol
          cols="12"
          class="fixed bottom-0"
        >
          <VBtn
            class="w-[90%]"
            type="submit"
            to="/cameraaccess"
          >
            OPEN CAMERA
          </VBtn>
        </VCol>
      </VRow>
    </VCol></VRow
  >
</template>
<style lang="scss">
</style>
