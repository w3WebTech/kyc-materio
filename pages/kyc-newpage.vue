<template>
  <div :class="{ 'dark-theme': isDarkTheme }">
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
                    @input="nameErrors = []"
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
                    @input="fnameErrors = []"
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
                    @input="emailErrors = []"
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
                    @input="phoneErrors = []"
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
                      :class="genderErrors == true ? 'text-red-500' : 'text-gray-500'"
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
                          : '  border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3 my-2"
                      @click="gender('option1')"
                    >
                      <!-- <input
                      type="radio"
                      :name="`gender-${selectedGender}`"
                      value="option1"
                      class="bg-blue-500 text-white"
                    /> -->
                      Male
                    </div>
                    <div
                      :style="genderErrors == true ? 'border: 1px solid #f73131 !important;' : ''"
                      :class="
                        selectedGender == 'option2'
                          ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                          : genderErrors == true
                          ? '  border border-red-500  w-30 p-5 py-2 rounded-md text-red-500 '
                          : '  border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3 my-2"
                      @click="gender('option2')"
                    >
                      <!-- <input
                      type="radio"
                      :name="`gender-${selectedGender}`"
                      value="option2"
                      class="bg-blue-500 text-white"
                    /> -->
                      Female
                    </div>
                    <div
                      :style="genderErrors == true ? 'border: 1px solid #f73131 !important;' : ''"
                      :class="
                        selectedGender == 'option3'
                          ? 'bg-blue-900 text-white w-30 p-5 py-2 rounded-md font-bold'
                          : genderErrors == true
                          ? '  border border-red-500  w-30 p-5 py-2 rounded-md text-red-500 '
                          : ' border border-gray-800 w-30 p-5 py-2 rounded-md text-gray-500 '
                      "
                      class="mx-3 my-2"
                      @click="gender('option3')"
                    >
                      <!-- <input
                      type="radio"
                      :name="`gender-${selectedGender}`"
                      value="option3"
                      class="bg-blue-500 text-white"
                    /> -->
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
                      :class="mstatusErrors == true ? 'text-red-500' : 'text-gray-500'"
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
                      <!-- <input
                      type="radio"
                      value="option1"
                      class="bg-blue-500 text-white"
                    /> -->
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
                      <!-- <input
                      type="radio"
                      value="option2"
                      class="bg-blue-500 text-white"
                    /> -->
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
                    @input="panErrors = []"
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
                    @input="dobErrors = []"
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
                    @input="adharErrors = []"
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
                    @change="branchErrors = []"
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
                    @change="educationErrors = []"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="4"
                >
                  <div
                    :class="selectedErrors == true ? 'text-red-500' : 'text-gray-500'"
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
            </div>
          </div>
          <div
            class="slide"
            :class="{ active: activeSlide === 2, hidden: activeSlide !== 2 }"
          >
            <div class="slide-1 w-full flex justify-center space-x-4">
              <VRow class="md:px-40">
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
                    @change="accountTypeErrors = []"
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
                    @input="ifscErrors = []"
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
                    @input="accountNumberErrors = []"
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
                    @input="bankNameErrors = []"
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
                    @input="micrErrors = []"
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
                    @input="bankAddressErrors = []"
                  />
                </VCol>
              </VRow>
            </div>
          </div>
          <div
            class="slide"
            :class="{ active: activeSlide === 3, hidden: activeSlide !== 3 }"
          >
            <div class="slide-1 w-full flex justify-center space-x-4">
              <VRow class="md:px-40">
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
                    @input="addressErrors = []"
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
                    @input="pincodeErrors = []"
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
                    @input="cityErrors = []"
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
                    @input="addressErrors = []"
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
                    @change="stateErrors = []"
                    :items="['English', 'Spanish', 'French', 'Russian', 'German']"
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
                    @change="countryErrors = []"
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
                    @input="address1Errors = []"
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
                    @input="pincode1Errors = []"
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
                    @input="city1Errors = []"
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
                    @input="district1Errors = []"
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
                    @change="state1Errors = []"
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
                    @change="country1Errors = []"
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
            </div>
          </div>
          <div
            class="slide"
            :class="{ active: activeSlide === 4, hidden: activeSlide !== 4 }"
          >
            <div class="slide-1 w-full flex justify-center space-x-4">
              <VRow class="md:px-40">
                <!-- <VCol cols="12">SECOND STEP</VCol> -->

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
            </div>
          </div>
          <div
            class="slide"
            :class="{ active: activeSlide === 5, hidden: activeSlide !== 5 }"
          >
            <div class="slide-1 w-full flex justify-center space-x-4">
              <VRow class="md:px-40">
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
                          knowledge and belief and i undertake to inform you of any changes therein, immediately. In
                          case any of the above information is found to be false or untrue or misleading or
                          misrepresenting. I am aware that i may be held liable for it. I hereby consent to receiving
                          information from Central KYC Registry through SMS/Email on the above registered number / Email
                          address.</span
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
              </VRow>
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

        <div class="slide-nav flex justify-between mb-6 mt-2 md:ml-40">
          <VBtn
            @click="navigate(-1)"
            class="bg-gray-200 p-2 rounded"
            :disabled="activeSlide <= 1"
          >
            <VIcon
              icon="ri-arrow-left-double-line"
              color="white"
              size="14"
              class="px-5 py-3"
            />
            PREV
          </VBtn>
          <div>
            <VBtn
              @click="navigate(1)"
              class="p-2 rounded md:mr-[90px]"
              :disabled="steps[steps?.length - 1] == activeSlide"
              id="start-button"
            >
              NEXT
              <VIcon
                icon="ri-arrow-right-double-line"
                color="white"
                size="14"
                class="px-5 py-3"
              />
            </VBtn>
            <!-- <div class="mb-20 pl-20 ml-20">
            <VBtn
              color="warning"
              icon="ri-question-mark"
            />
          </div> -->
            <div class="relative md:inline-block">
              <VBtn
                color="#000"
                :icon="!showQuestionCard ? 'ri-question-mark' : 'ri-arrow-down-s-line'"
                @click="toggleQuestionCard"
                class="mt-3 ml-10"
              />
              <div
                v-if="showQuestionCard"
                :class="isDarkTheme == true ? 'bg-[#312D4B]' : ''"
                class="question-card absolute bottom-full right-0 mb-2 w-70 z-50"
              >
                <VCard class="p-4">
                  <div class="drawer drawer-end">
                    <div class="drawer-side">
                      <label
                        for="my-drawer"
                        class="drawer-overlay"
                      ></label>
                      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        <li class="menu-item">
                          <div class="text-sm text-gray-600 font-bold py-3">GETTING STARTED</div>
                          <hr />
                          <div class="h-2"></div>
                          <ul class="menu-items text-sm">
                            <li class="hover:bg-gray-200 hover:rounded-md py-3">
                              <div class="text-gray-600">
                                <VIcon
                                  icon="ri-question-mark"
                                  color="gray"
                                  size="14"
                                  class="px-5 py-3"
                                />Help center
                              </div>
                            </li>
                            <li class="hover:bg-gray-200 hover:rounded-md py-3">
                              <div class="text-gray-600">
                                <VIcon
                                  icon="ri-message-2-line"
                                  color="gray"
                                  size="15"
                                  class="px-5 py-2"
                                />Support chat
                              </div>
                            </li>
                            <li class="hover:bg-gray-200 hover:rounded-md py-3">
                              <div class="text-gray-600">
                                <VIcon
                                  icon="ri-lightbulb-flash-line"
                                  color="gray"
                                  size="15"
                                  class="px-5 py-2"
                                />Submit feedback / Request feature
                              </div>
                            </li>
                            <li class="hover:bg-gray-200 hover:rounded-md py-3">
                              <div class="text-gray-600">
                                <VIcon
                                  icon="ri-group-line"
                                  color="gray"
                                  size="15"
                                  class="px-5 py-2"
                                />Hire a Uizard Expert <span class="text-blue-600">- $100 off</span>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item">
                          <div class="text-sm text-gray-600 font-bold py-3">GENERAL</div>
                          <hr />
                          <div class="h-2"></div>
                          <ul class="menu-items text-sm">
                            <li class="hover:bg-gray-200 hover:rounded-md">
                              <div class="text-gray-600 flex">
                                <div class="px-3 py-3">
                                  <VBadge
                                    dot
                                    color="error"
                                  >
                                    <VIcon
                                      color="gray"
                                      size="20"
                                      class=""
                                      icon="ri-information-line"
                                    />
                                  </VBadge>
                                </div>
                                <div class="py-4">What's new</div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <!-- <div class="mt-4">
                    
                    <VTextarea
                      class="mb-2"
                      rows="4"
                      v-model="customQuestion"
                      label="Ask your question"
                      placeholder="Type your question here..."
                    />
                    <VBtn
                      block
                      color="primary"
                      @click="submitQuestion"
                      :disabled="!customQuestion"
                    >
                      Submit Question
                    </VBtn>
                  </div> -->
                  </div>
                </VCard>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center text-center my-4">
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
                class="my-5 py-5"
              />
            </div>
            <div
              v-for="item in adharResponse.aadhaarData.response.result"
              :key="item.id"
            >
              <p>{{ item }}</p>
            </div>
          </div></VCardText
        >
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
  </div>
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
      datePickerVisible: false,
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
      showQuestionCard: false,
      customQuestion: '',
      adharResponse: null,
      selectedGender: '',
      selectedmStatus: '',
      formData: ref({
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
      }),
      nameErrors: ref([]),
      fnameErrors: ref([]),
      emailErrors: ref([]),
      phoneErrors: ref([]),
      adharErrors: ref([]),
      panErrors: ref([]),
      dobErrors: ref([]),
      educationErrors: ref([]),
      branchErrors: ref([]),
      genderErrors: ref(false),
      mstatusErrors: ref(false),
      selectedErrors: ref(false),
      addressErrors: ref([]),
      pincodeErrors: ref([]),
      cityErrors: ref([]),
      districtErrors: ref([]),
      stateErrors: ref([]),
      countryErrors: ref([]),
      address1Errors: ref([]),
      pincode1Errors: ref([]),
      city1Errors: ref([]),
      district1Errors: ref([]),
      state1Errors: ref([]),
      country1Errors: ref([]),
      apAddressErrors: ref(false),
      micrErrors: ref([]),
      accountTypeErrors: ref([]),
      ifscErrors: ref([]),
      accountNumberErrors: ref([]),
      bankNameErrors: ref([]),
      bankAddressErrors: ref([]),
      selected: ref(''),
      emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      ifscRegx: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
      date: ref(new Date()),
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
    clearAccountTypeErrors() {
      this.branchErrors = [] // Clear error messages
    },
    selectedcheck(val: string) {
      debugger
      if (val) {
        this.selected = val
        this.selectedErrors = false
      }
    },
    mStatus(val: string) {
      this.selectedmStatus = val
      this.mstatusErrors = false
    },
    gender(val: string) {
      this.selectedGender = val
      this.genderErrors = false
    },
    setSlide(id: number) {
      // this.activeSlide = id
    },
    navigate(direction: number) {
      debugger
      const stepsAsNumbers = this.steps.map(Number)
      const currentIndex = stepsAsNumbers.indexOf(this.activeSlide)
      let newIndex = currentIndex + direction

      // Validate the current step only when moving forward
      let isValid = true // Assume valid unless proven otherwise
      if (direction === 1) {
        // Only validate for "Next" button
        if (currentIndex === 0) {
          isValid = this.validateStep1()
        } else if (currentIndex === 1) {
          isValid = this.validateStep3()
        } else if (currentIndex === 2) {
          isValid = this.validateStep2()
        }

        // If the current step is not valid, do not navigate
        if (!isValid) {
          return // Exit the function to prevent navigation
        }
      }

      // Handle index boundaries
      if (newIndex < 0) {
        newIndex = 0
      } else if (newIndex >= stepsAsNumbers.length) {
        newIndex = stepsAsNumbers.length - 1
      }

      const currentSlide = document.querySelector('.slide.active')
      const nextSlide = document.querySelector(`.slide:nth-child(${newIndex + 1})`)

      if (direction === 1) {
        // Next slide
        currentSlide?.classList.add('slide-next-out')
        nextSlide?.classList.remove('hidden')
        nextSlide?.classList.add('slide-next-in')
      } else {
        // Previous slide
        currentSlide?.classList.add('slide-prev-out')
        nextSlide?.classList.remove('hidden')
        nextSlide?.classList.add('slide-prev-in')
      }

      // Clean up animations and update active slide
      setTimeout(() => {
        currentSlide?.classList.remove('active', 'slide-next-out', 'slide-prev-out')
        currentSlide?.classList.add('hidden')
        nextSlide?.classList.remove('slide-next-in', 'slide-prev-in')
        nextSlide?.classList.add('active')
        this.activeSlide = stepsAsNumbers[newIndex]
      }, 500)

      if (direction === 1) {
        confetti({ particleCount: 300, spread: 180, origin: { y: 0.7 } })
      }
    },
    validateStep1() {
      debugger
      // Validate fields for step 1
      let isValid = true
      if (this.formData.fname == '' || this.formData.fname.length < 4) {
        if (this.formData.fname == '' && this.formData.fname.length == 0) {
          this.fnameErrors = ['This field is required']
          isValid = false
        } else if (this.formData.fname.length < 4) {
          isValid = false
          this.fnameErrors = ['This field must be greater than 4 charecters']
        }
      }
      if (this.formData.name == '' || this.formData.name.length < 4) {
        if (this.formData.name == '' && this.formData.name.length == 0) {
          this.nameErrors = ['This field is required']
          isValid = false
        } else if (this.formData.name.length < 4) {
          isValid = false
          this.nameErrors = ['This field must be greater than 4 charecters']
        }
      }

      if (this.formData.email == '' || !this.emailRegex.test(this.formData.email)) {
        if (this.formData.email == '' && this.formData.email.length == 0) {
          this.emailErrors = ['This field is required']
          isValid = false
        } else if (!this.emailRegex.test(this.formData.email)) {
          this.emailErrors.value = ['Invalid email address ']
          isValid = false
        }
      }
      if (this.formData.phone == '' || this.formData.phone.length != 10) {
        if (this.formData.phone == '' && this.formData.phone.length == 0) {
          this.phoneErrors = ['This field is required']
          isValid = false
        } else if (this.formData.phone.length != 10) {
          this.phoneErrors = ['Invalid Mobile Number']
          isValid = false
        }
      }
      if (this.formData.adhar == '' || this.formData.adhar.length != 4) {
        if (this.formData.adhar == '' && this.formData.adhar.length == 0) {
          this.adharErrors = ['This field is required']
          isValid = false
        } else if (this.formData.phone.length != 4) {
          this.adharErrors = ['This field must be only 4 digits']
          isValid = false
        }
      }
      if (this.formData.pan == '') {
        this.panErrors = ['This field is required']
        isValid = false
      }
      if (this.formData.dob == '') {
        this.dobErrors = ['This field is required']
        isValid = false
      }

      if (this.formData.branchCode == '') {
        this.branchErrors = ['This field is required']
        isValid = false
      }

      if (this.formData.education == '') {
        this.educationErrors = ['This field is required']
        isValid = false
      }
      if (this.selectedGender == '') {
        this.genderErrors = true
        isValid = false
      }
      if (this.selectedmStatus == '') {
        this.mstatusErrors = true
        isValid = false
      }
      if (this.selected == '') {
        this.selectedErrors = true
        isValid = false
      }
      return isValid
    },

    validateStep2() {
      let valid = true
      if (this.formData.address == '') {
        this.addressErrors = ['This field is required']
        valid = false
      }
      if (this.formData.pincode == '' || this.formData.pincode.length != 6) {
        if (this.formData.pincode == '' || this.formData.pincode.length == 0) {
          this.pincodeErrors = ['This field is required']
          valid = false
        } else if (this.formData.pincode.length != 6) {
          this.pincodeErrors = ['Enter valid Pincode']
          valid = false
        }
      }
      if (this.formData.city == '') {
        this.cityErrors = ['This field is required']
        valid = false
      }
      if (this.formData.district == '') {
        this.districtErrors = ['This field is required']
        valid = false
      }
      if (this.formData.state == '') {
        this.stateErrors = ['This field is required']
        valid = false
      }
      if (this.formData.country == '') {
        this.countryErrors = ['This field is required']
        valid = false
      }
      if (this.formData.apAddress == true) {
        if (this.formData.address1 == '') {
          this.address1Errors = ['This field is required']
          valid = false
        }
        if (this.formData.pincode1 == '' || this.formData.pincode1.length != 6) {
          if (this.formData.pincode1 == '' || this.formData.pincode1.length == 0) {
            this.pincode1Errors = ['This field is required']
            valid = false
          } else if (this.formData.pincode1.length != 6) {
            this.pincode1Errors = ['Enter valid Pincode']
            valid = false
          }
        }
        if (this.formData.city1 == '') {
          this.city1Errors = ['This field is required']
          valid = false
        }
        if (this.formData.district1 == '') {
          this.district1Errors = ['This field is required']
          valid = false
        }
        if (this.formData.state1 == '') {
          this.state1Errors = ['This field is required']
          valid = false
        }
        if (this.formData.country1 == '') {
          this.country1Errors = ['This field is required']
          valid = false
        }
      }
      return valid
    },

    validateStep3() {
      let check = true
      if (this.formData.micr == '') {
        this.micrErrors = ['This field is required']
        check = false
      }
      if (this.formData.accountType == '') {
        this.accountTypeErrors = ['This field is required']
        check = false
      }
      if (this.formData.ifsc == '' || !this.ifscRegx.test(this.formData.ifsc)) {
        if (this.formData.ifsc == '' && this.formData.ifsc.length == 0) {
          this.ifscErrors = ['This field is required']
          check = false
        } else if (!this.ifscRegx.test(this.formData.ifsc)) {
          this.ifscErrors = ['Invalid IFSC Code (note: first 4 digit albets next 7 digits alphanumeric)']
          check = false
        }
      }
      if (this.formData.accountNumber == '') {
        this.accountNumberErrors = ['This field is required']
        check = false
      }
      if (this.formData.bankName == '') {
        this.bankNameErrors = ['This field is required']
        check = false
      }
      if (this.formData.bankAddress == '') {
        this.bankAddressErrors = ['This field is required']
        check = false
      }
      return check
    },

    // navigate(direction: number) {
    //   const stepsAsNumbers = this.steps.map(Number)
    //   const currentIndex = stepsAsNumbers.indexOf(this.activeSlide)
    //   let newIndex = currentIndex + direction

    //   if (newIndex < 0) {
    //     newIndex = 0
    //   } else if (newIndex >= stepsAsNumbers.length) {
    //     newIndex = stepsAsNumbers.length - 1
    //   }

    //   const currentSlide = document.querySelector('.slide.active')
    //   const nextSlide = document.querySelector(`.slide:nth-child(${newIndex + 1})`)

    //   if (direction === 1) {
    //     // Next slide
    //     currentSlide?.classList.add('slide-next-out')
    //     nextSlide?.classList.remove('hidden')
    //     nextSlide?.classList.add('slide-next-in')
    //   } else {
    //     // Previous slide
    //     currentSlide?.classList.add('slide-prev-out')
    //     nextSlide?.classList.remove('hidden')
    //     nextSlide?.classList.add('slide-prev-in')
    //   }

    //   // Clean up animations and update active slide
    //   setTimeout(() => {
    //     currentSlide?.classList.remove('active', 'slide-next-out', 'slide-prev-out')
    //     currentSlide?.classList.add('hidden')
    //     nextSlide?.classList.remove('slide-next-in', 'slide-prev-in')
    //     nextSlide?.classList.add('active')
    //     this.activeSlide = stepsAsNumbers[newIndex]
    //   }, 500)

    //   if (direction === 1) {
    //     confetti({ particleCount: 300, spread: 180, origin: { y: 0.7 } })
    //   }
    // },
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
              this.adharResponse = response.data
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
    toggleQuestionCard() {
      debugger
      this.showQuestionCard = !this.showQuestionCard
    },

    handleQuestionClick(question) {
      // Handle different question types
      switch (question.action) {
        case 'upload':
          alert('To upload documents, click on the respective upload button and select your file.')
          break
        case 'formats':
          alert('We support PDF, JPG, and PNG file formats.')
          break
        case 'verify':
          alert('Documents are automatically verified when uploaded.')
          break
        case 'support':
          alert('Please contact our support team at support@example.com')
          break
      }
      this.showQuestionCard = false
    },

    submitQuestion() {
      if (this.customQuestion) {
        // Here you can implement the logic to handle custom questions
        // alert(`Thank you for your question: ${this.customQuestion}. Our team will get back to you soon.`)
        this.customQuestion = ''
        this.showQuestionCard = false
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
.dark-theme input:focus,
.dark-theme select:focus,
.dark-theme textarea:focus,
.dark-theme input:valid,
.dark-theme select:valid,
.dark-theme textarea:valid {
  outline: none;
  border: none;
  background-color: #312d4b;
  --tw-ring-color: none;
}

.dark-theme input:invalid,
.dark-theme select:invalid,
.dark-theme textarea:invalid {
  --tw-ring-color: none;
  background-color: #312d4b;
  outline: none;
  border: none; /* Light red for invalid inputs */
}

[type='text']:focus,
[type='number']:focus,
[type='date']:focus {
  --tw-ring-color: none;
}
// // Deep selector to override Vuetify's input styles
// :deep(.v-field) {
//   background-color: rgb(219, 45, 45) !important;
//   border: 1px solid #ccc !important;
//   border-radius: 4px !important;

//   .v-field__input {
//     padding: 8px 12px !important;
//     font-size: 16px !important;
//     line-height: 1.5 !important;
//     color: #333 !important;
//     background-color: rgb(219, 45, 45) !important;
//   }

//   .v-field__outline {
//     display: none !important;
//     background-color: rgb(219, 45, 45) !important;
//   }
// }

// /* Target the input container */
// :deep(.v-text-field) {
//   .v-input__control {
//     min-height: 44px !important;
//     background-color: rgb(219, 45, 45) !important;
//   }
// }
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
@keyframes slideOutToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* Slide animations for PREV */
@keyframes slideOutToRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Next transition classes */
.slide-next-out {
  animation: slideOutToLeft 0.5s forwards;
}

.slide-next-in {
  animation: slideInFromRight 0.5s forwards;
}

/* Prev transition classes */
.slide-prev-out {
  animation: slideOutToRight 0.5s forwards;
}

.slide-prev-in {
  animation: slideInFromLeft 0.5s forwards;
}

.hidden {
  display: none;
}
.slide-container {
  position: relative;
  height: 430px; /* Adjust as needed */
  overflow: hidden;
  /* Hide overflowing content */
}
.question-card {
  transition: all 0.3s ease;

  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s, transform 0.3s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
}

// Make sure the card appears above other elements
.relative {
  position: relative;
}
.v-btn.v-btn--variant-text {
  &:hover {
    background-color: rgba(var(--v-theme-primary), 0.05);
  }
}
</style>
