<template>
  <VContainer class="w-100 h-600">
    <div>
      <VRow no-gutters>
        <VCol
          cols="2"
          class="d-flex justify-center align-end"
        >
          <DateRangePicker @selecteddate="selectdate" />
        </VCol>
        <VCol
          cols="5"
          class="d-flex justify-center align-end"
        >
          <input
            v-model="search"
            placeholder="Search..."
            class="mt-1 block w-full px-3 mx-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
          />
        </VCol>
        <VCol
          cols="3"
          class="d-flex justify-end justify-space-evenly align-end mx-2"
        >
          <div class="hide_menu mt-5 mr-3">
            <div>
              <v-btn
                @click="toggleDropdown"
                class="w-150 bg-logcolor mt-2"
              >
                Hide/Show Column
              </v-btn>
            </div>
            <!-- <div class="demo-space-x pb-4">
              <VSwitch v-model="isOpen" />
            </div> -->
            <div
              v-if="isOpen"
              class="dr w-500 p-2 origin-top-right absolute right-70 mt-2 bg-white rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div class="drop-menu my-2">
                <label class="relative inline-flex items-center cursor-pointer py-2">
                  <div class="demo-space-x">
                    <VSwitch v-model="columnVisibility.ClientId" />
                  </div>

                  <span class="text-xs font-medium text-gray-900">clientId</span>
                </label>
                <br />

                <label class="relative inline-flex items-center cursor-pointer py-2">
                  <div class="demo-space-x">
                    <VSwitch v-model="columnVisibility.clientName" />
                  </div>
                  <span class="text-xs font-medium text-gray-900">clientName</span>
                </label>
                <br />
                <label class="relative inline-flex items-center cursor-pointer py-2">
                  <VSwitch v-model="columnVisibility.branchCode" />
                  <input
                    class="cols whitespace-nowrap"
                    type="checkbox"
                    id="status"
                  />
                  <span class="text-xs font-medium text-gray-900">branchCode</span>
                </label>
                <br />
                <label class="relative inline-flex items-center cursor-pointer py-2">
                  <div class="demo-space-x">
                    <VSwitch v-model="columnVisibility.receivedDate" />
                  </div>
                  <span class="text-xs font-medium text-gray-900">receivedDate</span>
                </label>
                <br />
                <label class="relative inline-flex items-center cursor-pointer py-2">
                  <div class="demo-space-x">
                    <VSwitch v-model="columnVisibility.receivedTime" />
                  </div>
                  <span class="text-xs font-medium text-gray-900">receivedTime</span>
                </label>
                <br />
                <label class="relative inline-flex items-center cursor-pointer py-2">
                  <div class="demo-space-x">
                    <VSwitch v-model="columnVisibility.plan" />
                  </div>
                  <span class="text-xs font-medium text-gray-900">plan</span>
                </label>
                <br />
                <label class="relative inline-flex items-center cursor-pointer py-2">
                  <div class="demo-space-x">
                    <VSwitch v-model="columnVisibility.view_user" />
                  </div>
                  <span class="text-xs font-medium text-gray-900">ViewUser</span>
                </label>
              </div>
            </div>
          </div>

          <v-btn
            class="bg-logcolor"
            @click="exportDataToCsv"
            >Export CSV</v-btn
          >
        </VCol>
      </VRow>

      <div v-if="pending">Loading...</div>
      <div v-else>
        <!-- Display data table -->
        <VRow>
          <VCol cols="12 my-4">
            <v-data-table
              :headers="visibleTableHeaders"
              :items="filteredDesserts"
              item-key="ClientId"
            >
              <template v-slot:item="{ item }">
                <tr class="">
                  <!-- <td v-if="columnVisibility.clientId">
                    <p class="mt-4">{{ item.stockList.ClientId }}</p>
                  </td> -->
                  <td v-if="columnVisibility.ClientId">
                    <p class="mt-4">{{ item.ClientId }}</p>
                  </td>
                  <td v-if="columnVisibility.clientName">
                    <p class="mt-4">{{ item.clientName }}</p>
                  </td>
                  <td v-if="columnVisibility.branchCode">
                    <p class="mt-4">{{ item.branchCode }}</p>
                  </td>
                  <td v-if="columnVisibility.receivedDate">
                    <p class="mt-4">{{ item.receivedDate }}</p>
                  </td>
                  <td v-if="columnVisibility.receivedTime">
                    <p class="mt-4">{{ item.receivedTime }}</p>
                  </td>
                  <td v-if="columnVisibility.plan">
                    <p class="mt-4">{{ item.plan }}</p>
                  </td>
                  <td v-if="columnVisibility.view_user">
                    <v-btn
                      class="bg-logcolor w-2 px-2"
                      @click="
                        Routeto(
                          item.ClientId,
                          item.bulkReqId,
                          item.clientName,
                          item.emailId,
                          item.panNo,
                          item.branchCode,
                          item.mobileNo,
                          item.emailId,
                        )
                      "
                    >
                      <VIcon
                        icon="ri-information-line"
                        color="white"
                        size="22"
                      />
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </VCol>
        </VRow>
      </div>

      <VNavigationDrawer
        v-model="isDrawerOpen"
        right
        temporary
        v-if="isDrawerOpen == true"
      >
        <div class="container mx-auto p-4">
          <div class="bg-white p-6">
            <div class="flex justify-between items-center mb-4">
              <div>
                <p class="text-gray-600 text-sm">
                  <span class="font-semibold">NAME:</span> {{ selectedUser.clientName }}
                </p>
                <p class="text-gray-600 text-sm"><span class="font-semibold">M:</span> {{ selectedUser.mobileNo }}</p>
                <p class="text-gray-600 text-sm">
                  <span class="font-semibold">CLIENTCODE: </span>{{ selectedUser.clientCode }}
                </p>
              </div>
              <div class="pb-10">
                <p class="text-gray-600 text-sm"><span class="font-semibold">PAN:</span>{{ selectedUser.panNo }}</p>
                <p class="text-gray-600 text-sm"><span class="font-semibold">E: </span>{{ selectedUser.emailId }}</p>
              </div>
              <div class="pb-10">
                <p class="text-gray-600 text-sm">
                  <span class="font-semibold">BRANCH:</span
                  >{{ selectedUser.branchCode ? selectedUser.branchCode : 'Not Available' }}
                </p>
                <p class="text-gray-600 text-sm">
                  <span class="font-semibold">BRANCH EMAIL:</span>{{ selectedUser.email }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <!-- <v-card-title class="d-flex justify-center pa-6">
            <h5 class="font-weight-bold">{{ selectedItem?.stockList.ClientId }}</h5>
          </v-card-title>
          <v-card-text class="d-flex justify-center">
            <v-img :src="selectedItem?.stockList.image"></v-img>
          </v-card-text> -->
        <VTabs v-model="currentTab">
          <VTab class="text-sm">Calls</VTab>
          <VTab class="text-sm">Communication</VTab>
          <VTab class="text-sm">Confirmation</VTab>
          <VTab class="text-sm">ExistingOrder/PaymentStatus</VTab>
          <VTab class="text-sm">Payment/OrderStatus</VTab>
        </VTabs>

        <VWindow
          v-model="currentTab"
          class="mt-5 max-h-screen"
        >
          <VWindowItem class="h-full overflow-y-auto">
            <div class="p-5">
              <VTable class="border">
                <thead>
                  <tr>
                    <th class="text-uppercase">Stock Symbol</th>
                    <th class="text-uppercase">Quantity</th>
                    <th class="text-uppercase">Buy / Sell</th>
                    <th class="text-uppercase">Plan</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="item in info.stockList"
                    :key="item.stockName"
                  >
                    <td>
                      {{ item.stockName }}
                    </td>
                    <td>
                      {{ item.quantity }}
                    </td>
                    <td>
                      {{ item.buySell }}
                    </td>
                    <td>
                      {{ item.plan }}
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>
          </VWindowItem>
          <VWindowItem class="h-full overflow-y-auto">
            <div class="container mx-auto p-4">
              <div class="bg-white p-6">
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">Power Stocks to Email:</p>
                </div>
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">1, Sent an email to Customer mail id</p>
                  <p class="text-gray-600 text-sm">
                    {{ info.recommentation_notify.emailNotifyLog.noteDEmail }}
                    {{ info.recommentation_notify.emailNotifyLog.noteDEmailSub }}
                    {{ info.recommentation_notify.emailNotifyLog.noteDEmailSentTime }}
                  </p>
                </div>
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">2, Delivered email</p>
                  <p class="text-gray-600 text-sm">
                    {{ info.recommentation_notify.emailNotifyLog.noteDEmail }}
                    {{ info.recommentation_notify.emailNotifyLog.noteDEmailSub }}
                    {{ info.recommentation_notify.emailNotifyLog.noteDEmailDelTime }}
                  </p>
                </div>
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">Power Stocks to Whatsapp:</p>
                </div>
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">1, Sent an whatsapp to Customer mobile no</p>
                  <p class="text-gray-600 text-sm">
                    {{
                      info.recommentation_notify.waNotifyLog.noteWAmessageSentTime
                        ? info.recommentation_notify.waNotifyLog.noteWAmessageSentTime
                        : 'No Data Available'
                    }}
                  </p>
                </div>
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">2, Delivered Whatsapp to Customer mobile no</p>
                  <p class="text-gray-600 text-sm">
                    {{
                      info.recommentation_notify.waNotifyLog.noteWAmessageDeliveredTime
                        ? info.recommentation_notify.waNotifyLog.noteWAmessageDeliveredTime
                        : 'No Data Available'
                    }}
                  </p>
                </div>
              </div>
            </div>
          </VWindowItem>
          <VWindowItem class="h-full overflow-y-auto">
            <div class="container mx-auto p-4">
              <div class="bg-white p-6">
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">
                    Confirmed by Customer {{ info.confirm_status.confirmationFrom }} at
                    {{ info.confirm_status.confirmStatusDateTime }}
                  </p>
                </div>
              </div>
            </div>
          </VWindowItem>
          <VWindowItem class="h-full overflow-y-auto">
            <div class="container mx-auto p-4">
              <div class="bg-white p-6">
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">
                    Existing Order Placed at {{ info.order_payin_notify.payinNotifyDateTime }}
                  </p>
                </div>
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">Reason:</p>
                </div>
              </div>
            </div>
          </VWindowItem>
          <VWindowItem class="h-full overflow-y-auto">
            <div class="container mx-auto p-4">
              <div class="bg-white p-6">
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">
                    Order Placed at{{ info.placeOrder_payin_notify.payinNotifyDateTime }}
                  </p>
                </div>
                <div class="mb-4">
                  <p class="text-gray-600 text-sm">Reason:</p>
                </div>
              </div>
            </div>
          </VWindowItem>
        </VWindow>
      </VNavigationDrawer>
    </div>
  </VContainer>
</template>
<style lang="scss" scoped>
.v-btn {
  padding-left: 40px !important;
  padding-right: 40px !important;
}
.text-black {
  color: black;
}

.text-gray {
  color: gray;
}

.v-navigation-drawer {
  /* Set the default position */
  right: 0 !important;
  left: auto !important;
  position: fixed !important;
  /* Optional: adjust width as needed */
  width: 70% !important;
  transition: transform 2s ease-in-out;
  transform: translateX(100%);
}
.v-navigation-drawer.v-navigation-drawer--open {
  /* When the drawer is open, move it to the left */
  transform: translateX(0);
}

.hide_menu {
  position: relative;
}

.hide_menu .dr {
  position: absolute;
  z-index: 10;
}

.cursor-pointer {
  cursor: pointer;
}
</style>

<script setup>
import { computed, ref } from 'vue'
import axios from 'axios'
import { onMounted } from 'vue'
import { userDataStore } from '~/stores/tableData'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = userDataStore()
const currentTab = ref(0)
console.log(currentTab.value, 'currentT')
const search = ref('')
const headers = [
  { key: 'ClientId', title: 'ClientId' },
  { key: 'clientName', title: 'ClientName' },
  { key: 'branchCode', title: 'BranchCode' },
  { key: 'receivedDate', title: 'ReceivedDate' },
  { key: 'receivedTime', title: 'ReceivedTime' },
  { key: 'plan', title: 'Plan' },
  { key: 'view_user', title: 'View' },
]
const today = new Date()
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000) // subtract 1 day from today

