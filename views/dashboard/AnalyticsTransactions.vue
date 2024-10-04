<script setup lang="ts">
import { userDataStore } from '~/stores/tableData'
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()
const userStore = userDataStore()
let totalClient = ref(0)
let totalOrder = ref(0)
let progressdata = ref(0)
const statistics = computed(() => [
  {
    title: 'Calls Sent',
    stats: progressdata.value.toString(),
    icon: 'ri-phone-line',
    color: 'primary',
  },
  {
    title: 'Calls Confirmed',
    stats: totalOrder.value.toString(),
    icon: 'ri-group-line',
    color: 'success',
  },
  {
    title: 'Order Placed',
    stats: '0',
    icon: 'ri-shopping-cart-2-line',
    color: 'warning',
  },
  {
    title: 'Payin',
    stats: '0',
    icon: 'ri-money-dollar-circle-line',
    color: 'info',
  },
])

onMounted(() => {
  const userId = userStore.userId || ''
  const password = userStore.password || ''
  if (userId == null || userId == '' || userId == undefined) {
    router.push('/login')
  }
  console.log(userId, password, 'password')
  fetchData()
  placeOrderData()
  progressData()
})
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
const today = new Date()
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000) // subtract 1 day from today

const startDate = ref(yesterday.toISOString().substr(0, 10))
const endDate = ref(today.toISOString().substr(0, 10))
const placeOrderData = async () => {
  if (startDate.value && endDate.value) {
    const data = {
      from: startDate.value,
      to: endDate.value,
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

    await axios
      .post('https://g1.gwcindia.in/powerstocks/powerStocksView-v2.php?confirmed', params, config)
      .then(response => {
        console.log(response.data, 'response.data')
        totalOrder.value = response.data.length
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
}
const progressData = async () => {
  if (startDate.value && endDate.value) {
    try {
      const formData = new FormData()

      formData.append('from', startDate.value)
      formData.append('to', endDate.value)

      const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerStocksView-v2.php', formData)
      progressdata.value = response.data.length
      console.log(response.data, 'response.data') // Ensure this logs the expected data structure
    } catch (err) {
      console.error('Error:', err)
    } finally {
    }
  }
}
</script>

<template>
  <VCard title="Today Statistics">
    <template #subtitle>
      <p class="text-body-1 mb-0">
        <span class="d-inline-block font-weight-medium text-high-emphasis">Empowering Your Financial Future</span>
        <span class="text-high-emphasis">😎</span>
      </p>
    </template>

    <template #append>
      <IconBtn class="mt-n5">
        <VIcon
          color="high-emphasis"
          icon="ri-more-2-line"
        />
      </IconBtn>
    </template>

    <VCardText class="pt-10">
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="12"
          sm="6"
          md="3"
        >
          <div class="d-flex align-center gap-x-3">
            <VAvatar
              :color="item.color"
              rounded
              size="40"
              class="elevation-2"
            >
              <VIcon
                size="24"
                :icon="item.icon"
              />
            </VAvatar>

            <div class="d-flex flex-column">
              <div class="text-body-1 whitespace-nowrap pr-3">
                {{ item.title }}
              </div>
              <h5 class="text-h5">
                {{ item.stats }}
              </h5>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
