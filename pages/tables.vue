
<script setup>
import { computed, ref } from 'vue'
import axios from 'axios'

const currentTab = ref(0)
console.log(currentTab.value, 'currentT')
const search = ref('')
const headers = [
  { key: 'clientId', title: 'Client Code' },
  { key: 'stockSymbol', title: 'Stock' },
  { key: 'buySellType', title: 'Type' },
  { key: 'quantity', title: 'Quantity' },
  { key: 'date', title: 'Date' },
  { key: 'plan', title: 'Plan' },
  { key: 'orderView', title: 'Order-View' },
]
const startDate = ref(new Date().toISOString().substr(0, 10)) // Set start date to current date
const endDate = ref('')

const productdetails = ref([])
const pending = ref(false)

function formatDateToISO(date) {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const dd = String(date.getDate()).padStart(2, '0') // Pad single digit days

  return `${yyyy}-${mm}-${dd}`
}

const selectdate = ([start, end]) => {
  startDate.value = start
  endDate.value = end
  console.log('Selected dates final;:', startDate.value, endDate.value)
  fetchData()
}

const fetchData = async () => {
  pending.value = true

  try {
    const data = {
      from: startDate.value,
      to: endDate.value,
    }

    const response = await axios.post('https://g1.gwcindia.in/powerstocks/ps-view.php', data)

    // Debug after successful response
    console.log(response.data, 'response.data') // Ensure this logs the expected data structure
    productdetails.value = response.data
  } catch (err) {
    console.error('Error:', err)
  } finally {
    pending.value = false
  }
}

fetchData()
watch([startDate, endDate], fetchData, { deep: true })
const dateRange = ref('')
const filteredDesserts = computed(() => {
  console.log('Filtered Desserts Computation Started')
  const query = search.value.toLowerCase()
  const filtered = productdetails.value.filter(item => {
    const searchText = Object.values(item.orderData) // Assuming orderData contains searchable fields
      .join(' ') // Combine all searchable fields into a single string
      .toLowerCase()
    return searchText.includes(query)
  })
  return filtered
})
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

const selectedItem = ref(null)

