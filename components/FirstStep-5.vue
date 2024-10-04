<script lang="ts" >
export default {
  data() {
    return {
      emailAddress: '',
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: '',
    }
  },
  methods: {
    route() {
      this.$emit('next-page', 'SecondStep-1')
    },
  },
}
</script>

<template>
  <VRow class="">
    <VCol>
      <VCol
        cols="12"
        md="6"
        class=""
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
        cols="12"
        md="6"
        class="px-5 pt-10"
      >
        <VBtn
          block
          type="submit"
          @click="route"
        >
          OPEN ACCOUNT
        </VBtn>
      </VCol>
    </VCol>
  </VRow>
</template>
<style lang="scss">
</style>

