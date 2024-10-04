<template>
  <div class="flex space-x-2">
    <VTextField
      v-for="(digit, index) in otpDigits"
      :key="index"
      outlined
      dense
      class="w-12 h-10 text-center"
      type="text"
      maxlength="1"
      :placeholder="digit"
      v-model="otpInputs[index]"
      @input="handleInput(index)"
      @keydown.backspace.prevent="handleBackspace(index)"
      ref="otpInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      otpInputs: ['', '', '', '', '', ''], // Adjust based on the length of your OTP
    }
  },
  computed: {
    otpDigits() {
      return Array.from({ length: 6 }, (_, index) => index + 1) // Adjust based on the length of your OTP
    },
    isMobile() {
      // Simple detection based on screen width for mobile view
      return window.innerWidth <= 768 // Adjust this breakpoint as per your design
    },
  },
  methods: {
    // focusNextInput(index) {
    //   if (index < this.otpInputs.length - 1) {
    //     this.$refs.otpInput[index + 1].focus()
    //   }
    // },
    // focusPreviousInput(index) {
    //   if (index > 0) {
    //     this.$refs.otpInput[index - 1].focus()
    //   }
    // },
    handleInput(index) {
      if (this.otpInputs[index] && index < this.otpInputs.length - 1) {
        this.focusNextInput(index)
      }
      this.checkAndNavigate()
    },
    handleBackspace(index) {
      if (index > 0 && this.otpInputs[index] === '') {
        this.focusPreviousInput(index - 1)
      }
    },
    focusNextInput(index) {
      this.$refs.otpInput[index + 1].focus()
    },
    focusPreviousInput(index) {
      this.$refs.otpInput[index - 1].focus()
    },
    checkAndNavigate() {
      const enteredOTP = this.otpInputs.join('')
      const correctOTP = '123456'

      if (enteredOTP === correctOTP && enteredOTP.length == 6) {
        if (this.isMobile) {
          this.$router.push('/addEmail')
        } else {
          this.$emit('otpcheck', 'FirstStep-3')
        }
      } else if (enteredOTP.length == 6 && enteredOTP != correctOTP) {
        alert('incorrect OTP')
        this.otpInputs = ['', '', '', '', '', '']
      } else {
        // Optionally show an error message or handle incorrect OTP
      }
    },
  },
  watch: {
    otpInputs: {
      handler: 'checkAndNavigate',
      deep: true,
    },
  },
}
</script>

<style scoped>
/* Add Tailwind CSS classes here if needed */
</style>
