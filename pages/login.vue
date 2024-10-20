<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <v-img
              :width="207"
              aspect-ratio="16/9"
              cover
              src="https://powerstocks.gwcindia.in/Img/Power%20Stocks%20Logo%20Final%20Feb%202024%201.jpg"
            ></v-img>
          </div>
        </template>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">Welcome to Powerstocks! 👋🏻</h5>
        <p class="mb-0">Please sign-in to your account and start the adventure</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <!-- <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                >
                  Forgot Password?
                </a> -->
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
                :disabled="!isValidForm"
                @click="handleLogin"
              >
                Login
              </VBtn>
            </VCol>
            <VCol cols="12">
              <div
                block
                type="TEXT"
                class="py-2 border border-[#92b9b9] text-black flex justify-center rounded-md"
              >
                IP Address : {{ userIp }}
              </div>
            </VCol>

            <!-- create account -->
            <!-- <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <NuxtLink
                class="text-primary ms-2"
                to="/register"
              >
                Create an account
              </NuxtLink>
            </VCol> -->

            <!-- <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol> -->

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <!-- <AuthProvider /> -->
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover"
    />
    <VImg
      class="auth-footer-start-tree"
      :src="authV1Tree"
      :width="250"
      style="position: absolute; top: 50%; left: 0; transform: translateY(-50%)"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree"
      :width="350"
      style="position: absolute; top: 50%; right: 0; transform: translateY(-50%)"
    />
  </div>
</template>
<style lang="scss" >
@use '@core/scss/pages/page-auth.scss';
</style>
<script setup lang="ts">
import { useTheme } from 'vuetify'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import logo from '@images/logo.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import { userDataStore } from '~/stores/tableData'
const userStore = userDataStore()
const router = useRouter()
let allowedIps = ref([])
let userIp = ref('')
let userIdArray = ref([])
const isValidEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

const isValidPassword = (password: string) => {
  return password.length === 6
}

const isValidForm = computed(() => {
  return isValidEmail(form.value.email) && isValidPassword(form.value.password)
})
onMounted(async () => {
  const response = await axios.get('https://api.ipify.org?format=json')
  userIp.value = response.data.ip
  console.log(userIp.value, 'userIp')
})
const handleLogin = async () => {
  debugger
  const response = await axios.get('https://api.ipify.org?format=json')
  console.log(response.data.ip, response.data, 'response.data.ip')
  const clientIp = response.data.ip
  if (allowedIps.includes(clientIp)) {
    const enteredEmail = form.value.email
    const enteredPassword = form.value.password

    const foundUser = userIdArray.find(user => user.eMail === enteredEmail && user.passWord === enteredPassword)

    if (foundUser) {
      userStore.setUser(enteredEmail, enteredPassword)

      router.push('/tableData')
    } else {
      alert('Invalid email or password')
    }
  } else {
    alert('Access denied. Your IP address is not allowed.')
  }
}
const getIp = async () => {
  try {
    const response = await axios.get('https://g1.gwcindia.in/powerstocks/ipadress.php')
    allowedIps = response.data
    // Debug after successful response
    console.log(response.data, 'response.data') // Ensure this logs the expected data structure
  } catch (err) {
    console.error('Error:', err)
  } finally {
  }
}
const getId = async () => {
  try {
    const response = await axios.get('https://g1.gwcindia.in/powerstocks/userId.php')
    userIdArray = response.data
    // Debug after successful response
    console.log(response.data, 'response.data.id') // Ensure this logs the expected data structure
  } catch (err) {
    console.error('Error:', err)
  } finally {
  }
}
getIp()
getId()
const form = ref({
  email: '',
  password: '',
  remember: false,
})

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)

definePageMeta({ layout: 'blank' })
</script>
