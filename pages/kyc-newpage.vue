<template>
  <div v-if="shimmer">
    <VRow class="w-[80%] mx-auto my-10">
      <VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div
        ></VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div
        ></VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div
        ></VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div></VCol
      ></VCol>
      <VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div
        ></VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div
        ></VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div
        ></VCol>
        <VCol cols="12">
          <div class="shimmer-container">
            <div class="shimmer-item"></div></div></VCol
      ></VCol>

      <VCol cols="12">
        <div class="flex justify-between px-3 py-10">
          <div class="w-24">
            <div class="shimmer-container">
              <div class="shimmer-item"></div>
            </div>
          </div>
          <div class="w-24">
            <div class="shimmer-container">
              <div class="shimmer-item"></div>
            </div>
          </div></div
      ></VCol>
    </VRow>
  </div>
  <div
    :class="isDarkTheme == true ? 'bg-[#312D4B]' : 'bg-white'"
    v-else
  >
    <div class="mx-auto">
      <div class="slide-container relative">
        <div
          class="slide"
          :class="{ active: activeSlide === 1, hidden: activeSlide !== 1, 'no-slide-out': activeSlide === 1 }"
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
                <VCard>
                  <div
                    v-if="!avatar2"
                    class="p-5 py-2"
                  >
                    <VFileInput
                      v-model="avatar2"
                      :rules="rules"
                      label="ADHAR PROOF"
                      placeholder="Pick a Proof"
                      prepend-icon="ri-attachment-line"
                      @update:model-value="handleAvatarUpdate2"
                    />
                  </div>
                  <div
                    v-if="avatar2 && eppdfname"
                    class="relative"
                  >
                    <div class="">
                      <!-- <object
                        :data="imageUrl1"
                        type="application/pdf"
                        width="100%"
                        height="400"
                      /> -->
                      <div class="flex py-4 justify-between px-2 pt-5">
                        <div class="px-6 pt-1 text-blue-700">{{ eppdfname }}</div>
                        <div class="flex">
                          <div
                            class="bg-blue-500 rounded-md items-center justify-center px-2 py-1 mx-2"
                            @click="isEpDialogVisible = true"
                          >
                            <VIcon
                              icon="ri-eye-fill"
                              color="white"
                              size="18"
                            />
                          </div>
                          <div
                            class="bg-red-500 rounded-md items-center justify-center px-2 py-1"
                            @click="handleAvatarUpdate2(null)"
                          >
                            <VIcon
                              icon="ri-delete-bin-4-fill"
                              color="white"
                              size="18"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="avatar2 && !eppdfname">
                    <div class="py-4 px-2 pt-5 flex justify-center">
                      <VProgressCircular
                        :size="20"
                        width="3"
                        color="primary"
                        indeterminate
                      />
                      <div class="px-4 animate-charcter">LOADING ..</div>
                    </div>
                  </div>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VCard>
                  <div
                    v-if="!avatar1"
                    class="p-5 py-2"
                  >
                    <VFileInput
                      v-model="avatar1"
                      :rules="rules"
                      label="PAN PROOF"
                      placeholder="Pick a Proof"
                      prepend-icon="ri-attachment-line"
                      @update:model-value="handleAvatarUpdate1"
                    />
                  </div>
                  <div
                    v-if="avatar1 && panpdfname"
                    class="relative"
                  >
                    <div class="">
                      <!-- <object
                        :data="imageUrl1"
                        type="application/pdf"
                        width="100%"
                        height="400"
                      /> -->
                      <div class="flex py-4 justify-between px-2 pt-5">
                        <div class="px-6 pt-1 text-blue-700">{{ panpdfname }}</div>
                        <div class="flex">
                          <div
                            class="bg-blue-500 rounded-md items-center justify-center px-2 py-1 mx-2"
                            @click="isPanDialogVisible = true"
                          >
                            <VIcon
                              icon="ri-eye-fill"
                              color="white"
                              size="18"
                            />
                          </div>
                          <div
                            class="bg-red-500 rounded-md items-center justify-center px-2 py-1"
                            @click="handleAvatarUpdate1(null)"
                          >
                            <VIcon
                              icon="ri-delete-bin-4-fill"
                              color="white"
                              size="18"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="avatar1 && !panpdfname">
                    <div class="py-4 px-2 pt-5 flex justify-center">
                      <VProgressCircular
                        :size="20"
                        width="3"
                        color="primary"
                        indeterminate
                      />
                      <div class="px-4 animate-charcter">LOADING ..</div>
                    </div>
                  </div>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VCard>
                  <div
                    v-if="!avatar3"
                    class="p-5 py-2"
                  >
                    <VFileInput
                      v-model="avatar3"
                      :rules="rules"
                      label="BANK PROOF"
                      placeholder="Pick a Proof"
                      prepend-icon="ri-attachment-line"
                      @update:model-value="handleAvatarUpdate3"
                    />
                  </div>
                  <div
                    v-if="avatar3 && bankname"
                    class="relative"
                  >
                    <div class="">
                      <!-- <object
                        :data="imageUrl1"
                        type="application/pdf"
                        width="100%"
                        height="400"
                      /> -->
                      <div class="flex py-4 justify-between px-2 pt-5">
                        <div class="px-6 pt-1 text-blue-700">{{ bankname }}</div>
                        <div class="flex">
                          <div
                            class="bg-blue-500 rounded-md items-center justify-center px-2 py-1 mx-2"
                            @click="isDialogVisible = true"
                          >
                            <VIcon
                              icon="ri-eye-fill"
                              color="white"
                              size="18"
                            />
                          </div>
                          <div
                            class="bg-red-500 rounded-md items-center justify-center px-2 py-1"
                            @click="handleAvatarUpdate3(null)"
                          >
                            <VIcon
                              icon="ri-delete-bin-4-fill"
                              color="white"
                              size="18"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-if="avatar3 && !bankname">
                    <div class="py-4 px-2 pt-5 flex justify-center">
                      <VProgressCircular
                        :size="20"
                        width="3"
                        color="primary"
                        indeterminate
                      />
                      <div class="px-4 animate-charcter">LOADING ..</div>
                    </div>
                  </div>
                </VCard>
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
            <VRow class="md:px-40">
              <VCol cols="12">EIGHTTH STEP</VCol>
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
  <VDialog
    v-model="isEpDialogVisible"
    width="500"
  >
    <VCard>
      <VCardText
        ><div class="">
          <div>
            <object
              :data="imageUrl1"
              type="application/pdf"
              width="100%"
              height="600"
            />
          </div></div
      ></VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <VCard>
      <VCardText
        ><div class="flex justify-center items-center mx-auto my-auto">
          <div>
            <object
              :data="imageUrl3"
              type="application/pdf"
              width="100%"
              height="400"
            />
          </div></div
      ></VCardText>
    </VCard>
  </VDialog>
  <VDialog
    v-model="isPanDialogVisible"
    width="500"
  >
    <VCard>
      <VCardText
        ><div class="">
          <div>
            <object
              :data="imageUrl2"
              type="application/pdf"
              width="100%"
              height="600"
            />
          </div></div
      ></VCardText>
    </VCard>
  </VDialog>
