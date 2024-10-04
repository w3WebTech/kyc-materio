<script lang="ts" >
export default {
  data() {
    return {
      emailAddress: '',
      isValidEmail: false,
      isError: false,
      isMobileNumberValid: false,
      mobileNumber: null,
      emailErrors: [],
      isDialogVisible: false,
    }
  },
  methods: {
    handleInputChange(event) {
      // Remove non-numeric characters and limit to 10 digits
      let value = event.target.value.replace(/\D/g, '').slice(0, 10)
      this.mobileNumber = value === '' ? null : parseInt(value, 10)
    },
    validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      this.isValidEmail = emailRegex.test(this.emailAddress)
      if (this.isValidEmail == false) {
        this.isError = true
      } else {
        this.$router.push('/verification')
      }
    },
    validateMobileNumber(): any {
      const mobileNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
      console.log(mobileNumberRegex.test(this.mobileNumber), 'valid')
      this.isMobileNumberValid = mobileNumberRegex.test(this.mobileNumber)
      if (this.isMobileNumberValid == true) {
        this.isDialogVisible = true
        setTimeout(() => {
          this.isDialogVisible = false
          this.$router.push('/otp') // Redirect to OTP page after 2 seconds
        }, 2000)
      } else {
        this.emailErrors.push('Enter valid Number')
      }
    },
  },
}
</script>

<template >
  <VRow class="my-5">
    <VCol
      cols="12"
      md="6"
    >
      <VRow class="px-2">
        <VCol
          cols="3"
          md="3"
          class=""
        >
          <img
            src="@/public/logochange.png"
            alt=""
            class="h-10 w-14"
        /></VCol>
        <VCol
          cols="1"
          md="1"
          class=""
        >
          <IconBtn class="">
            <VIcon icon="ri-arrow-right-line" />
          </IconBtn>
        </VCol>
        <VCol
          cols="4"
          md="2"
          class="px-6"
        >
          <img
            src="@/public/download.png"
            alt=""
            class="h-10 w-10"
        /></VCol>
      </VRow>
      <VCol class="font-bold text-lg text-black px-4"
        >Use Your PhonePe Account to <br />
        proceed with Share Market</VCol
      >

      <VCol
        cols="12"
        md="12"
        class="text-sm text-black"
      >
        <label for="mobile">Enter Mobile Number</label>
      </VCol>
      <VCol>
        <div>
          <div class="relative">
            <span class="z-10 inline-block w-10 leading-normal absolute text-center py-3 rounded-md m-1"> +91 </span>
            <input
              type="number"
              class="pl-12 pr-4 py-3 text-bold border border-[#0d0d0d] rounded-lg w-full focus:outline-none focus:border-[#2B58A3]"
              v-model="mobileNumber"
              @input="handleInputChange"
            />
          </div>
        </div>
      </VCol>

      <VCol
        cols="12"
        class="px-5"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.sed
        <span class="font-bold">terms & conditions</span> and <span class="font-bold">privacy policy</span></VCol
      >
      <VCol
        cols="12"
        class="fixed bottom-0"
      >
        <VBtn
          class="w-[90%] rounded-full"
          color="primary"
          type="reset"
          @click="validateMobileNumber"
        >
          Proceed
        </VBtn>
      </VCol>

      <VDialog
        v-model="isDialogVisible"
        width="500"
      >
        <VCard>
          <div class="flex justify-center items-center text-center py-6 my-6">
            <div class="demo-space-x">
              <VProgressCircular
                :size="30"
                width="3"
                color="primary"
                indeterminate
              />
            </div>
            <div>proceed to login</div>
          </div>
        </VCard>
      </VDialog>
    </VCol></VRow
  >
</template>
<style lang="scss" scope>
.rounded-full {
  border-radius: 9999px !important;
}
</style>
