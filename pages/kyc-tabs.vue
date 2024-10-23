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

let imageUrl2 = ref(null)
let imageUrl3 = ref(null)
let imageUrl4 = ref(null)
let avatar = ref(null)

let avatar2 = ref(null)
let avatar3 = ref(null)
let avatar4 = ref(null)
let avatar1 = ref(null)

let imageUrl1 = ref(null)
let imageUrl = ref(null)
let panpdfname = ref(null)
let eppdfname = ref(null)
watch(avatar1, newAvatar => {
  if (newAvatar) {
    debugger

    imageUrl1.value = URL.createObjectURL(newAvatar[0])
  } else {
    imageUrl1.value = null
  }
})

function handleAvatarUpdate1(newAvatar) {
  debugger
  avatar1.value = newAvatar
  imageUrl1.value = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
  panpdfname.value = newAvatar ? newAvatar[0].name : null
}

watch(avatar2, newAvatar => {
  if (newAvatar) {
    debugger
    imageUrl2.value = URL.createObjectURL(newAvatar[0])
  } else {
    imageUrl2.value = null
  }
})

function handleAvatarUpdate2(newAvatar) {
  debugger
  avatar2.value = newAvatar
  imageUrl2.value = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
  eppdfname.value = newAvatar ? newAvatar[0].name : null
}
watch(avatar3, newAvatar => {
  if (newAvatar) {
    debugger
    imageUrl3.value = URL.createObjectURL(newAvatar[0])
  } else {
    imageUrl3.value = null
  }
})

function handleAvatarUpdate3(newAvatar) {
  debugger
  avatar3.value = newAvatar
  imageUrl3.value = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
}
watch(avatar4, newAvatar => {
  if (newAvatar) {
    debugger
    imageUrl4.value = URL.createObjectURL(newAvatar[0])
  } else {
    imageUrl4.value = null
  }
})

function handleAvatarUpdate4(newAvatar) {
  debugger
  avatar4.value = newAvatar
  imageUrl4.value = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
}
watch(avatar, newAvatar => {
  if (newAvatar) {
    debugger
    imageUrl.value = URL.createObjectURL(newAvatar[0])
  } else {
    imageUrl.value = null
  }
})

function handleAvatarUpdate(newAvatar) {
  debugger
  avatar.value = newAvatar
  imageUrl.value = newAvatar ? URL.createObjectURL(newAvatar[0]) : null
}

const ApAddress = ref(['John'])
const currentStep = ref(0)
const currentTab = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const selectedGender = ref('')
const selectedmStatus = ref('')
const selected = ref('')
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
  address: '',
  pincode: '',
  city: '',
  district: '',
  state: '',
  country: '',
  address1: '',
  pincode1: '',
  city1: '',
  district1: '',
  state1: '',
  country1: '',
  apAddress: false,
  micr: '',
  accountType: '',
  ifsc: '',
  accountNumber: '',
  bankName: '',
  bankAddress: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
const gender = (val: string) => {
  selectedGender.value = val
  genderErrors.value = false
}
const mStatus = (val: string) => {
  selectedmStatus.value = val
  mstatusErrors.value = false
}
function selectedcheck(val: string) {
  debugger
  if (val) {
    selected.value = val
    selectedErrors.value = false
  }
}
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']

