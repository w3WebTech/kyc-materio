<script lang="ts" setup>
import { ref } from 'vue'
import { VForm } from 'vuetify/lib/components/index.mjs'

const numberedSteps = [
  { title: 'Personal Details', subtitle: 'Setup Personal Details' },
  { title: 'Address Details', subtitle: 'Add Address Details' },
  { title: 'Bank Details', subtitle: 'Add Bank Details' },
  { title: 'Attachments & Declaration', subtitle: 'Provide more details' }, // Changed to avoid duplication
]
let rules = [
  (fileList: string | any[]) =>
    !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]

let avatar = ref(null)
let avatar1 = ref(null)
let avatar2 = ref(null)
let avatar3 = ref(null)
let avatar4 = ref(null)

let imageUrl = computed(() => {
  debugger
  if (avatar.value) {
    console.log('Selected file:', avatar.value[0])
    return URL.createObjectURL(avatar.value[0])
  } else {
    return null
  }
})
let imageUrl1 = computed(() => {
  if (avatar1.value) {
    console.log('Selected file:', avatar1.value[0])
    return URL.createObjectURL(avatar1.value[0])
  } else {
    return null
  }
})
let imageUrl2 = computed(() => {
  if (avatar2.value) {
    console.log('Selected file:', avatar2.value[0])
    return URL.createObjectURL(avatar2.value[0])
  } else {
    return null
  }
})
let imageUrl3 = computed(() => {
  if (avatar3.value) {
    console.log('Selected file:', avatar3.value[0])
    return URL.createObjectURL(avatar3.value[0])
  } else {
    return null
  }
})
let imageUrl4 = computed(() => {
  if (avatar4.value) {
    console.log('Selected file:', avatar4.value[0])
    return URL.createObjectURL(avatar4.value[0])
  } else {
    return null
  }
})

