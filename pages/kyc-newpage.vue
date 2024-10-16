<template>
  <div :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'">
    <div class="container mx-auto">
      <div class="slide-container relative">
        <div
          class="slide"
          :class="{ active: activeSlide === 1, hidden: activeSlide !== 1 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-40">
              <VCol cols="12">FIRST STEP</VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="John"
                  label="Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johncy"
                  label="Mothers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johny"
                  label="Fathers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                />
              </VCol>
            </VRow>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo a fuga nobis autem ducimus architecto
          tenetur hic suscipit perspiciatis quibusdam ut molestiae, quaerat minus explicabo harum distinctio saepe
          ullam. -->
          </div>
        </div>
        <div
          class="slide"
          :class="{ active: activeSlide === 2, hidden: activeSlide !== 2 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-40">
              <VCol cols="12">SECOND STEP</VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="John"
                  label="Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johncy"
                  label="Mothers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johny"
                  label="Fathers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                />
              </VCol>
            </VRow>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo a fuga nobis autem ducimus architecto
          tenetur hic suscipit perspiciatis quibusdam ut molestiae, quaerat minus explicabo harum distinctio saepe
          ullam. -->
          </div>
        </div>
        <div
          class="slide"
          :class="{ active: activeSlide === 3, hidden: activeSlide !== 3 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-40">
              <VCol cols="12">THIRD STEP</VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="John"
                  label="Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johncy"
                  label="Mothers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johny"
                  label="Fathers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                />
              </VCol>
            </VRow>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo a fuga nobis autem ducimus architecto
          tenetur hic suscipit perspiciatis quibusdam ut molestiae, quaerat minus explicabo harum distinctio saepe
          ullam. -->
          </div>
        </div>
        <div
          class="slide"
          :class="{ active: activeSlide === 4, hidden: activeSlide !== 4 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-40">
              <VCol cols="12">FOURTH STEP</VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="John"
                  label="Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johncy"
                  label="Mothers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johny"
                  label="Fathers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                />
              </VCol>
            </VRow>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo a fuga nobis autem ducimus architecto
          tenetur hic suscipit perspiciatis quibusdam ut molestiae, quaerat minus explicabo harum distinctio saepe
          ullam. -->
          </div>
        </div>
        <div
          class="slide"
          :class="{ active: activeSlide === 5, hidden: activeSlide !== 5 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-40">
              <VCol cols="12">FIFTH STEP</VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="John"
                  label="Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johncy"
                  label="Mothers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johny"
                  label="Fathers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                />
              </VCol>
            </VRow>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo a fuga nobis autem ducimus architecto
          tenetur hic suscipit perspiciatis quibusdam ut molestiae, quaerat minus explicabo harum distinctio saepe
          ullam. -->
          </div>
        </div>
        <div
          class="slide"
          :class="{ active: activeSlide === 6, hidden: activeSlide !== 6 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-40">
              <VCol cols="12">SIXTH STEP</VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="John"
                  label="Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johncy"
                  label="Mothers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johny"
                  label="Fathers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                />
              </VCol>
            </VRow>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo a fuga nobis autem ducimus architecto
          tenetur hic suscipit perspiciatis quibusdam ut molestiae, quaerat minus explicabo harum distinctio saepe
          ullam. -->
          </div>
        </div>
        <div
          class="slide"
          :class="{ active: activeSlide === 7, hidden: activeSlide !== 7 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-40">
              <VCol cols="12">SEVENTH STEP</VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="John"
                  label="Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johncy"
                  label="Mothers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="Johny"
                  label="Fathers Name *"
                  id="name"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                />
              </VCol>
            </VRow>
            <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo a fuga nobis autem ducimus architecto
          tenetur hic suscipit perspiciatis quibusdam ut molestiae, quaerat minus explicabo harum distinctio saepe
          ullam. -->
          </div>
        </div>
      </div>
      <div class="slide-nav flex justify-between mb-6 mt-2 md:mx-40">
        <VBtn
          @click="navigate(-1)"
          class="bg-gray-200 p-2 rounded"
          :disabled="activeSlide <= 1"
        >
          PREV
        </VBtn>
        <VBtn
          @click="navigate(1)"
          class="bg-gray-200 p-2 rounded"
          :disabled="steps[steps.length - 1] == activeSlide"
        >
          NEXT
        </VBtn>
      </div>
      <div class="flex justify-center my-4">
        <button
          @click="setSlide(1)"
          class=""
        >
          <div v-if="activeSlide == 1">
            <!-- <VIcon
            icon=" ri-circle-fill"
            class="text-sm mx-2"
          /> -->
            <div
              :class="isDarkTheme == true ? 'bg-[#CCC8E2]' : 'bg-[#CCC8E2]'"
              class="h-3 w-6 rounded-md mx-1"
            ></div>
          </div>
          <div v-else>
            <div
              :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'"
              class="h-3 w-6 rounded-md mx-1"
              :style="isDarkTheme == true ? 'border: 1px solid #CCC8E2' : 'border: 1px solid #CCC8E2'"
            ></div>
          </div>
        </button>
        <button @click="setSlide(2)">
          <div v-if="activeSlide == 2">
            <div
              :class="isDarkTheme == true ? 'bg-[#CCC8E2]' : 'bg-[#CCC8E2]'"
              class="h-3 w-6 rounded-md mx-1"
            ></div>
          </div>
          <div v-else>
            <div
              :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'"
              class="h-3 w-6 rounded-md mx-1"
              :style="isDarkTheme == true ? 'border: 1px solid #CCC8E2' : 'border: 1px solid #CCC8E2'"
            ></div>
          </div>
        </button>
        <button @click="setSlide(3)">
          <div v-if="activeSlide == 3">
            <div
              :class="isDarkTheme == true ? 'bg-[#CCC8E2]' : 'bg-[#CCC8E2]'"
              class="h-3 w-6 rounded-md mx-1"
            ></div>
          </div>
          <div v-else>
            <div
              class="h-3 w-6 rounded-md mx-1"
              :style="isDarkTheme == true ? 'border: 1px solid #CCC8E2' : 'border: 1px solid #CCC8E2'"
            ></div>
          </div>
        </button>
        <button @click="setSlide(4)">
          <div v-if="activeSlide == 4">
            <div
              :class="isDarkTheme == true ? 'bg-[#CCC8E2]' : 'bg-[#CCC8E2]'"
              class="h-3 w-6 rounded-md mx-1"
            ></div>
          </div>
          <div v-else>
            <div
              :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'"
              class="h-3 w-6 rounded-md mx-1"
              :style="isDarkTheme == true ? 'border: 1px solid #CCC8E2' : 'border: 1px solid #CCC8E2'"
            ></div>
          </div>
        </button>
        <button @click="setSlide(5)">
          <div v-if="activeSlide == 5">
            <div
              :class="isDarkTheme == true ? 'bg-[#CCC8E2]' : 'bg-[#CCC8E2]'"
              class="h-3 w-6 rounded-md mx-1"
            ></div>
          </div>
          <div v-else>
            <div
              :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'"
              class="h-3 w-6 rounded-md mx-1"
              :style="isDarkTheme == true ? 'border: 1px solid #CCC8E2' : 'border: 1px solid #CCC8E2'"
            ></div>
          </div>
        </button>
        <button @click="setSlide(6)">
          <div v-if="activeSlide == 6">
            <div
              :class="isDarkTheme == true ? 'bg-[#CCC8E2]' : 'bg-[#CCC8E2]'"
              class="h-3 w-6 rounded-md mx-1"
            ></div>
          </div>
          <div v-else>
            <div
              :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'"
              class="h-3 w-6 rounded-md mx-1"
              :style="isDarkTheme == true ? 'border: 1px solid #CCC8E2' : 'border: 1px solid #CCC8E2'"
            ></div>
          </div>
        </button>
        <button @click="setSlide(7)">
          <div v-if="activeSlide == 7">
            <div
              :class="isDarkTheme == true ? 'bg-[#CCC8E2]' : 'bg-[#CCC8E2]'"
              class="h-3 w-6 rounded-md mx-1"
            ></div>
          </div>
          <div v-else>
            <div
              :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'"
              class="h-3 w-6 rounded-md mx-1"
              :style="isDarkTheme == true ? 'border: 1px solid #CCC8E2' : 'border: 1px solid #CCC8E2'"
            ></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useTheme } from 'vuetify'

