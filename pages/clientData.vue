<template>
  <div>
    <VContainer class="w-100 h-600">
      <div>
        <VRow no-gutters>
          <VCol
            cols="5"
            class="d-flex justify-center align-end"
          ></VCol>
          <VCol
            cols="6"
            class="d-flex justify-center align-end"
          >
            <input
              v-model="search"
              placeholder="Search..."
              class="mt-1 block w-full px-3 mx-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
          </VCol>
          <VCol
            cols="1"
            class="d-flex justify-end justify-space-evenly align-end"
          >
            <v-btn
              class="ml-2"
              @click="isDrawerOpen = true"
            >
              <VIcon
                icon="ri-user-add-fill"
                color="red"
                size="22"
            /></v-btn>
          </VCol>
        </VRow>

        <div>
          <!-- Display data table -->
          <VRow>
            <VCol cols="12 my-4">
              <VTable>
                <thead>
                  <tr>
                    <th class="text-uppercase">ClientCode</th>
                    <th class="text-uppercase">BranchCode</th>
                    <th class="text-uppercase">ClientEmail</th>
                    <!-- Add this line -->
                    <th class="text-uppercase">ClientMobileNo</th>
                    <th class="text-uppercase">BranchEmail</th>
                    <th class="text-uppercase">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="isLoading">
                    <td>
                      <div class="animate-pulse">
                        <div class="h-8 bg-gray-200 mt-3 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                      </div>
                    </td>
                    <td>
                      <div class="animate-pulse">
                        <div class="h-8 bg-gray-200 mt-3 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                      </div>
                    </td>
                    <td>
                      <div class="animate-pulse">
                        <div class="h-8 bg-gray-200 mt-3 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                      </div>
                    </td>
                    <td>
                      <div class="animate-pulse">
                        <div class="h-8 bg-gray-200 mt-3 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                      </div>
                    </td>
                    <td>
                      <div class="animate-pulse">
                        <div class="h-8 bg-gray-200 mt-3 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                      </div>
                    </td>
                    <td>
                      <div class="animate-pulse">
                        <div class="h-8 bg-gray-200 mt-3 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-300 mb-8 rounded"></div>
                        <div class="h-8 bg-gray-200 mb-8 rounded"></div>
                      </div>
                    </td>
                  </tr>
                  <tr
                    v-for="item in paginatedDesserts"
                    :key="item.dessert"
                    v-else
                  >
                    <td>{{ item.clientCode }}</td>
                    <td>{{ item.branchCode }}</td>
                    <td>{{ item.clientEmailId }}</td>
                    <!-- Add this line -->
                    <td>{{ item.clientMobileNo }}</td>
                    <td>{{ item.branchEmail }}</td>
                    <td class="flex justify-start">
                      <div>
                        <v-btn
                          @click="showConfirmationDialog(item)"
                          class="ml-2"
                        >
                          <VIcon
                            icon="ri-delete-bin-fill"
                            color="red"
                            size="22"
                        /></v-btn>
                      </div>
                      <div>
                        <!-- <v-btn
                          @click="editItem(item)"
                          class="mx-5"
                        >
                          <VIcon
                            icon="ri-pencil-fill"
                            color="red"
                            size="22"
                        /></v-btn> -->
                      </div>
                    </td>
                  </tr>
                </tbody>
              </VTable>
              <VRow class="d-flex justify-end align-center">
                <VCol
                  cols="auto"
                  class="d-flex align-center"
                >
                  <span class="mr-2">Items per page:</span>
                  <VSelect
                    v-model="itemsPerPage"
                    :items="perPageOptions"
                  >
                  </VSelect>
                </VCol>
                <VCol
                  cols="auto"
                  class="d-flex align-center"
                >
                  <VBtn
                    @click="currentPage = 1"
                    :disabled="currentPage === 1"
                  >
                    <VIcon
                      icon="ri-skip-left-fill"
                      size="16"
                    ></VIcon>
                  </VBtn>
                  <VBtn
                    @click="currentPage -= 1"
                    :disabled="currentPage === 1"
                  >
                    <VIcon
                      icon="ri-arrow-left-s-fill"
                      size="16"
                    ></VIcon>
                  </VBtn>
                  <span class="mx-2 font-weight-bold"> {{ currentPage }} of {{ totalPages }} </span>
                  <VBtn
                    @click="currentPage += 1"
                    :disabled="currentPage === totalPages"
                  >
                    <VIcon
                      icon="ri-arrow-right-s-fill"
                      size="16"
                    ></VIcon>
                  </VBtn>
                  <VBtn
                    @click="currentPage = totalPages"
                    :disabled="currentPage === totalPages"
                  >
                    <VIcon
                      icon="ri-skip-right-fill"
                      size="16"
                    ></VIcon>
                  </VBtn>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>

        <VNavigationDrawer
          v-model="isDrawerOpen"
          temporary
          right
          v-if="isDrawerOpen == true"
        >
          <VCard class="h-screen">
            <VCardTitle class="py-8"> ADD NEW CLIENT </VCardTitle>
            <VCardSubtitle>
              <VTextField
                v-model="createClient.ClientCode"
                label="Client Code *"
                required
                class="py-2"
                :outline="false"
              ></VTextField>

              <VTextField
                v-model="createClient.ClientEmailId"
                label="Client Email"
                required
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="createClient.ClientMobileno"
                label="Client Mobile No"
                required
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="createClient.BranchCode"
                required
                label="Branch Code"
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="createClient.BranchEmail"
                label="Branch Email"
                required
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="createClient.BranchMobile"
                label="Branch Mobile No"
                required
                class="py-2"
              ></VTextField>
            </VCardSubtitle>
            <VCardActions class="py-8">
              <v-spacer></v-spacer>

              <v-btn
                @click="addItem"
                class="ml-2 text-white"
                style="background-color: #2b58a3; border: 1px solid #2b58a3; color: rgb(252, 249, 249)"
                >ADD</v-btn
              >
              <v-btn
                @click="isDrawerOpen = false"
                color="secondary border mr-3"
                >CANCEL</v-btn
              >
            </VCardActions>
          </VCard>
        </VNavigationDrawer>
        <VNavigationDrawer
          v-model="isEditDrawerOpen"
          temporary
          right
          v-if="isEditDrawerOpen == true"
        >
          <VCard class="h-screen">
            <VCardTitle class="py-8"> EDIT CLIENT </VCardTitle>

            <VCardSubtitle>
              <VTextField
                v-model="editClient.ClientCode"
                label="Client Code *"
                required
                class="py-2"
                :outline="false"
              ></VTextField>

              <VTextField
                v-model="editClient.ClientEmailId"
                label="Client Email"
                required
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="editClient.ClientMobileno"
                label="Client Mobile No"
                required
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="editClient.BranchCode"
                required
                label="Branch Code"
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="editClient.BranchEmail"
                label="Branch Email"
                required
                class="py-2"
              ></VTextField>
              <VTextField
                v-model="editClient.BranchMobile"
                label="Branch Mobile No"
                required
                class="py-2"
              ></VTextField>
            </VCardSubtitle>
            <VCardActions class="py-8">
              <v-spacer></v-spacer>

              <v-btn
                @click="addItem"
                class="ml-2 text-white"
                style="background-color: #2b58a3; border: 1px solid #2b58a3; color: rgb(252, 249, 249)"
                >UPDATE</v-btn
              >
              <v-btn
                @click="isEditDrawerOpen = false"
                color="secondary border mr-3"
                >CANCEL</v-btn
              >
            </VCardActions>
          </VCard>
        </VNavigationDrawer>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { userDataStore } from '~/stores/tableData'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = userDataStore()
