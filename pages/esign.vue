<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '~/stores/user'
const counterStore = useCounterStore()
export default defineComponent({
  data() {
    return {
      isDialogVisible: false,
    }
  },
  methods: {
    navigateBack() {
      this.decrement()
      this.$router.push('/segmentactivation')
    },
    decrement() {
      counterStore.decrement()
    },
  },
  mounted() {},
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCol class="py-1">Signature</VCol>
      <VCol class="font-bold text-lg py-1">Add Your E-Sign</VCol>
      <VCol class="py-1"
        >This is required to digitally sign your documents. Your phone number must be linked to your Aadhaar to complete
        this Details step</VCol
      >
      <VCol
        cols="12"
        class=""
      >
        <div class="border border-gray rounded-md h-40">
          <img
            src="@/public/esign.jpeg"
            alt=""
            class="h-40 w-full"
          />
        </div>
      </VCol>
      <VCol>
        <VAlert
          border="start"
          border-color="warning"
        >
          Opening E-sign page.This may Take 10-15 secs
        </VAlert></VCol
      >

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
              @click="this.isDialogVisible = true"
            >
              PROCEED TO E_SIGN
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
      <VDialog
        v-model="isDialogVisible"
        width="500"
      >
        <VCard class="py-3 mx-10">
          <VCol
            ><div class="loader">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div></div
          ></VCol>
          <VCol class="text-xl font-bold text-black d-flex justify-center items-center text-center py-1"
            >Waiting For E-Sign Completion</VCol
          >

          <VCol class="d-flex justify-start text-center items-center py-1">
            Please complete the e-sign in this window.if you don't see the E-sign window ,please enable the popups in
            your browser.
          </VCol>
        </VCard>
      </VDialog>
    </VCol></VRow
  >
</template>

<style lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px; /* Adjust as needed */
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #2b58a3; /* Violet color */
  margin: 0 5px;
  animation: bounce 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
