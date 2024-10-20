<template>
  <div :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'">
    <div class="mx-auto">
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
        <div
          class="slide"
          :class="{ active: activeSlide === 8, hidden: activeSlide !== 8 }"
        >
          <div class="slide-1 w-full flex justify-center space-x-4">
            <VRow class="md:px-60">
              <!-- <VCol cols="12">EIGHTH STEP</VCol> -->
              <VCol
                cols="12"
                md="6"
                class=""
              >
                <faceliveness />
              </VCol>
            </VRow>
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
          :disabled="steps[steps?.length - 1] == activeSlide"
          id="start-button"
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
        <button @click="setSlide(8)">
          <div v-if="activeSlide == 8">
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
import { useTheme } from 'vuetify'

import { defineComponent, ref, onMounted } from 'vue'
// import { FaceMesh } from '@mediapipe/face_mesh'
import { Camera } from '@mediapipe/camera_utils'
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

    // Function to create fireworks
    function createFireworks(): void {
      const body: HTMLBodyElement = document.body
      for (let i = 0; i < 40; i++) {
        const firework: HTMLDivElement = document.createElement('div')
        firework.classList.add('firework')
        const size: number = Math.random() * 50 + 10 // Random size between 10px and 60px
        firework.style.width = `${size}px`
        firework.style.height = `${size}px`
        firework.style.position = 'absolute' // Set position to absolute to place correctly
        firework.style.top = `${Math.random() * 100}vh` // Random vertical position
        firework.style.left = `${Math.random() * 100}vw` // Random horizontal position
        body.appendChild(firework)
        firework.style.display = 'block' // Show the firework
      }

      // Remove fireworks after 2 seconds
      setTimeout(() => {
        const fireworks: NodeListOf<HTMLDivElement> = document.querySelectorAll('.firework')
        fireworks.forEach(firework => firework.remove())
      }, 2000)
    }

    return {
      isDarkTheme,
      createFireworks,
    }
  },
  mounted() {
    const val = this.$route.query.steps ? this.$route.query.steps : '1,2,3,4,5,6,7,8'
    this.steps = val.split(',')
    console.log(val, this.steps, 'this.steps')
    // if (FaceMesh) {
    //   const faceMesh = new FaceMesh()
    //   // Your initialization code here...
    // } else {
    //   console.error('FaceMesh is not defined')
    // }
    const startButton = document.getElementById('start-button')
    if (startButton) {
      startButton.addEventListener('click', this.createFireworks)
    }
  },
  methods: {
    setSlide(id: number) {
      this.activeSlide = id
    },
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

<style lang="scss" >
@use '@core/scss/pages/page-auth.scss';

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
  animation: slideOut 0.5s forwards;
}

.slide.active {
  animation: slideIn 0.5s forwards;
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes firework {
  0% {
    transform: translate(-50%, 60vh);
    width: 10px; /* Fixed size */
    height: 10px; /* Fixed size */
    opacity: 1;
  }
  50% {
    width: 10px; /* Fixed size */
    height: 10px; /* Fixed size */
    opacity: 1;
  }
  100% {
    width: 100px; /* Explode to larger size */
    height: 100px; /* Explode to larger size */
    opacity: 0;
  }
}

.firework,
.firework::before,
.firework::after {
  --top: 60vh;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px; /* Fixed size */
  height: 10px; /* Fixed size */
  background: radial-gradient(circle, #ff0 0.5px, #ff0 0) 50% 0%,
    radial-gradient(circle, #ff0000f8 0.5px, #ff3c00 0) 0% 50%,
    radial-gradient(circle, rgb(98, 0, 255) 0.5px, rgb(98, 0, 255) 0) 50% 99%,
    radial-gradient(circle, rgb(255, 0, 170) 0.5px, rgb(255, 0, 170) 0) 99% 50%,
    radial-gradient(circle, rgb(0, 204, 255) 0.5px, rgb(0, 204, 255) 0) 80% 90%,
    radial-gradient(circle, rgb(255, 0, 0) 0.5px, rgb(255, 0, 0) 0) 95% 90%,
    radial-gradient(circle, rgba(255, 0, 212, 0.911) 0.5px, #ff0 0) 10% 60%,
    radial-gradient(circle, rgb(255, 123, 0) 0.5px, rgb(255, 123, 0) 0) 31% 80%,
    radial-gradient(circle, rgb(0, 255, 76) 0.5px, rgb(0, 255, 76) 0) 80% 10%,
    radial-gradient(circle, rgb(0, 26, 255) 0.5px, rgb(0, 26, 255) 0) 90% 23%,
    radial-gradient(circle, rgb(195, 0, 255) 0.5px, rgb(195, 0, 255) 0) 45% 20%,
    radial-gradient(circle, rgb(0, 255, 0) 0.5px, rgb(23, 196, 158) 0) 13% 24%;
  background-size: 5px 5px; /* Keep background size consistent */
  background-repeat: no-repeat;
  animation: firework 2s infinite;
  display: none; /* Initially hidden */
}

.firework::before {
  transform: translate(-50%, -50%) rotate(2deg) !important;
}

.firework::after {
  transform: translate(-50%, -50%) rotate(-40deg) !important;
}
</style>
