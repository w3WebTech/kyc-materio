<script lang="ts" >
import { useCounterStore } from '~/stores/user'
const counterStore = useCounterStore()
export default {
  data() {
    return {
      checkbox: false,
      checkbox1: false,
    }
  },
  methods: {
    proceed() {
      this.increment()
      this.$router.push('/esign')
    },
    increment() {
      counterStore.increment()
    },

    navigateBack() {
      this.decrement()
      this.$router.push('/signatureupload')
    },
    decrement() {
      counterStore.decrement()
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
      <VCol class="font-bold text-lg">Select Segment For Activation</VCol>
      <VCol class="px-3 py-1">Select which market you want to trade in.This can be done later as well.</VCol>
      <VCol
        ><div class="border border-gray rounded-md">
          <VCol class="py-1">
            <VRow>
              <VCol
                class="font-bold text-lg"
                cols="10"
                >Equities
              </VCol>
              <VCol cols="2"><VCheckbox v-model="checkbox" /></VCol>
            </VRow>
          </VCol>

          <VCol class="px-3 py-1">You can invest and trade in stocks and ETF's by activating this..</VCol>
        </div></VCol
      >
      <VCol
        ><div class="border border-gray rounded-md">
          <VCol class="py-1">
            <VRow>
              <VCol
                class="font-bold text-lg"
                cols="10"
                >Futures & Options
              </VCol>
              <VCol cols="2"><VCheckbox v-model="checkbox1" /></VCol>
            </VRow>
          </VCol>

          <VCol class="px-3 py-1">Only select this if you're an experienced trader</VCol>
          <div class="bg-[#FFE8E8] text-[#ebad67] px-3 font-semibold">Requires you to upload an income proof</div>
        </div>
      </VCol>

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
              @click="proceed"
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