export default defineComponent({
  name: 'Slideshow',
  data() {
    return {
      activeSlide: 1,
      steps: [],
    }
  },
  setup() {
    const vuetifyTheme = useTheme()
    const isDarkTheme = computed(() => {
      return vuetifyTheme.global.name.value === 'light' ? false : true
    })

    return {
      isDarkTheme,
    }
  },
  // setup() {
  //   const activeSlide = ref(1)
  //   const router = useRouter()
  //   const steps = ref(router.currentRoute.query.steps.split(','))

  //   const setSlide = (id: number) => {
  //     activeSlide.value = id
  //   }
  //   const navigate = (direction: number) => {
  //     const newValue = activeSlide.value + direction
  //     if (newValue >= 1 && newValue <= steps.value.length) {
  //       activeSlide.value = newValue
  //     }
  //   }
  //   return {
  //     activeSlide,
  //     setSlide,
  //     navigate,
  //     steps,
  //   }
  // },

  mounted() {
    const val = this.$route.query
    // .steps.split(',')
    this.steps = val.steps.split(',')
    console.log(val, this.steps, 'this.steps')
  },
  methods: {
    setSlide(id: number) {
      // this.activeSlide = id
    },
    // navigate(direction: number) {
    //   const newValue = this.activeSlide + direction
    //   console.log(newValue, 'newValue', this.steps)
    //   const stepsAsNumbers = this.steps.map(Number)
    //   console.log(stepsAsNumbers.includes(newValue), 'stepsAsNumbers.includes(newValue)')
    //   if (stepsAsNumbers.includes(newValue)) {
    //     this.activeSlide = newValue
    //   } else {
    //     const nextAvailableValue = stepsAsNumbers.find(step => step > this.activeSlide)
    //     if (nextAvailableValue) {
    //       this.activeSlide = nextAvailableValue
    //     } else {
    //       const previousAvailableValue = stepsAsNumbers.find(step => step < this.activeSlide)
    //       if (previousAvailableValue) {
    //         this.activeSlide = previousAvailableValue
    //       }
    //     }
    //   }
    // },
    navigate(direction: number) {
      const stepsAsNumbers = this.steps.map(Number)
      const currentIndex = stepsAsNumbers.indexOf(this.activeSlide)
      let newIndex = currentIndex + direction

      if (newIndex < 0) {
        newIndex = 0
      } else if (newIndex >= stepsAsNumbers.length) {
        newIndex = stepsAsNumbers.length - 1
      }

      this.activeSlide = stepsAsNumbers[newIndex]
    },
  },
})
</script>

<style scoped>
.slide-container {
  position: relative;
  height: 450px; /* Adjust as needed */
  overflow: hidden; /* Hide overflowing content */
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in-out; /* Add transition to slide */
  top: 0;
}

.slide.hidden {
  transform: translateY(-100%); /* Move slide up to hide it */
}

.slide.active {
  transform: translateY(0); /* Move slide into view */
}
</style>
