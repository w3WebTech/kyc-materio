<script lang="ts" >
import { useCounterStore } from '~/stores/user'
const counterStore = useCounterStore()
export default {
  data() {
    return {
      panNumber: '',
      checkbox: false,
      checkbox1: false,
      isDialogVisible: false,
      emailErrors: [],
    }
  },
  methods: {
    proceed() {
      if (this.checkbox == true && this.checkbox1 == true && this.panNumber != '') {
        this.isDialogVisible = true
      } else {
        this.emailErrors.push('enter PAN Number')
      }
    },
    navigateBack() {
      this.decrement()
      this.$router.push('/mainpage-2')
    },
    decrement() {
      counterStore.decrement()
    },
    increment() {
      counterStore.increment()
    },
  },
  mounted() {},
}
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VCol class="font-bold text-lg py-1">Fill Your PAN Details</VCol>
      <VCol class="py-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</VCol>
      <VCol
        cols="12"
        class="py-1 px-1"
      >
        <VCol
          cols="12"
          md="12"
          class="text-sm"
        >
          <label for="panNumber">Enter PAN</label>
        </VCol>
        <VCol cols="12">
          <VTextField
            id="panNumber"
            v-model="panNumber"
            placeholder="fewyge3674"
            persistent-placeholder
            :error-messages="emailErrors"
          />
        </VCol>
      </VCol>
      <VCol class="">
        <VRow cols="12">
          <VCol cols="1"> <VCheckbox v-model="checkbox" /></VCol>
          <VCol
            cols="11"
            class="mt-2 text-justify"
            >I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias necessitatibus.
            Dolores dolor reiciendis, consequuntur laborum, eum illo suscipit! Id.</VCol
          >
        </VRow>
      </VCol>
      <VCol class="">
        <VRow cols="12">
          <VCol cols="1"> <VCheckbox v-model="checkbox1" /></VCol>
          <VCol
            cols="11"
            class="mt-2 text-justify"
            >I agree Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis molestias ..</VCol
          >
        </VRow>
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
      <VDialog v-model="isDialogVisible">
        <VCard class="padding absolute">
          <VCol class="text-xl font-bold text-black d-flex justify-center py-1">Proceed With PAN</VCol>
          <VCol class="text-xl font-bold text-black d-flex justify-center py-1">AURTDDSJ3243VNDSF</VCol>

          <VCol class="d-flex justify-center text-center items-center py-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus animi blanditiis sit quae quod expedita
            totam rerum, magnam iste nam, accusantium officiis quis quaerat iure ea voluptatibus dignissimos nisi!
          </VCol>
          <VCol>
            <VBtn
              block
              type="submit"
              to="/panupload"
            >
              PROCEED
            </VBtn>
          </VCol>

          <VCol class="">
            <VBtn
              block
              color="secondary"
              type="reset"
              variant="outlined"
            >
              CHANGE PAN
            </VBtn>
          </VCol>
        </VCard>
      </VDialog>
    </VCol>
  </VRow>
</template>
<style  >
.v-dialog .v-overlay__content {
  height: 40% !important;

  position: absolute !important;
  margin: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  max-width: none !important;
}
.padding {
  padding-top: 80px !important;
  padding-bottom: 80px !important;
}
.v-dialog > .v-overlay__content {
  height: 50% !important;
  width: 100% !important;
  max-width: none !important;
}
</style>


