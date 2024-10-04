<template>
  <div>
    <v-container class="w-100 h-600">
      <v-row no-gutters>
        <v-col
          cols="2"
          class="d-flex justify-center align-end"
        >
          <DateRangePicker @selecteddate="selectDate" />
        </v-col>
        <v-col
          cols="5"
          class="d-flex justify-center align-end"
        >
          <input
            v-model="search"
            placeholder="Search..."
            class="mt-1 block w-full px-3 mx-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
          />
        </v-col>
        <v-col
          cols="4"
          class="d-flex justify-end align-end mx-2"
        >
          <div class="hide_menu mt-5 mr-3">
            <v-btn
              @click="toggleDropdown"
              class="w-150 bg-logcolor mt-2"
            >
              Hide/Show Column
            </v-btn>
            <div
              v-if="isOpen"
              class="dr w-500 p-2 absolute right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="drop-menu my-2">
                <label
                  v-for="(visibility, key) in columnVisibility"
                  :key="key"
                  class="relative inline-flex items-center cursor-pointer py-1"
                >
                  <v-switch v-model="columnVisibility[key]" />
                  <span class="text-xs font-medium text-gray-900 px-2">
                    {{ formatColumnLabel(key) }}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <v-btn
            class="bg-logcolor"
            @click="exportDataToCsv"
            >Export CSV</v-btn
          >
        </v-col>
      </v-row>

      <div v-if="pending">Loading...</div>
      <div v-else>
        <v-row>
          <v-col cols="12 my-4">
            <v-data-table
              :headers="headers"
              :items="paginatedDesserts"
              :items-per-page="pagination.rowsPerPage"
              :page.sync="pagination.page"
              :total-items="filteredDesserts.length"
              :footer-props="{
                itemsPerPageOptions: [10, 25, 50, 100],
                showFirstLastPage: true,
                showCurrentPage: true,
              }"
              @update:items-per-page="updateItemsPerPage"
              @update:page="updatePage"
            >
              <!-- Row templates for each column -->
              <template v-slot:item.userCode="{ item }">
                <td v-if="columnVisibility.userCode">{{ item.userCode }}</td>
              </template>
              <template v-slot:item.userMobile="{ item }">
                <td v-if="columnVisibility.userMobile">{{ item.userMobile }}</td>
              </template>
              <template v-slot:item.from="{ item }">
                <td v-if="columnVisibility.from">{{ item.from }}</td>
              </template>
              <!-- Add more columns as needed -->
            </v-data-table>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      search: '',
      isOpen: false,
      pending: false,
      columnVisibility: {
        userCode: true,
        userMobile: true,
        from: true,
        templateName: true,
        sendDateTime: true,
        sendReqData: true,
        sendResponseData: true,
        msgStatus: true,
        StatusUpdatedTime: true,
        messageId: true,
        messageSentTime: true,
        SendWebHookData: true,
        messageDeliveredTime: true,
        DeliveredWebhookData: true,
        messageReadTime: true,
        readWebhookData: true,
        pskey: true,
        entryDate: true,
        entryTime: true,
      },
      desserts1: [],
      pagination: {
        page: 1,
        rowsPerPage: 10,
        sortBy: 'sendDateTime',
        descending: true,
      },
      startDate: '',
      endDate: '',
    }
  },
  computed: {
    filteredDesserts() {
      return this.desserts1.filter(item => {
        return Object.keys(item).some(key => {
          return item[key] && item[key].toString().toLowerCase().includes(this.search.toLowerCase())
        })
      })
    },
    paginatedDesserts() {
      const start = (this.pagination.page - 1) * this.pagination.rowsPerPage
      return this.filteredDesserts.slice(start, start + this.pagination.rowsPerPage)
    },
    headers() {
      return Object.keys(this.columnVisibility)
        .filter(key => this.columnVisibility[key])
        .map(key => ({
          text: this.formatColumnLabel(key),
          value: key,
          title: key,
        }))
    },
  },
  mounted() {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    this.startDate = this.formatDate(yesterday)
    const today = new Date()
    this.endDate = this.formatDate(today)
    this.fetchData()
  },
  methods: {
    selectDate([start, end]) {
      this.startDate = start
      this.endDate = end
      this.fetchData()
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    exportDataToCsv() {
      const data = this.filteredDesserts
      const csv = [Object.keys(data[0]).join(','), ...data.map(row => Object.values(row).join(','))]
      const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'whatsapp-log.csv'
      link.click()
      URL.revokeObjectURL(link.href)
    },
    fetchData() {
      this.pending = true
      if (this.startDate && this.endDate) {
        const formData = new FormData()
        formData.append('from', this.startDate)
        formData.append('to', this.endDate)
        formData.append('logType', 'WHATSAPP')
        formData.append('authKey', '198a3a05de29c9cc6682116efb2fcef84a5e1cd8b91c6bcbc75ca38177ca96b7')

        axios
          .post('https://g1.gwcindia.in/powerstocks/log-wa-email.php', formData)
          .then(response => {
            this.desserts1 = response.data.log // Update this.desserts with the response data
            console.log(response.data, 'response.data', this.desserts1) // Should print the correct data
            this.pending = false
          })
          .catch(error => {
            console.error('Error:', error)
            this.pending = false
          })
      }
    },
    formatDate(date) {
      return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`
    },
    formatColumnLabel(key) {
      return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
    },
    updateItemsPerPage(value) {
      this.pagination.rowsPerPage = value
      this.pagination.page = 1 // Reset to first page when changing items per page
    },
    updatePage(value) {
      this.pagination.page = value
    },
  },
}
</script>

<style scoped>
/* Add any additional styling needed */
</style>
