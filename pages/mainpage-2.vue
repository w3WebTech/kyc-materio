<script lang="ts" >
import { useCounterStore } from '~/stores/user'
const counterStore = useCounterStore()
export default {
  data() {
    return {
      emailAddress: '',
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: '',
      counter: counterStore.count,
    }
  },
  methods: {
    proceed() {
      this.increment()

      this.$router.push('/pandetails')
    },
    navigateBack() {
      this.$router.push('/addEmail')
    },
    increment() {
      counterStore.increment()
    },
  },
}
</script>

<template>
  <VRow class="px-3">
    <VCol
      cols="12"
      md="6"
      class="d-flex justify-start"
    >
      <img
        src="@/public/plant.jpeg"
        alt=""
        class="rounded-full h-24 w-24"
      />
    </VCol>
    <VCol class="font-bold text-2xl px-6"
      >Start Your <br />
      Invesment Journey <br />With Us</VCol
    >
    <div class="d-flex align-center mb-2 px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="green"
        class="h-5 w-5"
      >
        <path
          d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
        ></path>
      </svg>
      <span class="ms-3">Bank Account number and IFSC </span>
    </div>
    <div class="d-flex align-center mb-2 px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="green"
        class="h-5 w-5"
      >
        <path
          d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
        ></path>
      </svg>
      <span class="ms-3">Bank Account number and IFSC </span>
    </div>
    <div class="d-flex align-center mb-2 px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="green"
        class="h-5 w-5"
      >
        <path
          d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
        ></path>
      </svg>
      <span class="ms-3">Bank Account number and IFSC </span>
    </div>
    <div class="d-flex align-center mb-2 px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="green"
        class="h-5 w-5"
      >
        <path
          d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
        ></path>
      </svg>
      <span class="ms-3">Bank Account number and IFSC </span>
    </div>
    <div class="d-flex align-center mb-2 px-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="green"
        class="h-5 w-5"
      >
        <path
          d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
        ></path>
      </svg>
      <span class="ms-3">Bank Account number and IFSC </span>
    </div>

    <VCol
      class="fixed bottom-0"
      cols="12"
    >
      <VRow>
        <VCol cols="2">
          <VBtn
            class="w-full"
            color="secondary"
            type="reset"
            variant="outlined"
            @click="navigateBack"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </VBtn>
        </VCol>
        <VCol cols="10">
          <VBtn
            class="w-[80%]"
            type="submit"
            @click="proceed"
          >
            OPEN ACCOUNT
          </VBtn>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
<style lang="scss">
</style>
