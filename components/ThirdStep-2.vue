<script lang="ts" >
export default {
  data() {
    return {}
  },
  methods: {
    route() {
      console.log('d')
      this.$emit('next-page', 'ThirdStep-3')
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
      <VRow class="px-3 py-4">
        <VCol cols="4">
          <VBtn
            block
            color="secondary"
            type="reset"
            variant="outlined"
          >
            BACK
          </VBtn>
        </VCol>
        <VCol cols="8">
          <VBtn
            block
            type="submit"
            @click="route"
          >
            PROCEED
          </VBtn>
        </VCol>
      </VRow>
    </VCol></VRow
  >
</template>
<style lang="scss">
</style>
