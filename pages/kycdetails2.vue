<script lang="ts" >
export default {
  data() {
    return { checkbox: false }
  },
  methods: {
    navigateBack() {
      this.$router.push('/kycdetails')
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
      <VCol class="px-3">KYC detail(2/3)</VCol>
      <VCol class="font-bold text-lg pt-1">What is Your Income Range And Trading Experience?</VCol>
      <VCol class="px-3 py-1">This is required to complete your KYC and securely open your demat account</VCol>
      <VCol>
        <VLabel class="font-bold">Income Range</VLabel>
      </VCol>
      <VCol class="py-1"
        ><VAutocomplete
          :items="items"
          placeholder="Select Income Range"
      /></VCol>
      <VCol>
        <VLabel class="font-bold">Trading Experience</VLabel>
      </VCol>
      <VCol class="py-1"
        ><VAutocomplete
          :items="items"
          placeholder="Select Trading Experience"
      /></VCol>
      <VCol>
        <VLabel class="font-bold">Withdraw Un-Invested Funds Everyday:</VLabel>
      </VCol>
      <VRow class="px-3">
        <VCol>
          <button
            ref="fundButton1"
            class="gender-button"
            :class="{ selected: selectedfundButton === 'QUARTER' }"
            @click="selectFundButton('QUARTER')"
          >
            QUARTER
          </button>
          <button
            ref="fundButton2"
            class="gender-button"
            :class="{ selected: selectedfundButton === 'MONTH' }"
            @click="selectFundButton('MONTH')"
          >
            MONTH
          </button>
        </VCol>
      </VRow>
      <VCol class="px-3 text-sm"
        >By selecting the preference, I agree to abide by TAC of Ruiving Account Authorisation Learn more</VCol
      >
      <VCol class="">
        <VRow cols="12">
          <VCol cols="1"> <VCheckbox v-model="checkbox" /></VCol>
          <VCol
            cols="11"
            class="mt-2 text-justify"
            >I am an Indian Resident, I am neither a specified</VCol
          >
        </VRow>
      </VCol>
      <VCol
        class="fixed bottom-0"
        cols="12"
      >
        <VRow class="bg-white">
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
              to="/kycdetails3"
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
</style>