const declaration = ref(false)
function changedeclaration() {
  declaration.value = !declaration.value
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
const addressErrors = ref([])
const pincodeErrors = ref([])
const cityErrors = ref([])
const districtErrors = ref([])
const stateErrors = ref([])
const countryErrors = ref([])
const address1Errors = ref([])
const pincode1Errors = ref([])
const city1Errors = ref([])
const district1Errors = ref([])
const state1Errors = ref([])
const country1Errors = ref([])
const apAddressErrors = ref(false)
const micrErrors = ref([])
const accountTypeErrors = ref([])
const ifscErrors = ref([])
const accountNumberErrors = ref([])
const bankNameErrors = ref([])
const bankAddressErrors = ref([])

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const ifscRegx = /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/
const date = ref(new Date())

watch(
  () => formData.value.fname,
  newValue => {
    debugger
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
    debugger
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
watch(
  () => formData.value.address,
  newValue => {
    if (!newValue) {
      addressErrors.value = ['This field is required']
    } else {
      addressErrors.value = []
    }
  },
)
watch(
  () => formData.value.pincode,
  newValue => {
    if (!newValue) {
      pincodeErrors.value = ['This field is required']
    } else {
      pincodeErrors.value = []
    }
  },
)
watch(
  () => formData.value.city,
  newValue => {
    if (!newValue) {
      cityErrors.value = ['This field is required']
    } else {
      cityErrors.value = []
    }
  },
)
watch(
  () => formData.value.district,
  newValue => {
    if (!newValue) {
      districtErrors.value = ['This field is required']
    } else {
      districtErrors.value = []
    }
  },
)
watch(
  () => formData.value.state,
  newValue => {
    if (!newValue) {
      stateErrors.value = ['This field is required']
    } else {
      stateErrors.value = []
    }
  },
)
watch(
  () => formData.value.country,
  newValue => {
    if (!newValue) {
      countryErrors.value = ['This field is required']
    } else {
      countryErrors.value = []
    }
  },
)
watch(
  () => formData.value.micr,
  newValue => {
    if (!newValue) {
      micrErrors.value = ['This field is required']
    } else {
      micrErrors.value = []
    }
  },
)
watch(
  () => formData.value.accountType,
  newValue => {
    if (!newValue) {
      accountTypeErrors.value = ['This field is required']
    } else {
      accountTypeErrors.value = []
    }
  },
)
watch(
  () => formData.value.ifsc,
  newValue => {
    if (!newValue) {
      ifscErrors.value = ['This field is required']
    } else {
      ifscErrors.value = []
    }
  },
)
watch(
  () => formData.value.accountNumber,
  newValue => {
    if (!newValue) {
      accountNumberErrors.value = ['This field is required']
    } else {
      accountNumberErrors.value = []
    }
  },
)
watch(
  () => formData.value.bankName,
  newValue => {
    if (!newValue) {
      bankNameErrors.value = ['This field is required']
    } else {
      bankNameErrors.value = []
    }
  },
)
watch(
  () => formData.value.bankAddress,
  newValue => {
    if (!newValue) {
      bankAddressErrors.value = ['This field is required']
    } else {
      bankAddressErrors.value = []
    }
  },
)
watch(
  () => formData.value.address1,
  newValue => {
    if (!newValue) {
      address1Errors.value = ['This field is required']
    } else {
      address1Errors.value = []
    }
  },
)
watch(
  () => formData.value.pincode1,
  newValue => {
    if (!newValue) {
      pincode1Errors.value = ['This field is required']
    } else {
      pincode1Errors.value = []
    }
  },
)
watch(
  () => formData.value.city1,
  newValue => {
    if (!newValue) {
      city1Errors.value = ['This field is required']
    } else {
      city1Errors.value = []
    }
  },
)
watch(
  () => formData.value.district1,
  newValue => {
    if (!newValue) {
      district1Errors.value = ['This field is required']
    } else {
      district1Errors.value = []
    }
  },
)
watch(
  () => formData.value.state1,
  newValue => {
    if (!newValue) {
      state1Errors.value = ['This field is required']
    } else {
      state1Errors.value = []
    }
  },
)
watch(
  () => formData.value.country1,
  newValue => {
    if (!newValue) {
      country1Errors.value = ['This field is required']
    } else {
      country1Errors.value = []
    }
  },
)
function validateStep1() {
  debugger
  // Validate fields for step 1
  let isValid = true
  if (formData.value.fname == '' || formData.value.fname.length < 4) {
    if (formData.value.fname == '' && formData.value.fname.length == 0) {
      fnameErrors.value = ['This field is required']
      isValid = false
    } else if (formData.value.fname.length < 4) {
      isValid = false
      fnameErrors.value = ['This field must be greater than 4 charecters']
    }
  }
  if (formData.value.name == '' || formData.value.name.length < 4) {
    if (formData.value.name == '' && formData.value.name.length == 0) {
      nameErrors.value = ['This field is required']
      isValid = false
    } else if (formData.value.name.length < 4) {
      isValid = false
      nameErrors.value = ['This field must be greater than 4 charecters']
    }
  }

  if (formData.value.email == '' || !emailRegex.test(formData.value.email)) {
    if (formData.value.email == '' && formData.value.email.length == 0) {
      emailErrors.value = ['This field is required']
      isValid = false
    } else if (!emailRegex.test(formData.value.email)) {
      emailErrors.value = ['Invalid email address ']
      isValid = false
    }
  }
  if (formData.value.phone == '' || formData.value.phone.length != 10) {
    if (formData.value.phone == '' && formData.value.phone.length == 0) {
      phoneErrors.value = ['This field is required']
      isValid = false
    } else if (formData.value.phone.length != 10) {
      phoneErrors.value = ['Invalid Mobile Number']
      isValid = false
    }
  }
  if (formData.value.adhar == '' || formData.value.adhar.length != 4) {
    if (formData.value.adhar == '' && formData.value.adhar.length == 0) {
      adharErrors.value = ['This field is required']
      isValid = false
    } else if (formData.value.phone.length != 4) {
      adharErrors.value = ['This field must be only 4 digits']
      isValid = false
    }
  }
  if (formData.value.pan == '') {
    panErrors.value = ['This field is required']
    isValid = false
  }
  if (formData.value.dob == '') {
    dobErrors.value = ['This field is required']
    isValid = false
  }

  if (formData.value.branchCode == '') {
    branchErrors.value = ['This field is required']
    isValid = false
  }

  if (formData.value.education == '') {
    educationErrors.value = ['This field is required']
    isValid = false
  }
  if (selectedGender.value == '') {
    genderErrors.value = true
    isValid = false
  }
  if (selectedmStatus.value == '') {
    mstatusErrors.value = true
    isValid = false
  }
  if (selected.value == '') {
    selectedErrors.value = true
    isValid = false
  }
  return isValid
}

function validateStep2() {
  let valid = true
  if (formData.value.address == '') {
    addressErrors.value = ['This field is required']
    valid = false
  }
  if (formData.value.pincode == '' || formData.value.pincode.length != 6) {
    if (formData.value.pincode == '' || formData.value.pincode.length == 0) {
      pincodeErrors.value = ['This field is required']
      valid = false
    } else if (formData.value.pincode.length != 6) {
      pincodeErrors.value = ['Enter valid Pincode']
      valid = false
    }
  }
  if (formData.value.city == '') {
    cityErrors.value = ['This field is required']
    valid = false
  }
  if (formData.value.district == '') {
    districtErrors.value = ['This field is required']
    valid = false
  }
  if (formData.value.state == '') {
    stateErrors.value = ['This field is required']
    valid = false
  }
  if (formData.value.country == '') {
    countryErrors.value = ['This field is required']
    valid = false
  }
  if (formData.value.apAddress == true) {
    if (formData.value.address1 == '') {
      address1Errors.value = ['This field is required']
      valid = false
    }
    if (formData.value.pincode1 == '' || formData.value.pincode1.length != 6) {
      if (formData.value.pincode1 == '' || formData.value.pincode1.length == 0) {
        pincode1Errors.value = ['This field is required']
        valid = false
      } else if (formData.value.pincode1.length != 6) {
        pincode1Errors.value = ['Enter valid Pincode']
        valid = false
      }
    }
    if (formData.value.city1 == '') {
      city1Errors.value = ['This field is required']
      valid = false
    }
    if (formData.value.district1 == '') {
      district1Errors.value = ['This field is required']
      valid = false
    }
    if (formData.value.state1 == '') {
      state1Errors.value = ['This field is required']
      valid = false
    }
    if (formData.value.country1 == '') {
      country1Errors.value = ['This field is required']
      valid = false
    }
  }
  return valid
}

function validateStep3() {
  let check = true
  if (formData.value.micr == '') {
    micrErrors.value = ['This field is required']
    check = false
  }
  if (formData.value.accountType == '') {
    accountTypeErrors.value = ['This field is required']
    check = false
  }
  if (formData.value.ifsc == '' || !ifscRegx.test(formData.value.ifsc)) {
    if (formData.value.ifsc == '' && formData.value.ifsc.length == 0) {
      ifscErrors.value = ['This field is required']
      check = false
    } else if (!ifscRegx.test(formData.value.ifsc)) {
      ifscErrors.value = ['Invalid IFSC Code (note: first 4 digit albets next 7 digits alphanumeric)']
      check = false
    }
  }
  if (formData.value.accountNumber == '') {
    accountNumberErrors.value = ['This field is required']
    check = false
  }
  if (formData.value.bankName == '') {
    bankNameErrors.value = ['This field is required']
    check = false
  }
  if (formData.value.bankAddress == '') {
    bankAddressErrors.value = ['This field is required']
    check = false
  }
  return check
}
function validateForm() {
  // debugger
  // currentStep.value++
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
function apAddressClick(val: boolean) {
  val = !val
}
const isDialogVisible = ref(false)
const isPanDialogVisible = ref(false)
const isEpDialogVisible = ref(false)
</script>

<style lang="scss" scoped>
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
.button-effect {
  padding: 0px 0px;
  a {
    margin-right: 17px;
    padding-bottom: 30px;
    padding-top: 10px;
    background-color: #1e3a8a;
  }
}
.effect {
  text-align: center;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: white;
  text-transform: capitalize;
  /* background-color: - add your own background-color */
  font: {
    family: 'Roboto', sans-serif; /* put your font-family */
    size: 18px;
  }
  padding: 20px 0px;
  width: 150px;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}
.effect.effect-5 {
  transition: all 0.2s linear 0s;

  &:before {
    content: '←';
    font-family: FontAwesome;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0px;
    height: 100%;
    width: 30px;
    // background-color: rgba(gray, 0.3);
    border-radius: 0 50% 50% 0;
    transform: scale(0, 1);
    transform-origin: left center;
    transition: all 0.2s linear 0s;
  }

  &:hover {
    text-indent: 30px;

    &:before {
      transform: scale(1, 1);
      text-indent: 0;
    }
  }
}
.effect.effect-1 {
  transition: all 0.2s linear 0s;

  &:before {
    content: '→';

    font-size: 15px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    opacity: 0;
    height: 100%;
    width: 40px;
    transition: all 0.2s linear 0s;
  }

  &:hover {
    text-indent: -20px;

    &:before {
      opacity: 1;
      text-indent: 0px;
    }
  }
}
.is-disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
.buttonsubmit {
  width: 270px;
  height: 80px;
  border: none;
  outline: none;
  background: #2f2f2f;
  color: #fff;
  font-size: 22px;
  border-radius: 40px;
  text-align: center;
  box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

// .check-boxsubmit {
//   width: 80px;
//   height: 80px;
//   border-radius: 40px;
//   box-shadow: 0 0 12px -2px rgba(0, 0, 0, 0.5);
//   position: absolute;
//   top: 0;
//   right: -40px;
//   opacity: 0;
// }

// .check-boxsubmit svg {
//   width: 40px;
//   margin: 20px;
// }

// svg path {
//   stroke-width: 3;
//   stroke: #fff;
//   stroke-dasharray: 34;
//   stroke-dashoffset: 34;
//   stroke-linecap: round;
// }

// .active {
//   background: #ff2b75;
//   transition: 1s;
// }

// .active .check-boxsubmit {
//   right: 0;
//   opacity: 1;
//   transition: 1s;
// }

// .active p {
//   margin-right: 125px;
//   transition: 1s;
// }

// .active svg path {
//   stroke-dashoffset: 0;
//   transition: 1s;
//   transition-delay: 1s;
// }
// .c-stepper {
//   display: flex;
//   flex-wrap: wrap;
// }

// .c-stepper__item {
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// }

// .c-stepper__item:not(:last-child) {
//   flex: 1;
// }

// .c-stepper__item:before {
//   --size: 3rem;
//   content: '';
//   display: block;
//   flex: 0 0 var(--size);
//   height: var(--size);
//   border-radius: 50%;
// }
.line {
  width: 120px;
  height: 0;

  margin-right: 20px;
  margin-bottom: 7px;
  display: inline-block;
}
</style>

<template>
  <VCard class="ml-6 mb-3 text-sm">
    <VCardText class="space-x-4">
      <div class="flex justify-between items-center">
        <div
          v-for="(step, index) in numberedSteps"
          :key="index"
          class="flex items-center space-x-4"
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
            class="w-8 h-8 rounded-full flex justify-center items-center"
            :class="
              currentStep === index || currentStep >= index ? 'bg-blue-900 text-white' : 'bg-gray-300 text-gray-700'
            "
          >
            {{ index + 1 }}
          </label>
          <div class="">
            <div class="text-gray-700 font-semibold text-[14px]">{{ step.title }}</div>
            <!-- <div class="text-gray-500 text-sm">{{ step.subtitle }}</div> -->
          </div>
          <div
            style="font-size: 25px; margin-left: 15px"
            :class="currentStep >= index ? 'text-blue-900' : ' text-gray-300'"
            v-if="index < numberedSteps.length - 1"
          >
            <div
              class="line"
              :style="currentStep >= index ? 'border: 1px solid #1E3A8A ' : ' border: 1px solid #c4c4c4'"
            ></div>
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
              <!-- <VCol cols="12">
                <h6 class="text-sm font-weight-medium">Personal Details</h6>
                <p class="text-xs mb-0">Enter your Personal Details</p>
              </VCol> -->

              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.name"
                  placeholder="John"
                  label="Name *"
                  id="name"
                  :error-messages="nameErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.fname"
                  placeholder="Johny"
                  label="Father's Name *"
                  id="fname"
                  :error-messages="fnameErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.email"
                  placeholder="john@gmail.com"
                  label="Email *"
                  :error-messages="emailErrors"
                  id="email"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.phone"
                  placeholder="9876543210"
                  label="Phone *"
                  type="number"
                  :error-messages="phoneErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VRow
                  ><label
                    for="gender"
                    class="px-3 py-2"
                    :class="genderErrors == true ? 'text-red-500' : ''"
                    >Gender *</label
                  ></VRow
                >
                <VRow>
                  <div
                    :style="genderErrors == true ? 'border: 1px solid #f73131 !important;' : ''"
                    :class="
                      selectedGender == 'option1'
                        ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                        : genderErrors == true
                        ? '  border border-red-500  w-30 p-5 py-2 rounded-md text-red-500 '
                        : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                    "
                    class="mx-3 my-2"
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
                    :style="genderErrors == true ? 'border: 1px solid #f73131 !important;' : ''"
                    :class="
                      selectedGender == 'option2'
                        ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                        : genderErrors == true
                        ? '  border border-red-500  w-30 p-5 py-2 rounded-md text-red-500 '
                        : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                    "
                    class="mx-3 my-2"
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
                    :style="genderErrors == true ? 'border: 1px solid #f73131 !important;' : ''"
                    :class="
                      selectedGender == 'option3'
                        ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                        : genderErrors == true
                        ? '  border border-red-500  w-30 p-5 py-2 rounded-md text-red-500 '
                        : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                    "
                    class="mx-3 my-2"
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
                md="4"
              >
                <VRow
                  ><label
                    for="gender"
                    class="px-3 py-2"
                    :class="mstatusErrors == true ? 'text-red-500' : ''"
                    >Marital Status *</label
                  ></VRow
                >
                <VRow>
                  <div
                    :style="mstatusErrors == true ? 'border: 1px solid #f73131 !important;' : ''"
                    :class="
                      selectedmStatus == 'Single'
                        ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                        : mstatusErrors == true
                        ? '  border border-red-800 w-30 p-5 py-2 rounded-md text-red-500 '
                        : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                    "
                    class="mx-3 my-2"
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
                    :style="mstatusErrors == true ? 'border: 1px solid #f73131 !important;' : ''"
                    :class="
                      selectedmStatus == 'Married'
                        ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                        : mstatusErrors == true
                        ? '  border border-red-800 w-30 p-5 py-2 rounded-md text-red-500 '
                        : ' text-black border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                    "
                    class="mx-3 my-2"
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
                md="4"
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
                md="4"
                class="my-3"
              >
                <VTextField
                  v-model="formData.dob"
                  placeholder="DD-MM-YYYY"
                  label="Date of Birth *"
                  type="date"
                  :error-messages="dobErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
                class="mt-2.5"
              >
                <VTextField
                  v-model="formData.adhar"
                  type="number"
                  placeholder="2345"
                  label="Aadhaar Number (Last 4 Digits Only)  *"
                  :error-messages="adharErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
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
                md="4"
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

              <VCol
                cols="12"
                md="4"
              >
                <div
                  :class="selectedErrors == true ? 'text-red-500' : ''"
                  class="pb-3"
                >
                  Choose the Exchange *
                </div>
                <div class="flex">
                  <div
                    class="demo-space-x"
                    style="padding-top: 1px"
                  >
                    <VCheckbox
                      v-model="selected"
                      @click="selectedcheck('NSE [CASH, FNO, COMMODITY, CURRENCY]')"
                      value="NSE [CASH, FNO, COMMODITY, CURRENCY]"
                    >
                      <template v-slot:label>
                        <span style="color: gray">NSE</span>
                      </template>
                    </VCheckbox>
                  </div>
                  <div
                    class="demo-space-x"
                    style="padding-top: 1px; padding-left: 2px"
                  >
                    <VCheckbox
                      v-model="selected"
                      @click="selectedcheck('BSE [CASH, FNO, COMMODITY, CURRENCY]')"
                      value="BSE [CASH, FNO, COMMODITY, CURRENCY]"
                    >
                      <template v-slot:label>
                        <span style="color: gray">BSE </span>
                      </template>
                    </VCheckbox>
                  </div>
                  <div
                    class="demo-space-x"
                    style="padding-top: 1px; padding-left: 2px"
                  >
                    <VCheckbox
                      v-model="selected"
                      @click="selectedcheck('MCX [FNO]')"
                      value="MCX [FNO]"
                    >
                      <template v-slot:label>
                        <span style="color: gray">MCX </span>
                      </template>
                    </VCheckbox>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <!-- <VCol cols="12">
                <h6 class="text-sm font-weight-medium">Address Details</h6>
                <p class="text-xs mb-0 mt-0">Setup Information</p>
              </VCol> -->

              <VCol
                cols="12"
                md="4"
              >
                <VTextarea
                  label="Address *"
                  placeholder="Address *"
                  v-model="formData.address"
                  :error-messages="addressErrors"
                  :rules="[requiredValidator]"
                  rows="2"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  label="Pin Code *"
                  placeholder="613601"
                  v-model="formData.pincode"
                  type="number"
                  :error-messages="pincodeErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
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
                md="4"
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
                md="4"
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
                md="4"
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
                  style="padding-top: 0px; padding-left: 2px"
                >
                  <VCheckbox
                    v-model="formData.apAddress"
                    @click="apAddressClick(formData.apAddress)"
                  >
                    <template v-slot:label>
                      <span style="font-size: 14px; color: gray">AP Address Same As Permanent Address</span>
                    </template>
                  </VCheckbox>
                </div>
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VTextarea
                  label="Address *"
                  placeholder="Address *"
                  v-if="formData.apAddress"
                  v-model="formData.address1"
                  :error-messages="address1Errors"
                  :rules="[requiredValidator]"
                  rows="2"
                />
                <VTextarea
                  label="Address "
                  placeholder="Address "
                  rows="2"
                  v-if="!formData.apAddress"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  label="Pin Code *"
                  placeholder="613601 "
                  type="number"
                  v-if="formData.apAddress"
                  v-model="formData.pincode1"
                  :error-messages="pincode1Errors"
                  :rules="[requiredValidator]"
                />
                <VTextField
                  label="Pin Code "
                  type="number"
                  placeholder="613601"
                  v-if="!formData.apAddress"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  label="City / Town * "
                  placeholder="Chennai "
                  v-if="formData.apAddress"
                  v-model="formData.city1"
                  :error-messages="city1Errors"
                  :rules="[requiredValidator]"
                />
                <VTextField
                  label="City / Town  "
                  placeholder="Chennai"
                  v-if="!formData.apAddress"
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  label="District *"
                  placeholder="Thanjavur"
                  v-if="formData.apAddress"
                  v-model="formData.district1"
                  :error-messages="district1Errors"
                  :rules="[requiredValidator]"
                />
                <VTextField
                  label="District "
                  placeholder="Thanjavur"
                  v-if="!formData.apAddress"
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VSelect
                  label="State / U.T Code * "
                  placeholder="Select State"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                  v-if="formData.apAddress"
                  v-model="formData.state1"
                  :error-messages="state1Errors"
                  :rules="[requiredValidator]"
                />
                <VSelect
                  label="State / U.T Code "
                  placeholder="Select State"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                  v-if="!formData.apAddress"
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VSelect
                  label="Country / ISO Code *"
                  placeholder="Select Country"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                  v-if="formData.apAddress"
                  v-model="formData.country1"
                  :error-messages="country1Errors"
                  :rules="[requiredValidator]"
                />
                <VSelect
                  v-model="formData.country1"
                  label="Country / ISO Code *"
                  placeholder="Select Country"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                  v-if="!formData.apAddress"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <!-- <VCol cols="12">
                <h6 class="text-sm font-weight-medium">Bank Details</h6>
                <p class="text-xs mb-0">Add Bank Details</p>
              </VCol> -->

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.accountType"
                  label="Account Type * "
                  placeholder="Select AccountType "
                  :items="['Savings Account', 'Salary Account', 'Fixed Account']"
                  :error-messages="accountTypeErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.ifsc"
                  placeholder="IFSC Code *"
                  label="IFSC Code *"
                  :error-messages="ifscErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.accountNumber"
                  placeholder="Account Number *"
                  label="Account Number * "
                  type="number"
                  :error-messages="accountNumberErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.bankName"
                  placeholder="Bank Name *"
                  label="Bank Name *"
                  :error-messages="bankNameErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.micr"
                  placeholder="MICR Code *"
                  label="MICR Code *"
                  :error-messages="micrErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextarea
                  label="Bank Address *"
                  v-model="formData.bankAddress"
                  placeholder="Address *"
                  :error-messages="bankAddressErrors"
                  :rules="[requiredValidator]"
                />
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem>
            <VRow>
              <VCol
                cols="12"
                md="4"
              >
                <VCard>
                  <div
                    v-if="!avatar1"
                    class="p-5 py-2"
                  >
                    <VFileInput
                      v-model="avatar1"
                      :rules="rules"
                      label="PAN"
                      placeholder="Pick a Proof"
                      prepend-icon="ri-attachment-line"
                      @update:model-value="handleAvatarUpdate1"
                      show-details
                    />
                  </div>
                  <div
                    v-if="avatar1"
                    class=""
                  >
                    <div class="flex py-4 justify-between px-2">
                      <div class="">{{ panpdfname }}</div>
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
                    <!-- <div class="absolute top-0 right-0 left-0 bg-white">
                      <div class="flex justify-between">
                        <div class="font-bold px-5 py-5">PAN</div>
                        <div
                          class="bg-red-500 border px-5 py-2 rounded-md text-white w-30 my-3 mx-5"
                          @click="handleAvatarUpdate1(null)"
                        >
                          Remove
                        </div>
                      </div>
                    </div> -->
                  </div>
                </VCard>
              </VCol>
              <VCol cols="12">
                <VCard>
                  <div
                    v-if="!avatar2"
                    class="p-5 py-2"
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
                    v-if="avatar2"
                    class="relative"
                  >
                    <div class="">
                      <!-- <object
                        :data="imageUrl1"
                        type="application/pdf"
                        width="100%"
                        height="400"
                      /> -->
                      <div class="flex py-4 justify-between px-2">
                        <div class="">{{ eppdfname }}</div>
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
                    <!-- <div class="absolute top-0 right-0 left-0 bg-white">
                      <div class="flex justify-between">
                        <div class="font-bold px-5 py-5">EDUCATION PROOF</div>
                        <div
                          class="bg-red-500 border px-5 py-2 rounded-md text-white w-30 my-3 mx-5"
                          @click="handleAvatarUpdate2(null)"
                        >
                          Remove
                        </div>
                      </div>
                    </div> -->
                  </div>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VCard>
                  <div
                    v-if="!avatar"
                    class="p-5 py-2"
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
                    v-if="avatar"
                    class=""
                  >
                    <div
                      class="flex justify-center items-center"
                      @click="isDialogVisible = true"
                    >
                      <img
                        :src="imageUrl"
                        width="50"
                        height="50"
                      />
                    </div>

                    <!-- <div class="absolute top-0 right-0 left-0 bg-white">
                      <div class="flex justify-between">
                        <div class="font-bold px-5 py-5">PHOTO</div>
                        <div
                          class="bg-red-500 border px-5 py-2 rounded-md text-white w-30 my-3 mx-5"
                          @click="handleAvatarUpdate(null)"
                        >
                          Remove
                        </div>
                      </div>
                    </div> -->
                  </div>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VCard>
                  <div
                    v-if="!avatar3"
                    class="p-5 py-2"
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
                    v-if="avatar3"
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
                    <div class="absolute top-0 right-0 left-0 bg-white">
                      <div class="flex justify-between">
                        <div class="font-bold px-5 py-5">ADDRESS PROOF</div>
                        <div
                          class="bg-red-500 border px-5 py-2 rounded-md text-white w-30 my-3 mx-5"
                          @click="handleAvatarUpdate3(null)"
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                </VCard>
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VCard>
                  <div
                    v-if="!avatar4"
                    class="p-5 py-2"
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
                    v-if="avatar4"
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
                    <div class="absolute top-0 right-0 left-0 bg-white">
                      <div class="flex justify-between">
                        <div class="font-bold px-5 py-5">AP ADDRESS PROOF</div>
                        <div
                          class="bg-red-500 border px-5 py-2 rounded-md text-white w-30 my-3 mx-5"
                          @click="handleAvatarUpdate4(null)"
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </div>
                </VCard>
              </VCol>
            </VRow>
            <VCol cols="12"><div class="text-blue-600 py-2 pb-0">DECLARATION</div></VCol>

            <VCol cols="12">
              <div
                class="demo-space-x"
                style="padding-left: 2px; padding-top: 0px"
              >
                <VCheckbox
                  v-model="declaration"
                  @click="changedeclaration"
                >
                  <template v-slot:label>
                    <span style="font-size: 14px; color: gray"
                      >I hereby declare that the details furnished above are true and correct to the best of my
                      knowledge and belief and i undertake to inform you of any changes therein, immediately. In case
                      any of the above information is found to be false or untrue or misleading or misrepresenting. I am
                      aware that i may be held liable for it. I hereby consent to receiving information from Central KYC
                      Registry through SMS/Email on the above registered number / Email address.</span
                    >
                  </template>
                </VCheckbox>
              </div>
            </VCol>
            <VRow>
              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.branchCode"
                  placeholder="GPMZ0001"
                  label="Your Code *"
                  :error-messages="nameErrors"
                  :rules="[requiredValidator]"
                  readonly
                />
              </VCol>

              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.name"
                  placeholder="TESTQ"
                  label="Client Name *"
                  :error-messages="nameErrors"
                  :rules="[requiredValidator]"
                  readonly
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.district"
                  placeholder="CHENNAI"
                  label="Place *"
                  :error-messages="nameErrors"
                  :rules="[requiredValidator]"
                  readonly
                />
              </VCol>
              <!-- <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.dob"
                  placeholder="04-10-2024"
                  label="Date *"
                  :error-messages="nameErrors"
                  :rules="[requiredValidator]"
                  readonly
                />
              </VCol> -->
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-4">
          <!-- <VBtn
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
            </VBtn> -->
          <div
            :class="{ 'is-disabled': currentStep === 0 }"
            @click="currentStep > 0 && currentStep--"
          >
            <div class="button-effect">
              <a
                class="effect effect-5"
                href="#"
                title="Learn More"
                >PREV</a
              >
            </div>
          </div>

          <VBtn
            v-if="currentStep === numberedSteps.length - 1"
            color="success"
            append-icon="ri-check-line"
            @click="onSubmit"
          >
            Submit
          </VBtn>
          <!-- <div v-if="currentStep === numberedSteps.length - 1">
              <button data-type="submit">
                <VIcon
                  icon="ri-user-add-fill"
                  color="red"
                  size="22"
                />
                submit
              </button>
            </div> -->

          <!-- <VBtn
              v-else
              @click="validateForm"
            >
              Next
              <VIcon
                icon="ri-arrow-right-line"
                end
                class="flip-in-rtl"
              />
            </VBtn> -->
          <div
            v-else
            @click="validateForm"
          >
            <div class="button-effect">
              <a
                class="effect effect-1"
                href="#"
                title="Learn More"
                >NEXT</a
              >
            </div>
          </div>
        </div>
      </VForm>
    </VCardText>
  </VCard>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <VCard>
      <VCardText
        ><div class="flex justify-center items-center mx-auto my-auto">
          <div>
            <object
              :data="imageUrl"
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
    v-model="isEpDialogVisible"
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