const startDate = ref(yesterday.toISOString().substr(0, 10))
const endDate = ref(today.toISOString().substr(0, 10))

const productdetails = ref([])
const selectedUser = ref({
  useName: '',
  email: '',
  panNo: '',
  branchCode: '',
  mobileNo: '',
  emailId: '',
  clientCode: '',
})
const pending = ref(false)
const info = ref({})
function formatDateToISO(date) {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const dd = String(date.getDate()).padStart(2, '0') // Pad single digit days

  return `${yyyy}-${mm}-${dd}`
}
const Routeto = (clientCode, bulkRedId, clientName, email, panNo, branchCode, mobileNo, emailId) => {
  isDrawerOpen.value = true
  detailedView(clientCode, bulkRedId)
  selectedUser.value.email = email
  selectedUser.value.clientName = clientName
  selectedUser.value.panNo = panNo
  selectedUser.value.branchCode = branchCode
  selectedUser.value.mobileNo = mobileNo
  selectedUser.value.emailId = emailId
  selectedUser.value.clientCode = clientCode
  console.log('ff')
  console.log(clientCode, selectedUser, 'reqdata')
}
const selectdate = ([start, end]) => {
  startDate.value = start
  endDate.value = end
  console.log('Selected dates final;:', startDate.value, endDate.value)
  fetchData()
}
const visibleTableHeaders = computed(() => {
  return tableHeaders.filter(header => columnVisibility.value[header.value])
})
const toggleColumnVisibility = column => {
  columnVisibility.value[column] = !columnVisibility.value[column]
  visibleTableHeaders.value = tableHeaders.filter(header => columnVisibility.value[header.value])
}
const fetchData = async () => {
  pending.value = true
  if (startDate.value && endDate.value) {
    try {
      const formData = new FormData()

      formData.append('from', startDate.value)
      formData.append('to', endDate.value)

      const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerStocksView-v2.php', formData)

      console.log(response.data, 'response.data') // Ensure this logs the expected data structure
      productdetails.value = response.data
    } catch (err) {
      console.error('Error:', err)
    } finally {
      pending.value = false
    }
  }
}
const detailedView = async (clientCode, bulkRedId) => {
  try {
    const data = {
      clientCode: clientCode,
      requestId: bulkRedId,
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

    const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerStocksView-single.php', params, config)
    info.value = response.data
    // Debug after successful response
    console.log(response.data, 'response.data11')
  } catch (err) {
    console.error('Error:', err)
  } finally {
  }
}
onMounted(() => {
  const userId = userStore.userId || ''
  const password = userStore.password || ''

  console.log(userId, password, 'password')
  fetchData()
})

watch([startDate, endDate], fetchData, { deep: true })
const dateRange = ref('')
const filteredDesserts = computed(() => {
  if (!productdetails.value || !Array.isArray(productdetails.value)) {
    return []
  }

  const query = search.value.toLowerCase()
  const filtered = productdetails.value.filter(item => {
    const searchText = Object.values(item) // Assuming item contains searchable fields
      .join(' ') // Combine all searchable fields into a single string
      .toLowerCase()
    return searchText.includes(query)
  })
  return filtered
})

const selectedItem = ref(null)

const exportDataToCsv = () => {
  if (!productdetails.value || !productdetails.value.length) {
    return
  }

  const rows = [
    ['Client Code', 'Client Name', 'Branch Code', 'Received date', 'Received time', 'plan', 'view'],
    ...productdetails.value.map(item => [
      item.ClientId,
      item.clientName,
      item.branchCode,
      item.receivedDate,
      item.receivedTime,
      item.plan,
    ]),
  ]

  const csvContent = 'data:text/csv;charset=utf-8,' + rows.map(row => row.join(',')).join('\n')

  const link = document.createElement('a')
  link.setAttribute('href', encodeURI(csvContent))
  link.setAttribute('download', 'productdetails_data.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
const desserts = [
  {
    dessert: 'HDFCBANK-EQ',
    calories: 1,
    fat: 'BUY',
    carbs: 'PLAN12',
  },
  {
    dessert: 'HDFCBANK-EQ',
    calories: 1,
    fat: 'BUY',
    carbs: 'PLAN12',
  },
  {
    dessert: 'HDFCBANK-EQ',
    calories: 1,
    fat: 'BUY',
    carbs: 'PLAN12',
  },
  {
    dessert: 'HDFCBANK-EQ',
    calories: 1,
    fat: 'BUY',
    carbs: 'PLAN12',
  },
  {
    dessert: 'HDFCBANK-EQ',
    calories: 1,
    fat: 'BUY',
    carbs: 'PLAN12',
  },
  {
    dessert: 'HDFCBANK-EQ',
    calories: 1,
    fat: 'BUY',
    carbs: 'PLAN12',
  },
  {
    dessert: 'HDFCBANK-EQ',
    calories: 1,
    fat: 'BUY',
    carbs: 'PLAN12',
  },
]
let isDrawerOpen = ref(false)
const isOpen = ref(false)
const columnVisibility = ref({
  ClientId: true,
  clientName: true,
  branchCode: true,
  receivedDate: true,
  receivedTime: true,
  plan: true,
  view_user: true,
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// const toggleColumnVisibility = column => {
//   columnVisibility.value[column] = !columnVisibility.value[column]
// }

const tableHeaders = headers.map(header => ({
  ...header,
  text: header.title,
  value: header.key,
  sortable: true,
  align: 'start',
  class: 'cursor-pointer',
  width: 'auto',
  'data-id': header.key,
  click: () => toggleColumnVisibility(header.key),
}))
</script>


