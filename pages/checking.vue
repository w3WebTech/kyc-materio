<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            @step-changed="handleStepChanged"
            v-model:current-step="currentStep"
            direction="vertical"
            :myValue="currentStep"
          />
        </VCardText>
      </VCol>
      <!-- 👉 Stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 0 && currentPage == 'FirstStep'"
            >
              <VWindowItem>
                <FirstStep @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 0 && currentPage == 'FirstStep-2'"
            >
              <VWindowItem>
                <FirstStep-2 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 0 && currentPage == 'FirstStep-3'"
            >
              <VWindowItem>
                <FirstStep-3 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 0 && currentPage == 'FirstStep-4'"
            >
              <VWindowItem>
                <FirstStep-4 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 0 && currentPage == 'FirstStep-5'"
            >
              <VWindowItem>
                <FirstStep-5 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 1 && currentPage == 'SecondStep-1'"
            >
              <VWindowItem>
                <SecondStep-1 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 1 && currentPage == 'SecondStep-2'"
            >
              <VWindowItem>
                <SecondStep-2 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 1 && currentPage == 'SecondStep-3'"
            >
              <VWindowItem>
                <SecondStep-3 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 2 && currentPage == 'ThirdStep-1'"
            >
              <VWindowItem>
                <ThirdStep-1 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 2 && currentPage == 'ThirdStep-2'"
            >
              <VWindowItem>
                <ThirdStep-2 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 2 && currentPage == 'ThirdStep-3'"
            >
              <VWindowItem>
                <ThirdStep-3 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 2 && currentPage == 'ThirdStep-4'"
            >
              <VWindowItem>
                <ThirdStep-4 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 3 && currentPage == 'FourthStep-1'"
            >
              <VWindowItem>
                <FourthStep-1 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 4 && currentPage == 'FifthStep-1'"
            >
              <VWindowItem>
                <FifthStep-1 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 4 && currentPage == 'FifthStep-2'"
            >
              <VWindowItem>
                <FifthStep-2 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 5 && currentPage == 'SixthStep-1'"
            >
              <VWindowItem>
                <SixthStep-1 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 6 && currentPage == 'SeventhStep-1'"
            >
              <VWindowItem>
                <SeventhStep-1 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>
            <VWindow
              class="disable-tab-transition"
              v-if="currentStep == 7 && currentPage == 'EightthStep-1'"
            >
              <VWindowItem>
                <EightthStep-1 @next-page="handleChange" />
              </VWindowItem>
            </VWindow>

            <!-- <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8 pl-5">
              <VBtn
                color="secondary"
                variant="outlined"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="ri-arrow-left-line"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn @click="currentStep++">
                Next
                <VIcon
                  icon="ri-arrow-right-line"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div> -->
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      currentStep: 0,

      currentPage: 'FirstStep',
    }
  },
  methods: {
    handleStepChanged(newStepValue: number) {
      console.log(newStepValue, 'newStepValue')
      this.currentStep = newStepValue
      // Update your application logic based on the new step value here
    },
    handleChange(newval: any) {
      console.log(newval, 'newval')
      if (newval == 'SecondStep-1') {
        this.currentStep = 1
        this.currentPage = newval
      } else if (newval == 'ThirdStep-1') {
        this.currentStep = 2
        this.currentPage = newval
        console.log(this.currentStep, this.currentPage, ' this.currentPage')
      } else if (newval == 'FourthStep-1') {
        this.currentStep = 3
        this.currentPage = newval
      } else if (newval == 'FifthStep-1') {
        this.currentStep = 4
        this.currentPage = newval
        console.log(this.currentStep, this.currentPage, ' this.currentPage')
      } else if (newval == 'SixthStep-1') {
        this.currentStep = 5
        this.currentPage = newval
      } else if (newval == 'SeventhStep-1') {
        this.currentStep = 6
        this.currentPage = newval
      } else if (newval == 'EightthStep-1') {
        this.currentStep = 7
        this.currentPage = newval
      } else {
        this.currentPage = newval
      }
    },
  },
})
</script>