function handleAvatarUpdate(newAvatar) {
  console.log('Avatar updated:', newAvatar)
  avatar = newAvatar
  if (newAvatar) {
    imageUrl = URL.createObjectURL(newAvatar[0])
    console.log(imageUrl, 'imageUrl')
  } else {
    imageUrl = null
  }
}
function handleAvatarUpdate1(newAvatar) {
  console.log('Avatar updated:', newAvatar)
  avatar1 = newAvatar
  if (newAvatar) {
    imageUrl1 = URL.createObjectURL(newAvatar[0])
    console.log(imageUrl1, 'imageUrl')
  } else {
    imageUrl1 = null
  }
}
function handleAvatarUpdate2(newAvatar) {
  console.log('Avatar updated:', newAvatar)
  avatar2 = newAvatar
  if (newAvatar) {
    imageUrl2 = URL.createObjectURL(newAvatar[0])
    console.log(imageUrl2, 'imageUrl')
  } else {
    imageUrl2 = null
  }
}
function handleAvatarUpdate3(newAvatar) {
  console.log('Avatar updated:', newAvatar)
  avatar3 = newAvatar
  if (newAvatar) {
    imageUrl3 = URL.createObjectURL(newAvatar[0])
    console.log(imageUrl3, 'imageUrl')
  } else {
    imageUrl3 = null
  }
}
function handleAvatarUpdate4(newAvatar) {
  console.log('Avatar updated:', newAvatar)
  avatar4 = newAvatar
  if (newAvatar) {
    imageUrl4 = URL.createObjectURL(newAvatar[0])
    console.log(imageUrl4, 'imageUrl')
  } else {
    imageUrl4 = null
  }
}
const ApAddress = ref(['John'])
const currentStep = ref(0)
const currentTab = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const selectedGender = ref('')
const selectedmStatus = ref('')
const formData = ref({
  name: '',
  fname: '',
  email: '',
  phone: '',
  gender: '',
  maritalStatus: '',
  pan: '',
  dob: '',
  branchCode: '',
  education: '',
  adhar: '',
  choosedExchange: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
const gender = (val: string) => {
  selectedGender.value = val
}
const mStatus = (val: string) => {
  selectedmStatus.value = val
}
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
const selected = ref([''])
const declaration = ref(false)
function changedeclaration() {
  declaration.value = !declaration.value
}
function removeAvatar() {
  debugger
  console.log(imageUrl, 'check')
  avatar = null
  imageUrl = null
  console.log(imageUrl, avatar, 'check1')
}
watch(avatar, (newValue, oldValue) => {
  console.log('avatar changed:', newValue, oldValue)
  if (newValue != null) {
    imageUrl = URL.createObjectURL(newValue[0])
  } else {
    imageUrl = null
  }
})
watch(imageUrl, (newValue, oldValue) => {
  console.log('imageUrl changed:', newValue, oldValue)
  // You can add your logic here to handle the change
})
function removeAvatar1(this: any) {
  avatar1.value = null
  imageUrl1 = null
}
function removeAvatar2() {
  avatar2.value = null
  imageUrl2 = null
}
function removeAvatar3() {
  avatar3.value = null
  imageUrl3 = null
}
function removeAvatar4() {
  avatar4.value = null
  imageUrl4 = null
}
const nameErrors = ref([])
const fnameErrors = ref([])
const emailErrors = ref([])
const phoneErrors = ref([])
const adharErrors = ref([])
const panErrors = ref([])
const dobErrors = ref([])
const educationErrors = ref([])
const branchErrors = ref([])
const genderErrors = ref(false)
const mstatusErrors = ref(false)
const selectedErrors = ref(false)
// function validateForm() {
//   debugger
//   console.log(formData.value.fname, 'formData.value.fname')
//   console.log(formData.value.name, 'formData.value.name')
//   console.log(formData.value.email, 'formData.value.email')
//   console.log(formData.value.pan, 'formData.value.pan')
//   console.log(formData.value.dob, 'formData.value.dob')
//   console.log(formData.value.adhar, 'formData.value.adhar')
//   console.log(formData.value.branchCode, 'formData.value.branchCode')
//   console.log(formData.value.education, 'formData.value.education')
//   console.log(selectedGender.value, 'selectedGender.value')
//   if (
//     formData.value.fname != null &&
//     formData.value.fname != '' &&
//     formData.value.name != null &&
//     formData.value.name != '' &&
//     formData.value.email != null &&
//     formData.value.email != '' &&
//     formData.value.pan != null &&
//     formData.value.pan != '' &&
//     formData.value.dob != null &&
//     formData.value.dob != '' &&
//     formData.value.adhar != null &&
//     formData.value.adhar != '' &&
//     formData.value.branchCode != null &&
//     formData.value.branchCode != '' &&
//     formData.value.education != null &&
//     formData.value.education != '' &&
//     selectedGender.value != '' &&
//     selectedGender.value != null &&
//     selectedmStatus.value != null &&
//     selectedmStatus.value != '' &&
//     selected.value != null &&
//     selected.value != ''
//   ) {
//     currentStep.value++
//   } else {
//     nameErrors.value = ['This field is required']
//     fnameErrors.value = ['This field is required']
//     emailErrors.value = ['This field is required']
//     phoneErrors.value = ['This field is required']
//     panErrors.value = ['This field is required']
//     dobErrors.value = ['This field is required']
//     adharErrors.value = ['This field is required']
//     educationErrors.value = ['This field is required']
//     branchErrors.value = ['This field is required']
//     genderErrors.value = true
//     mstatusErrors.value = true
//     selectedErrors.value = true
//   }
// }
watch(
  () => formData.value.fname,
  newValue => {
    if (!newValue) {
      fnameErrors.value = ['This field is required']
    } else {
      fnameErrors.value = []
    }
  },
)
watch(
  () => formData.value.name,
  newValue => {
    if (!newValue) {
      nameErrors.value = ['This field is required']
    } else {
      nameErrors.value = []
    }
  },
)
watch(
  () => formData.value.email,
  newValue => {
    if (!newValue) {
      eamilErrors.value = ['This field is required']
    } else {
      emailErrors.value = []
    }
  },
)
watch(
  () => formData.value.phone,
  newValue => {
    if (!newValue) {
      phoneErrors.value = ['This field is required']
    } else {
      phoneErrors.value = []
    }
  },
)
watch(
  () => formData.value.pan,
  newValue => {
    if (!newValue) {
      panErrors.value = ['This field is required']
    } else {
      panErrors.value = []
    }
  },
)
watch(
  () => formData.value.dob,
  newValue => {
    if (!newValue) {
      dobErrors.value = ['This field is required']
    } else {
      dobErrors.value = []
    }
  },
)
watch(
  () => formData.value.adhar,
  newValue => {
    if (!newValue) {
      adharErrors.value = ['This field is required']
    } else {
      adharErrors.value = []
    }
  },
)
watch(
  () => formData.value.branchCode,
  newValue => {
    if (!newValue) {
      branchErrors.value = ['This field is required']
    } else {
      branchErrors.value = []
    }
  },
)
watch(
  () => selectedGender,
  newValue => {
    if (!newValue) {
      genderErrors.value = true
    } else {
      genderErrors.value = false
    }
  },
)
watch(
  () => selectedmStatus,
  newValue => {
    if (!newValue) {
      mstatusErrors.value = true
    } else {
      mstatusErrors.value = false
    }
  },
)
watch(
  () => selected,
  newValue => {
    if (!newValue) {
      selectedErrors.value = true
    } else {
      selectedErrors.value = false
    }
  },
)
watch(
  () => formData.value.education,
  newValue => {
    if (!newValue) {
      educationErrors.value = ['This field is required']
    } else {
      educationErrors.value = []
    }
  },
)
function validateStep1() {
  // Validate fields for step 1
  if (
    formData.value.fname != null &&
    formData.value.fname != '' &&
    formData.value.name != null &&
    formData.value.name != '' &&
    formData.value.email != null &&
    formData.value.email != '' &&
    formData.value.pan != null &&
    formData.value.pan != '' &&
    formData.value.dob != null &&
    formData.value.dob != '' &&
    formData.value.adhar != null &&
    formData.value.adhar != '' &&
    formData.value.branchCode != null &&
    formData.value.branchCode != '' &&
    formData.value.education != null &&
    formData.value.education != '' &&
    selectedGender.value != '' &&
    selectedGender.value != null &&
    selectedmStatus.value != null &&
    selectedmStatus.value != '' &&
    selected.value != null &&
    selected.value != ''
  ) {
    return true
  } else {
    // Show error messages for invalid fields
    nameErrors.value = ['This field is required']
    fnameErrors.value = ['This field is required']
    emailErrors.value = ['This field is required']
    phoneErrors.value = ['This field is required']
    panErrors.value = ['This field is required']
    dobErrors.value = ['This field is required']
    adharErrors.value = ['This field is required']
    educationErrors.value = ['This field is required']
    branchErrors.value = ['This field is required']
    genderErrors.value = true
    mstatusErrors.value = true
    selectedErrors.value = true
    return false
  }
}

function validateStep2() {
  // Validate fields for step 2
  // ...
  return true
}

function validateStep3() {
  // Validate fields for step 3
  // ...
  return true
}
function validateForm() {
  if (currentStep.value === 0) {
    if (validateStep1()) {
      currentStep.value++
    }
  } else if (currentStep.value === 1) {
    if (validateStep2()) {
      currentStep.value++
    }
  } else if (currentStep.value === 2) {
    if (validateStep3()) {
      currentStep.value++
    }
  }
}
</script>

<style lang="scss">
[type='text'],
input:where(:not([type])),
[type='email'],
[type='url'],
[type='password'],
[type='number'],
[type='date'],
[type='datetime-local'],
[type='month'],
[type='search'],
[type='tel'],
[type='time'],
[type='week'],
[multiple],
textarea,
select {
  --tw-ring-color: none !important;
}
label {
  display: inline-block;
  cursor: pointer;
}
input[type='radio'] {
  display: none;
}
label span {
  padding-left: 20px;
}
label input[type='radio']:checked + span {
  color: #666;
}
</style>

<template>
  <VCard>
    <!-- <div class="flex justify-center my-5">
      <img
        src="@/public/goodwilllogo.jpeg"
        alt="Logo"
        class="h-20 w-20"
      />
    </div> -->

    <VCard>
      <VCardText>
        <div class="flex justify-between items-center">
          <div
            v-for="(step, index) in numberedSteps"
            :key="index"
            class="flex items-center space-x-2"
          >
            <input
              type="radio"
              name="step"
              id="step{{ index + 1 }}"
              v-model="currentStep"
              :value="index"
              :checked="currentStep === index"
            />

            <label
              :for="'step' + (index + 1)"
              class="w-9 h-8 rounded-full flex justify-center items-center"
              :class="
                currentStep === index || currentStep >= index ? 'bg-blue-900 text-white' : 'bg-gray-300 text-gray-700'
              "
            >
              {{ index + 1 }}
            </label>
            <div class="">
              <div class="text-gray-700 font-semibold text-[15px]">{{ step.title }}</div>
              <div class="text-gray-500 text-sm">{{ step.subtitle }}</div>
            </div>
            <div
              style="font-size: 25px; margin-left: 15px; margin-bottom: 20px"
              :class="currentStep >= index ? 'text-blue-900' : ' text-gray-300'"
              v-if="index < numberedSteps.length - 1"
            >
              _______
            </div>
          </div>
        </div>
      </VCardText>

      <VDivider />

      <VCardText>
        <VForm>
          <VWindow
            v-model="currentStep"
            class="disable-tab-transition"
          >
            <VWindowItem>
              <VRow>
                <VCol cols="12">
                  <h6 class="text-sm font-weight-medium">Personal Details</h6>
                  <p class="text-xs mb-0">Enter your Personal Details</p>
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.name"
                    placeholder="John"
                    label="Name *"
                    :error-messages="nameErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.fname"
                    placeholder="Johny"
                    label="Father's Name *"
                    :error-messages="fnameErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.email"
                    placeholder="john@gmail.com"
                    label="Email *"
                    :error-messages="emailErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.phone"
                    placeholder="9876543210"
                    label="Phone *"
                    :error-messages="phoneErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VRow
                    ><label
                      for="gender"
                      class="px-3 py-5"
                      :class="genderErrors == true ? 'text-red-500' : ''"
                      >Gender *</label
                    ></VRow
                  >
                  <VRow>
                    <div
                      :class="
                        selectedGender == 'option1'
                          ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                          : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3"
                      @click="gender('option1')"
                    >
                      <input
                        type="radio"
                        :name="`gender-${selectedGender}`"
                        value="option1"
                        class="bg-blue-500 text-white"
                      />
                      Male
                    </div>
                    <div
                      :class="
                        selectedGender == 'option2'
                          ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                          : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3"
                      @click="gender('option2')"
                    >
                      <input
                        type="radio"
                        :name="`gender-${selectedGender}`"
                        value="option2"
                        class="bg-blue-500 text-white"
                      />
                      Female
                    </div>
                    <div
                      :class="
                        selectedGender == 'option3'
                          ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                          : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3"
                      @click="gender('option3')"
                    >
                      <input
                        type="radio"
                        :name="`gender-${selectedGender}`"
                        value="option3"
                        class="bg-blue-500 text-white"
                      />
                      Trans
                    </div>
                  </VRow>
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VRow
                    ><label
                      for="gender"
                      class="px-3 py-5"
                      :class="mstatusErrors == true ? 'text-red-500' : ''"
                      >Marital Status *</label
                    ></VRow
                  >
                  <VRow>
                    <div
                      :class="
                        selectedmStatus == 'Single'
                          ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                          : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3"
                      @click="mStatus('Single')"
                    >
                      <input
                        type="radio"
                        value="option1"
                        class="bg-blue-500 text-white"
                      />
                      Single
                    </div>
                    <div
                      :class="
                        selectedmStatus == 'Married'
                          ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                          : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3"
                      @click="mStatus('Married')"
                    >
                      <input
                        type="radio"
                        value="option2"
                        class="bg-blue-500 text-white"
                      />
                      Married
                    </div>
                  </VRow>
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                  class="my-3"
                >
                  <VTextField
                    v-model="formData.pan"
                    placeholder="ABdc123"
                    label="PAN Number *"
                    :error-messages="panErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                  class="my-3"
                >
                  <VTextField
                    v-model="formData.dob"
                    placeholder=""
                    label="Date of Birth *"
                    type="datepicker"
                    :error-messages="dobErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.adhar"
                    placeholder="2345"
                    label="Aadhaar Number (Last 4 Digits Only)  *"
                    :error-messages="adharErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VRow>
                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VSelect
                        v-model="formData.branchCode"
                        label="Branch Code  *"
                        placeholder="Select Branchcode "
                        :items="['GZ10219', 'GZ10215', 'GZ10212', 'GZ10214', 'GZ10216']"
                        :error-messages="branchErrors"
                        :rules="[requiredValidator]"
                      />
                    </VCol>
                    <VCol
                      cols="12"
                      md="6"
                    >
                      <VSelect
                        v-model="formData.education"
                        label="Education  * "
                        placeholder="Select Education "
                        :items="['BE', 'BSC', 'MSC', 'M.PHIL', 'PHD']"
                        :error-messages="educationErrors"
                        :rules="[requiredValidator]"
                      />
                    </VCol>
                  </VRow>
                </VCol>
                <VCol>
                  <div :class="selectedErrors == true ? 'text-red-500' : ''">Choose the Exchange *</div>
                  <div
                    class="demo-space-x"
                    style="padding-top: 4px; padding-left: 2px"
                  >
                    <VCheckbox
                      v-model="selected"
                      value="NSE [CASH, FNO, COMMODITY, CURRENCY]"
                    >
                      <template v-slot:label>
                        <span style="font-size: 14px; color: gray">NSE [CASH, FNO, COMMODITY, CURRENCY]</span>
                      </template>
                    </VCheckbox>
                  </div>
                  <div
                    class="demo-space-x"
                    style="padding-top: 4px; padding-left: 2px"
                  >
                    <VCheckbox
                      v-model="selected"
                      value="BSE [CASH, FNO, COMMODITY, CURRENCY]"
                    >
                      <template v-slot:label>
                        <span style="font-size: 14px; color: gray">BSE [CASH, FNO, COMMODITY, CURRENCY]</span>
                      </template>
                    </VCheckbox>
                  </div>
                  <div
                    class="demo-space-x"
                    style="padding-top: 4px; padding-left: 2px"
                  >
                    <VCheckbox
                      v-model="selected"
                      value="MCX [FNO]"
                    >
                      <template v-slot:label>
                        <span style="font-size: 14px; color: gray">MCX [FNO]</span>
                      </template>
                    </VCheckbox>
                  </div>
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <VRow>
                <VCol cols="12">
                  <h6 class="text-sm font-weight-medium">Address Details</h6>
                  <p class="text-xs mb-0">Setup Information</p>
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextarea
                    label="Address *"
                    placeholder="Address *"
                    v-model="formData.address"
                    :error-messages="addressErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    label="Pin Code *"
                    placeholder="613601"
                    v-model="formData.pincode"
                    :error-messages="pincodeErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    label="City / Town  *"
                    placeholder="Chennai"
                    v-model="formData.city"
                    :error-messages="cityErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    label="District *"
                    placeholder="Thanjavur"
                    v-model="formData.district"
                    :error-messages="addressErrors"
                    :rules="[requiredValidator]"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="formData.state"
                    label="State / U.T Code *"
                    placeholder="Select State *"
                    :error-messages="stateErrors"
                    :rules="[requiredValidator]"
                    :items="[
                      'Andhra Pradesh',
                      'Arunachal Pradesh',
                      'Assam',
                      'Bihar',
                      'Chhattisgarh',
                      'Goa',
                      'Gujarat',
                      'Haryana',
                      'Himachal Pradesh',
                      'Jharkhand',
                      'Karnataka',
                      'Kerala',
                      'Madhya Pradesh',
                      'Maharashtra',
                      'Manipur',
                      'Meghalaya',
                      'Mizoram',
                      'Nagaland',
                      'Odisha',
                      'Punjab',
                      'Rajasthan',
                      'Sikkim',
                      'Tamil Nadu',
                      'Telangana',
                      'Tripura',
                      'Uttar Pradesh',
                      'Uttarakhand',
                      'West Bengal',
                      'Andaman and Nicobar Islands',
                      'Chandigarh',
                      'Dadra and Nagar Haveli and Daman and Diu',
                      'Lakshadweep',
                      'Delhi',
                      'Puducherry',
                    ]"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="formData.country"
                    label="Country / ISO Code *"
                    placeholder="Select Country *"
                    :error-messages="countryErrors"
                    :rules="[requiredValidator]"
                    :items="['US', 'UK', 'INDIA', 'RUSSIA', 'UKRAIN']"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="12"
                >
                  <div
                    class="demo-space-x"
                    style="padding-top: 4px; padding-left: 2px"
                  >
                    <VCheckbox
                      v-model="ApAddress"
                      value="ApAddress"
                    >
                      <template v-slot:label>
                        <span style="font-size: 15px; color: gray">AP Address Same As Permanent Address</span>
                      </template>
                    </VCheckbox>
                  </div>
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextarea
                    label="Address"
                    placeholder="Address "
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    label="Pin Code "
                    placeholder="613601"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    label="City / Town  "
                    placeholder="Chennai"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    label="District "
                    placeholder="Thanjavur"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    label="State / U.T Code "
                    placeholder="Select State"
                    :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="formData.language"
                    label="Country / ISO Code "
                    placeholder="Select Country"
                    :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <VRow>
                <VCol cols="12">
                  <h6 class="text-sm font-weight-medium">Bank Details</h6>
                  <p class="text-xs mb-0">Add Bank Details</p>
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="formData.language"
                    label="Account Type * "
                    placeholder="Select AccountType "
                    :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.facebook"
                    placeholder="IFSC Code *"
                    label="IFSC Code *"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.googlePlus"
                    placeholder="Account Number *"
                    label="Account Number * "
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.LinkedIn"
                    placeholder="Bank Name *"
                    label="Bank Name *"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="formData.LinkedIn"
                    placeholder="MICR Code *"
                    label="MICR Code *"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextarea
                    label="Bank Address *"
                    placeholder="Address *"
                  />
                </VCol>
              </VRow>
            </VWindowItem>
            <VWindowItem>
              <VRow>
                <VCol cols="12">
                  <h6 class="text-sm font-weight-medium">Attachments & Declaration</h6>
                  <p class="text-xs mb-0">Provide more details</p>
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VCard>
                    <div
                      v-if="avatar1 == null"
                      class="p-5 py-10"
                    >
                      <VFileInput
                        v-model="avatar1"
                        :rules="rules"
                        label="PAN"
                        placeholder="Pick a Proof"
                        prepend-icon="ri-attachment-line"
                        @update:model-value="handleAvatarUpdate1"
                      />
                    </div>
                    <div
                      v-else
                      class="relative"
                    >
                      <div class="flex justify-center">
                        <object
                          :data="imageUrl1"
                          type="application/pdf"
                          width="100%"
                          height="400"
                        />
                      </div>
                      <div
                        class="absolute top-5 right-5 bg-red-500 border p-2 rounded-md text-white"
                        @click="removeAvatar1"
                      >
                        Remove
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
                      v-if="avatar2 == null"
                      class="p-5 py-10"
                    >
                      <VFileInput
                        v-model="avatar2"
                        :rules="rules"
                        label="EDUCATION PROOF"
                        placeholder="Pick a Proof"
                        prepend-icon="ri-attachment-line"
                        @update:model-value="handleAvatarUpdate2"
                      />
                    </div>
                    <div
                      v-else
                      class="relative"
                    >
                      <div class="flex justify-center">
                        <object
                          :data="imageUrl2"
                          type="application/pdf"
                          width="100%"
                          height="400"
                        />
                      </div>
                      <div
                        class="absolute top-5 right-5 bg-red-500 border p-2 rounded-md text-white"
                        @click="removeAvatar2"
                      >
                        Remove
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
                      v-if="avatar == null"
                      class="p-5 py-10"
                    >
                      <VFileInput
                        v-model="avatar"
                        :rules="rules"
                        label="PHOTO"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="ri-camera-2-line"
                        @update:model-value="handleAvatarUpdate"
                      />
                    </div>
                    <div
                      v-else
                      class="relative"
                    >
                      <div class="flex justify-center">
                        <img
                          :src="imageUrl"
                          alt="Avatar"
                        />
                      </div>
                      <div
                        class="absolute top-5 right-5 bg-red-500 border p-2 rounded-md text-white"
                        @click="removeAvatar"
                      >
                        Remove
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
                      v-if="avatar3 == null"
                      class="p-5 py-10"
                    >
                      <VFileInput
                        v-model="avatar3"
                        :rules="rules"
                        label="ADDRESS PROOF"
                        placeholder="Pick an Proof"
                        prepend-icon="ri-attachment-line"
                        @update:model-value="handleAvatarUpdate3"
                      />
                    </div>
                    <div
                      v-else
                      class="relative"
                    >
                      <div class="flex justify-center">
                        <object
                          :data="imageUrl3"
                          type="application/pdf"
                          width="100%"
                          height="400"
                        />
                      </div>
                      <div
                        class="absolute top-5 right-5 bg-red-500 border p-2 rounded-md text-white"
                        @click="removeAvatar3"
                      >
                        Remove
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
                      v-if="avatar4 == null"
                      class="p-5 py-10"
                    >
                      <VFileInput
                        v-model="avatar4"
                        :rules="rules"
                        label="AP ADDRESS PROOF"
                        placeholder="Pick an Proof"
                        prepend-icon="ri-attachment-line"
                        @update:model-value="handleAvatarUpdate4"
                      />
                    </div>
                    <div
                      v-else
                      class="relative"
                    >
                      <div class="flex justify-center">
                        <object
                          :data="imageUrl4"
                          type="application/pdf"
                          width="100%"
                          height="400"
                        />
                      </div>
                      <div
                        class="absolute top-5 right-5 bg-red-500 border p-2 rounded-md text-white"
                        @click="removeAvatar4"
                      >
                        Remove
                      </div>
                    </div>
                  </VCard>
                </VCol>
              </VRow>
              <VCol><div class="text-blue-600 py-2">DECLARATION</div></VCol>
              <VCol>
                <div
                  class="demo-space-x"
                  style="padding-left: 2px"
                >
                  <VCheckbox
                    v-model="declaration"
                    value="false"
                    @click="changedeclaration"
                  >
                    <template v-slot:label>
                      <span style="font-size: 14px; color: gray"
                        >I hereby declare that the details furnished above are true and correct to the best of my
                        knowledge and belief and i undertake to inform you of any changes therein, immediately. In case
                        any of the above information is found to be false or untrue or misleading or misrepresenting. I
                        am aware that i may be held liable for it. I hereby consent to receiving information from
                        Central KYC Registry through SMS/Email on the above registered number / Email address.</span
                      >
                    </template>
                  </VCheckbox>
                </div>
              </VCol>
              <VRow>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    placeholder="GPMZ0001"
                    label="Your Code *"
                    :error-messages="nameErrors"
                    :rules="[requiredValidator]"
                    readonly
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    placeholder="TESTQ"
                    label="Client Name *"
                    :error-messages="nameErrors"
                    :rules="[requiredValidator]"
                    readonly
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    placeholder="CHENNAI"
                    label="Place *"
                    :error-messages="nameErrors"
                    :rules="[requiredValidator]"
                    readonly
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    placeholder="04-10-2024"
                    label="Date *"
                    :error-messages="nameErrors"
                    :rules="[requiredValidator]"
                    readonly
                  />
                </VCol>
              </VRow>
            </VWindowItem>
          </VWindow>

          <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
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

            <VBtn
              v-if="currentStep === numberedSteps.length - 1"
              color="success"
              append-icon="ri-check-line"
              @click="onSubmit"
            >
              Submit
            </VBtn>

            <VBtn
              v-else
              @click="validateForm"
            >
              Next
              <VIcon
                icon="ri-arrow-right-line"
                end
                class="flip-in-rtl"
              />
            </VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </VCard>
</template>
