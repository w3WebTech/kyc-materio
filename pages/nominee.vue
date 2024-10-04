<script lang="ts" >
import Datepicker from 'vue3-datepicker'
import { useCounterStore } from '~/stores/user'
const counterStore = useCounterStore()
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      checkbox: false,
      checkbox1: false,
      checkbox2: false,
      selectedDateTime: null,
      language: 'en',
    }
  },
  methods: {
    increment() {
      counterStore.increment()
    },
    proceed() {
      this.increment()
      this.$router.push('/bankdetails')
    },
    navigateBack() {
      this.$router.push('/kycdetails3')
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
      <VCol class="">Nominee addition</VCol>
      <VCol class="font-bold text-lg py-1">Add Nominee To Your Account</VCol>
      <VCol class="py-1">Nominees are the resipients of your stocks in case of your death</VCol>
      <VCol>
        <VAlert
          border="start"
          border-color="warning"
        >
          You can tap SKIP if you don't want to add a nominee
        </VAlert></VCol
      >
      <VCol>
        <VLabel class="font-bold">Nominee's Full Name</VLabel>
      </VCol>
      <VCol class="py-1"> <VTextField /></VCol>
      <VCol>
        <VLabel class="font-bold">This Person Is Your</VLabel>
      </VCol>
      <VCol
        ><VAutocomplete
          :items="items"
          placeholder="Select Ralationship"
      /></VCol>
      <VCol>
        <VLabel class="font-bold">Nominee's Date Of Birth</VLabel>
      </VCol>
      <VCol class="">
        <datepicker
          v-model="selectedDateTime"
          format="yyyy-MM-dd HH:mm:ss"
          :language="language"
          class="datepick"
      /></VCol>
      <VCol class="">
        <VRow cols="12">
          <VCol cols="1"> <VCheckbox v-model="this.checkbox2" /></VCol>
          <VCol
            cols="11"
            class="mt-2 text-justify"
            >Nominee's address is same as mine</VCol
          >
        </VRow>
      </VCol>
      <VCol class="fixed bottom-0">
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
              @click="proceed"
              to="/bankdetails"
            >
              PROCEED
            </VBtn>
          </VCol>
        </VRow>
      </VCol></VCol
    ></VRow
  >
</template>
<style lang="scss">
.datepick {
  padding: 10px 8px;
  border: 1px solid #bfbdc4;
  margin-right: 6px;
  border-radius: 4px;
  border-color: #bfbdc4;
  font-size: 0.875rem;
  font-weight: medium;
  width: 100%;

  background-color: white;
  color: #bfbdc4;
}
</style>