const isEditDrawerOpen = ref(false)
const isLoading = ref(false)
const isDrawerOpen = ref(false) // Initially closed
const createClient = ref({
  ClientCode: '',
  ClientEmailId: '',
  ClientMobileno: '',
  BranchCode: '',
  BranchEmail: '',
  BranchMobile: '',
})

const editClient = ref({
  ClientCode: '',
  ClientEmailId: '',
  ClientMobileno: '',
  BranchCode: '',
  BranchEmail: '',
  BranchMobile: '',
})
const addItem = async () => {
  debugger
  if (isEditing.value) {
    // Update existing item
    const formData = new FormData()
    formData.append('ClientCode', editClient.value.ClientCode)
    formData.append('ClientEmailId', editClient.value.ClientEmailId)
    formData.append('ClientMobileno', editClient.value.ClientMobileno)
    formData.append('BranchCode', editClient.value.BranchCode)
    formData.append('BranchEmail', editClient.value.BranchEmail)
    formData.append('BranchMobile', editClient.value.BranchMobile)
    formData.append('updateClient', editClient.value.ClientCode)
    const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerstocks-client-entry.php', formData)

    editClient.value = {
      ClientCode: '',
      ClientEmailId: '',
      ClientMobileno: '',
      BranchCode: '',
      BranchEmail: '',
      BranchMobile: '',
    } // Reset form
    isEditDrawerOpen.value = false
    Swal.fire({
      icon: 'success',
      title: 'Client Updated',
      text: 'The client has been updated successfully!',
    })
    fetchData()
  } else {
    // Create new item
    const formData = new FormData()
    formData.append('ClientCode', createClient.value.ClientCode)
    formData.append('ClientEmailId', createClient.value.ClientEmailId)
    formData.append('ClientMobileno', createClient.value.ClientMobileno)
    formData.append('BranchCode', createClient.value.BranchCode)
    formData.append('BranchEmail', createClient.value.BranchEmail)
    formData.append('BranchMobile', createClient.value.BranchMobile)

    const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerstocks-client-entry.php', formData)

    createClient.value = {
      ClientCode: '',
      ClientEmailId: '',
      ClientMobileno: '',
      BranchCode: '',
      BranchEmail: '',
      BranchMobile: '',
    } // Reset form
    isDrawerOpen.value = false
    Swal.fire({
      icon: 'success',
      title: 'Client Added',
      text: 'The client has been added successfully!',
    })
    fetchData()
  }
}
const isEditing = ref(false)
const editItem = item => {
  isEditing.value = true
  isEditDrawerOpen.value = true
  editClient.value = {
    ClientCode: item.clientCode,
    ClientEmailId: item.clientEmailId,
    ClientMobileno: item.clientMobileNo,
    BranchCode: item.branchCode,
    BranchEmail: item.branchEmail,
    BranchMobile: item.branchMobileNo,
  }
}

