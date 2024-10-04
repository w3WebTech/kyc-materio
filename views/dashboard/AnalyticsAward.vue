<script setup lang="ts">
import trophy from '@images/misc/trophy.png'
import { userDataStore } from '~/stores/tableData'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()
const userStore = userDataStore()
let totalClient = ref(0)
onMounted(() => {
  const userId = userStore.userId || ''
  const password = userStore.password || ''
  if (userId == null || userId == '' || userId == undefined) {
    router.push('/login')
  }
  console.log(userId, password, 'password')
  fetchData()
})
const routeto = () => {
  router.push('/clientData')
}
const fetchData = async () => {
  try {
    const formData = new FormData()
    formData.append('authKey', '0a7cb27e52927eacabbb7ecc738b0fea50b3967945257c43a67eb753cb465bd0')

    const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerstocks-client-data.php', formData)
    totalClient.value = response.data.length
    console.log(response.data, 'response.data') // Ensure this logs the expected data structure
  } catch (err) {
    console.error('Error:', err)
  } finally {
  }
}
</script>

<template>
  <VCard class="position-relative">
    <VCardText>
      <div class="mb-2">
        <h5 class="text-h5">Clients! <span class="text-high-emphasis">🎉</span></h5>
        <!-- <div class="text-body-1">Best seller of the month</div> -->
      </div>
      <h4 class="text-h4 text-primary py-4">{{ totalClient }}</h4>
      <div class="text-body-1 mb-2">
        Total {{ totalClient }} Clients <span class="text-high-emphasis">😎</span> this year
      </div>
      <VBtn
        size="small"
        @click="routeto"
      >
        View Clients
      </VBtn>
    </VCardText>

    <!-- Trophy -->
    <VImg
      :src="trophy"
      class="trophy"
    />
  </VCard>
</template>

<style lang="scss">
.v-card .trophy {
  position: absolute;
  inline-size: 5.188rem;
  inset-block-end: 1.25rem;
  inset-inline-end: 1.25rem;
}
</style>
