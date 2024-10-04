<script lang="ts" >
export default {
  data() {
    return {
      timerValue: 30, // Initial time in seconds
      intervalId: null,
      isRunning: false,
      emailAddress: '',
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: '',
      otpLength: 6, // length of the OTP
      otpTimer: 0, // timer for OTP resend
      otpInterval: null,
      otp6: null,
    }
  },
  mounted() {
    this.startOtpTimer()
  },
  methods: {
    startOtpTimer() {
      this.otpTimer = 30 // set timer to 60 seconds
      this.otpInterval = setInterval(() => {
        this.otpTimer -= 1
        if (this.otpTimer <= 0) {
          clearInterval(this.otpInterval)
        }
      }, 1000)
    },
    handleCheck(newval: any) {
      console.log(newval, 'check')
      this.$emit('next-page', newval)
    },
  },
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VRow class="py-4">
        <VCol
          cols="3"
          md="4"
          class="px-6"
        >
          <img
            src="@images/phonepay.png"
            alt=""
            class="h-10 w-10"
        /></VCol>
        <VCol
          cols="1"
          md="2"
          class="px-6"
        >
          <IconBtn class="">
            <VIcon icon="ri-arrow-right-line" />
          </IconBtn>
        </VCol>
        <VCol
          cols="4"
          md="4"
          class="px-6"
        >
          <img
            src="@/public/download.png"
            alt=""
            class="h-10 w-10"
        /></VCol>
      </VRow>
      <VCol class="font-bold text-lg text-black px-5">Veriffdfy Your Mobile number</VCol>

      <VCol
        cols="12"
        class="px-5"
      >
        We need to verify your phonepe accountId proceed</VCol
      >
      <VCol class="font-bold text-black px-5"> Enter OTP Send to 6374586149</VCol>
      <VCol
        cols="12"
        md="12"
      >
        <OtpInput @otpcheck="handleCheck" /> </VCol></VCol
  ></VRow>
</template>
<style lang="scss">
</style>