const fetchData = async () => {
  isLoading.value = true
  try {
    const formData = new FormData()
    formData.append('authKey', '0a7cb27e52927eacabbb7ecc738b0fea50b3967945257c43a67eb753cb465bd0')

    const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerstocks-client-data.php', formData)

    // Debug after successful response
    console.log(response.data, 'response.data') // Ensure this logs the expected data structure

    desserts.value = response.data.map(item => ({
      clientCode: item.clientCode,
      branchCode: item.branchCode,
      branchEmail: item.branchEmail,
      branchMobileNo: item.branchMobileNo,
      clientEmailId: item.clientEmailId,
      clientMobileNo: item.clientMobileNo,
    }))
  } catch (err) {
    console.error('Error:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  const userId = userStore.userId || ''
  const password = userStore.password || ''
  if (userId == null || userId == '' || userId == undefined) {
    router.push('/login')
  }
  console.log(userId, password, 'password')
  fetchData()
})
// Data
const search = ref('')
const desserts = ref([])
const currentPage = ref(1)
const itemsPerPage = ref(10)
const perPageOptions = [10, 25, 50, 100]

// Computed property to filter the desserts array based on the search query
const filteredDesserts = computed(() => {
  if (!search.value) {
    return desserts.value
  }
  console.log(desserts.value, 'desserts.value')
  const query = search.value.toLowerCase()
  return desserts.value.filter(
    item =>
      item.clientCode.toLowerCase().includes(query) ||
      item.branchCode.toLowerCase().includes(query) ||
      item.clientEmailId.toLowerCase().includes(query) ||
      item.clientMobileNo.toLowerCase().includes(query) ||
      item.branchEmail.toLowerCase().includes(query),
  )
})

// Computed property for paginated desserts
const paginatedDesserts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value
  const endIndex = startIndex + itemsPerPage.value
  return filteredDesserts.value.slice(startIndex, endIndex)
})

// Computed property for total pages
const totalPages = computed(() => {
  return Math.ceil(filteredDesserts.value.length / itemsPerPage.value)
})

// Methods
const deleteItem = async itemToDelete => {
  try {
    const formData = new FormData()
    formData.append('authKey', '0a7cb27e52927eacabbb7ecc738b0fea50b3967945257c43a67eb753cb465bd0')
    formData.append('clientCode', itemToDelete.clientCode)
    const response = await axios.post('https://g1.gwcindia.in/powerstocks/powerstocks-remove-client.php', formData)

    console.log('Client deleted successfully:', response.data)
    Swal.fire({
      icon: 'success',
      title: 'Client Deleted',
      text: 'The client has been deleted successfully!',
    })
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Error deleting client:', error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong while deleting the client. Please try again.',
    })
  } finally {
    search.value = ''
    fetchData()
  }
}

const showConfirmationDialog = async itemToDelete => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',

    confirmButtonColor: '#03ad0f',
    cancelButtonColor: '#f21621',
    confirmButtonText: 'Yes, delete it!',
    confirmButtonTextStyle: 'color: white',
    cancelButtonColor: '#007bff',
  })

  if (result.isConfirmed) {
    deleteItem(itemToDelete)
  }
}

const exportDataToCsv = () => {
  // Implementation of CSV export functionality
}
</script>

<style lang="scss">
.text-black {
  color: black;
}
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
  /* Additional styles as needed */
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
.swal2-confirm {
  color: white; /* Sets the text color to white */
}
</style>