</template>

<script lang="ts">
import { useTheme } from 'vuetify'
import axios from 'axios'
import { defineComponent, ref, onMounted } from 'vue'
// import { FaceMesh } from '@mediapipe/face_mesh'
import { Camera } from '@mediapipe/camera_utils'
import confetti from 'canvas-confetti'

export default defineComponent({
  name: 'Slideshow',
  data() {
    return {
      isEpDialogVisible: false,
      isDialogVisible: false,
      isPanDialogVisible: false,
      shimmer: false,
      activeSlide: 1,
      steps: [],
      pan: [],
      panResponse: ref([]),
      loader: false,
      tick: false,
      loader1: false,
      tick1: false,
      bank: [],
      adhar: [],
      loader2: false,
      tick2: false,
      avatar2: null,
      imageUrl2: null,
      avatar1: null,
      imageUrl1: null,
      avatar3: null,
      imageUrl3: null,
      eppdfname: null,
      panpdfname: null,
      bankname: null,
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
  mounted() {
    // setTimeout(() => {
    //   this.shimmer = false // Turn off shimmer after 2 seconds
    // }, 2000)

    const val = this.$route.query.steps ? this.$route.query.steps : '1,2,3,4,5,6,7,8'
    this.steps = val.split(',')
    console.log(val, this.steps, 'this.steps')

    // if (this.steps.length > 0 && this.steps[this.steps.length - 1] === '8') {
    //   this.activeSlide = 1
    // }
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
      if (direction == 1) {
        // confetti({
        //   angle: this.randomInRange(360, 360),
        //   spread: this.randomInRange(360, 360),
        //   particleCount: this.randomInRange(360, 360),
        //   origin: { y: 0.6 },
        // })
        confetti({ particleCount: 300, spread: 180, origin: { y: 0.7 } })
      }

      this.activeSlide = stepsAsNumbers[newIndex]
    },
    randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    },
    panUpload(file: any) {
      console.log(file, 'file')
      if (file && file.length > 0 && file[0] instanceof File) {
        const uploadedFile = file[0]
        // Create a FileReader object
        const reader = new FileReader()

        // Set up the onload event to process the file once it's read
        reader.onload = event => {
          // Get the Base64 string from the result
          const fileData = event.target.result
          const base64_data = fileData.split(',')[1]
          // Extract the file name
          const fileName = uploadedFile.name

          // Log the file name and Base64 file data
          console.log(fileName, base64_data)

          // Call fetchData with the file name and data
          this.fetchPanData(fileName, base64_data)
        }

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(uploadedFile)
      } else {
        console.error('Invalid file provided')
      }
    },
    adharUpload(file: any) {
      console.log(file, 'file')
      if (file && file.length > 0 && file[0] instanceof File) {
        const uploadedFile = file[0]
        // Create a FileReader object
        const reader = new FileReader()

        // Set up the onload event to process the file once it's read
        reader.onload = event => {
          // Get the Base64 string from the result
          const fileData = event.target.result
          const base64_data = fileData.split(',')[1]
          // Extract the file name
          const fileName = uploadedFile.name

          // Log the file name and Base64 file data
          console.log(fileName, base64_data)

          // Call fetchData with the file name and data
          this.fetchAdharData(fileName, base64_data)
        }

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(uploadedFile)
      } else {
        console.error('Invalid file provided')
      }
    },
    bankUpload(file: any) {
      console.log(file, 'file')
      if (file && file.length > 0 && file[0] instanceof File) {
        const uploadedFile = file[0]
        // Create a FileReader object
        const reader = new FileReader()

        // Set up the onload event to process the file once it's read
        reader.onload = event => {
          // Get the Base64 string from the result
          const fileData = event.target.result
          const base64_data = fileData.split(',')[1]
          // Extract the file name
          const fileName = uploadedFile.name

          // Log the file name and Base64 file data
          console.log(fileName, base64_data)

          // Call fetchData with the file name and data
          this.fetchBankData(fileName, base64_data)
        }

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(uploadedFile)
      } else {
        console.error('Invalid file provided')
      }
    },
    fetchPanData(file, fileData, newAvatar) {
      this.loader = true
      const data = {
        fileName: file,
        pan: true,
        file_data: fileData,
      }
      const params = new URLSearchParams()
      Object.keys(data).forEach(key => {
        params.append(key, data[key])
      })

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }

      axios
        .post('https://gkyc.gwcindia.in/web-ocr/api-ocr-documents.php', params, config)
        .then(response => {
          this.loader = false
          this.tick = true
          // if (response && response.status) {
          //   this.imageUrl2 = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
          //   this.panpdfname = newAvatar ? newAvatar[0].name : null
          //   console.log('Updated panResponse aadhar:', response)
          // }
          if (response && response.data && response.data.status === 'ok') {
            const uid = response.data.panOcrData.error
            if (!uid) {
              this.imageUrl2 = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
              this.panpdfname = newAvatar ? newAvatar[0].name : null
              console.log('Updated panResponse aadhar:', response)
            } else {
              this.avatar2 = null

              this.handleAvatarUpdate1(null)
              alert('Invalid Pan Proof !,Please Update Valid One !!!')
            }
          } else {
            alert('Error in response data')
          }
        })
        .catch(error => {
          console.error('Error:', error)
        })
    },
    fetchAdharData(fileName, fileData, newAvatar) {
      this.loader1 = true
      const data = {
        aadhaar: true,
        aadhaarF_name: fileName,
        aadhaarF_data: fileData,
        aadhaarB_Name: '',
        aadhaarB_Data: '',
      }
      const params = new URLSearchParams()
      Object.keys(data).forEach(key => {
        params.append(key, data[key])
      })

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }

      axios
        .post('https://gkyc.gwcindia.in/web-ocr/api-ocr-documents.php', params, config)
        .then(response => {
          // this.loader1 = false
          // this.tick1 = true
          this.loader1 = false // Hide loader after response
          if (response && response.data && response.data.status === 'ok') {
            const uid = response.data.aadhaarData.response.result.uid
            if (uid) {
              this.imageUrl1 = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
              this.eppdfname = newAvatar ? newAvatar[0].name : null
              console.log('Updated panResponse aadhar:', response)
            } else {
              this.avatar1 = null

              this.handleAvatarUpdate2(null)
              alert('Invalid Adhar Proof !,Please Update Valid One !!!')
            }
          } else {
            alert('Error in response data')
          }
        })
        .catch(error => {
          console.error('Error:', error)
        })
    },
    fetchBankData(fileName, fileData, newAvatar) {
      // this.loader3 = true
      const data = {
        bank: true,
        fileName: fileName,
        file_data: fileData,
      }
      const params = new URLSearchParams()
      Object.keys(data).forEach(key => {
        params.append(key, data[key])
      })

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }

      axios
        .post('https://gkyc.gwcindia.in/web-ocr/api-ocr-documents.php', params, config)
        .then(response => {
          // this.loader2 = false
          // this.tick2 = true
          // if (response && response.status) {
          //   this.imageUrl3 = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
          //   this.bankname = newAvatar ? newAvatar[0].name : null
          //   console.log('Updated panResponse aadhar:', response)
          // }
          if (response && response.data && response.data.status === 'ok') {
            const uid = this.getAccountNo(response.data.data.result)

            console.log(uid, 'uid')
            if (uid != '') {
              this.imageUrl3 = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
              this.bankname = newAvatar ? newAvatar[0].name : null
              console.log('Updated panResponse aadhar:', response)
            } else {
              this.avatar3 = null

              this.handleAvatarUpdate3(null)
              alert('Invalid Bank Proof !,Please Update Valid One !!!')
            }
          } else {
            alert('Error in response data')
          }
        })
        .catch(error => {
          console.error('Error:', error)
        })
    },
    getAccountNo(obj) {
      for (let key in obj) {
        if (key === 'Account No') {
          return obj[key] // Return the value associated with "Account No"
        }
      }
      return null // Return null if not found
    },
    handleFileChange() {
      debugger
      if (!this.pan || this.pan.length === 0) {
        // Reset loader and tick states
        this.loader = false
        this.tick = false

        // Perform any additional actions here
        console.log('File input cleared')
      }
    },
    handleAvatarUpdate2(newAvatar) {
      console.log(newAvatar, 'newAvatar')
      this.avatar2 = newAvatar
      if (newAvatar && newAvatar.length > 0 && newAvatar[0] instanceof File) {
        const uploadedFile = newAvatar[0]
        // Create a FileReader object
        const reader = new FileReader()

        // Set up the onload event to process the file once it's read
        reader.onload = event => {
          // Get the Base64 string from the result
          const fileData = event.target.result
          const base64_data = fileData.split(',')[1]
          // Extract the file name
          const fileName = uploadedFile.name

          // Log the file name and Base64 file data
          console.log(fileName, base64_data)

          // Call fetchData with the file name and data
          if (fileName != null && fileName != '') {
            this.fetchAdharData(fileName, base64_data, newAvatar)
          }
        }

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(uploadedFile)
      }
    },
    handleAvatarUpdate1(newAvatar) {
      console.log(newAvatar, 'newAvatar')
      this.avatar1 = newAvatar
      if (newAvatar && newAvatar.length > 0 && newAvatar[0] instanceof File) {
        const uploadedFile = newAvatar[0]
        // Create a FileReader object
        const reader = new FileReader()

        // Set up the onload event to process the file once it's read
        reader.onload = event => {
          // Get the Base64 string from the result
          const fileData = event.target.result
          const base64_data = fileData.split(',')[1]
          // Extract the file name
          const fileName = uploadedFile.name

          // Log the file name and Base64 file data
          console.log(fileName, base64_data)

          // Call fetchData with the file name and data
          if (fileName != null && fileName != '') {
            this.fetchPanData(fileName, base64_data, newAvatar)
          }
        }

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(uploadedFile)
      }
    },
    handleAvatarUpdate3(newAvatar) {
      console.log(newAvatar, 'newAvatar')
      this.avatar3 = newAvatar
      if (newAvatar && newAvatar.length > 0 && newAvatar[0] instanceof File) {
        const uploadedFile = newAvatar[0]
        // Create a FileReader object
        const reader = new FileReader()

        // Set up the onload event to process the file once it's read
        reader.onload = event => {
          // Get the Base64 string from the result
          const fileData = event.target.result
          const base64_data = fileData.split(',')[1]
          // Extract the file name
          const fileName = uploadedFile.name

          // Log the file name and Base64 file data
          console.log(fileName, base64_data)

          // Call fetchData with the file name and data
          if (fileName != null && fileName != '') {
            this.fetchBankData(fileName, base64_data, newAvatar)
          }
        }

        // Read the file as a data URL (Base64)
        reader.readAsDataURL(uploadedFile)
      }
    },
  },
  watch: {
    pan(newValue) {
      if (!newValue || newValue.length === 0) {
        // Reset loader and tick states
        this.loader = false
        this.tick = false

        // Perform any additional actions here
        console.log('File input cleared')
      }
    },
  },
})
</script>

<style lang="scss" >
@use '@core/scss/pages/page-auth.scss';
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);

  background-clip: border-box;

  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 0.5s linear infinite;
  display: inline-block;
  animation: blinker 0.5s linear infinite;
}
@keyframes blinker {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.shimmer-container {
  width: 100%;
  height: 40px; /* Adjust height as needed */
  background-color: #f5f5f5;
  overflow: hidden;
  border-radius: 5px;
}

.shimmer-item {
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: #e0e0e0;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes flip {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-180deg);
  }
}

.loader {
  width: 600px;
  margin: auto;

  &__image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__coin {
    animation: flip 0.5s ease-in-out infinite alternate-reverse both;
  }
}
.slide-container {
  position: relative;
  height: 450px; /* Adjust as needed */
  overflow: hidden; /* Hide overflowing content */
}
.slide.no-slide-out {
  animation: none; /* Disable the animation */
}

.slide.active.no-slide-out {
  animation: none; /* Ensure no animation when activeSlide is 1 */
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
</style>