const exportDataToCsv = () => {
  if (!productdetails.value.length) {
    return
  }

  const rows = [
    ['Client Code', 'Stock Symbol', 'Type', 'Quantity', 'Date', 'plan'],
    ...productdetails.value.map(item => [
      item.orderData.clientId,
      item.orderData.stockSymbol,
      item.orderData.buySellType,
      item.orderData.quantity,
      item.orderData.date,
      item.orderData.plan,
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

const isDrawerOpen = ref(false)
const isOpen = ref(false)
const columnVisibility = ref({
  clientId: true,
  stockSymbol: true,
  buySellType: true,
  quantity: true,
  date: true,
  plan: true,
  view_user: true,
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const toggleColumnVisibility = column => {
  columnVisibility.value[column] = !columnVisibility.value[column]
}

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
<template>
  <VCard>
    <VTabs
      v-model:active="currentTab"
      class="v-tabs-pill"
    >
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
      <VTab>Tab Four</VTab>
      <VTab>Tab Five</VTab>
    </VTabs>

    <VWindow
      v-model:active="currentTab"
      class="mt-5"
    >
      <VWindowItem
        v-for="item in 5"
        :key="item"
      >
        <VRow no-gutters>
          <VCol
            cols="3"
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
            cols="4"
            class="d-flex justify-end justify-space-evenly align-end"
          >
            <div class="hide_menu mt-5">
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
                class="dr w-500 p-2 origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div class="drop-menu my-2">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <div class="demo-space-x">
                      <VSwitch v-model="columnVisibility.clientId" />
                    </div>

                    <span class="text-xs font-medium text-gray-900">ClientCode</span>
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <div class="demo-space-x">
                      <VSwitch v-model="columnVisibility.stockSymbol" />
                    </div>

                    <span class="text-xs font-medium text-gray-900">StockSymbol</span>
                  </label>

                  <label class="relative inline-flex items-center cursor-pointer">
                    <div class="demo-space-x">
                      <VSwitch v-model="columnVisibility.buySellType" />
                    </div>
                    <span class="text-xs font-medium text-gray-900">Buy/SellType</span>
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <VSwitch v-model="columnVisibility.quantity" />
                    <input
                      class="cols whitespace-nowrap"
                      type="checkbox"
                      id="status"
                    />
                    <span class="text-xs font-medium text-gray-900">Quantity</span>
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <div class="demo-space-x">
                      <VSwitch v-model="columnVisibility.date" />
                    </div>
                    <span class="text-xs font-medium text-gray-900">Date</span>
                  </label>
                  <br />
                  <label class="relative inline-flex items-center cursor-pointer">
                    <div class="demo-space-x">
                      <VSwitch v-model="columnVisibility.plan" />
                    </div>
                    <span class="text-xs font-medium text-gray-900">Plan</span>
                  </label>
                  <label class="relative inline-flex items-center cursor-pointer">
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
                :headers="tableHeaders"
                :items="filteredDesserts"
                item-key="clientId"
              >
                <template v-slot:item="{ item }">
                  <tr class="">
                    <td v-if="columnVisibility.clientId">
                      <p class="mt-4">{{ item.orderData.ClientId }}</p>
                    </td>
                    <td v-if="columnVisibility.stockSymbol">
                      <p class="mt-4">{{ item.orderData.StockSymbol }}</p>
                    </td>
                    <td v-if="columnVisibility.buySellType">
                      <p class="mt-4">{{ item.orderData.BuySell }}</p>
                    </td>
                    <td v-if="columnVisibility.quantity">
                      <p class="mt-4">{{ item.orderData.Quantity }}</p>
                    </td>
                    <td v-if="columnVisibility.date">
                      <p class="mt-4">{{ item.orderData.date }}</p>
                    </td>
                    <td v-if="columnVisibility.plan">
                      <p class="mt-4">{{ item.orderData.plan }}</p>
                    </td>
                    <td v-if="columnVisibility.view_user">
                      <v-btn
                        class="bg-logcolor"
                        @click="isDrawerOpen = true"
                        >View</v-btn
                      >
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
          v-if="isDrawerOpen == true"
        >
          <VCard>
            <v-card-text class="d-flex justify-end align-center mt-6">
              <v-btn
                class="bg-logcolor"
                @click="canva_close"
                >X</v-btn
              >
            </v-card-text>
            <div class="container mx-auto p-4">
              <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex justify-between items-center mb-4">
                  <div>
                    <p class="text-gray-600 text-sm">Name: Ramanathan V</p>
                    <p class="text-gray-600 text-sm">M: Ramanathan V</p>
                  </div>
                  <div>
                    <p class="text-gray-600 text-sm">PAN: AU0XXXXXXB</p>
                    <p class="text-gray-600 text-sm">E: Ramanathan V</p>
                  </div>
                  <div>
                    <p class="text-gray-600 text-sm">Branch: AU0XXXXXXB</p>
                    <p class="text-gray-600 text-sm">Branch Email: Ramanathan V</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <!-- <v-card-title class="d-flex justify-center pa-6">
            <h5 class="font-weight-bold">{{ selectedItem?.orderData.ClientId }}</h5>
          </v-card-title>
          <v-card-text class="d-flex justify-center">
            <v-img :src="selectedItem?.orderData.image"></v-img>
          </v-card-text> -->
            <VTabs v-model="currentTab">
              <VTab>Calls</VTab>
              <VTab>Communication</VTab>
              <VTab>Confirmation</VTab>
              <VTab>Existing Order/Payment Status</VTab>
              <VTab>Payment / Order Status</VTab>
            </VTabs>

            <VWindow
              v-model="currentTab"
              class="mt-5"
            >
              <VWindowItem class="h-screen">
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
                        v-for="item in desserts"
                        :key="item.dessert"
                      >
                        <td>
                          {{ item.dessert }}
                        </td>
                        <td>
                          {{ item.calories }}
                        </td>
                        <td>
                          {{ item.fat }}
                        </td>
                        <td>
                          {{ item.carbs }}
                        </td>
                      </tr>
                    </tbody>
                  </VTable>
                </div>
              </VWindowItem>
              <VWindowItem class="h-screen">
                <div class="container mx-auto p-4">
                  <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Power Stocks to Email:</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">1, Sent an email to Customer mail id</p>
                      <p class="text-gray-600 text-sm">erffxxxxxxxxx@gxxx.com 23-08-2024 at 15:22:22</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">2, Delivered email</p>
                      <p class="text-gray-600 text-sm">erffxxxxxxxxx@gxxx.com 23-08-2024 at 15:22:32</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Power Stocks to Whatsapp:</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">1, Sent an whatsapp to Customer mobile no</p>
                      <p class="text-gray-600 text-sm">9xxxx xxx32 23-08-2024 at 15:22:22</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">2, Delivered Whatsapp to Customer mobile no</p>
                      <p class="text-gray-600 text-sm">9xxxx xxx32 23-08-2024 at 15:22:23</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">COMMUNICATION</p>
                    </div>
                  </div>
                </div>
              </VWindowItem>
              <VWindowItem class="h-screen">
                <div class="container mx-auto p-4">
                  <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Confirmed by Customer mail id at 23-08-2024at 15:22:22</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Confirmed by Customer Whatsapp at 23-08-2024at 15:22:22</p>
                    </div>
                  </div>
                </div>
              </VWindowItem>
              <VWindowItem class="h-screen">
                <div class="container mx-auto p-4">
                  <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Existing Order Placed at 23-08-2024at 15:22:22</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Reason:</p>
                    </div>
                  </div>
                </div>
              </VWindowItem>
              <VWindowItem class="h-screen">
                <div class="container mx-auto p-4">
                  <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Order Placed at 23-08-2024at 15:22:22</p>
                    </div>
                    <div class="mb-4">
                      <p class="text-gray-600 text-sm">Reason:</p>
                    </div>
                  </div>
                </div>
              </VWindowItem>
            </VWindow>
          </VCard>
        </VNavigationDrawer>
      </VWindowItem>
    </VWindow>
     
  </VCard>
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
  width: 30% !important;
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






