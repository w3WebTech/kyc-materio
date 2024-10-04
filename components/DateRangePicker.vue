<template>
  <input
    id="datepicker"
    placeholder="Select Date Range"
    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
    :class="{ 'bg-[#312D4B]': isDarkTheme }"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, computed } from 'vue'
import { useNuxtApp } from '#app'
import { useTheme } from 'vuetify'
export default defineComponent({
  name: 'DateRangePicker',
  setup(_, { emit }) {
    const { $flatpickr } = useNuxtApp()
    const vuetifyTheme = useTheme()
    const isDarkTheme = computed(() => {
      return vuetifyTheme.global.name.value === 'light' ? false : true
    })
    onMounted(() => {
      // Initialize Flatpickr
      $flatpickr('#datepicker', {
        mode: 'range',
        dateFormat: 'Y-m-d',
        locale: {
          firstDayOfWeek: 1, // Start week on Monday
        },
        onChange: (selectedDates: Date[], dateStr: string) => {
          console.log('Selected dates:', selectedDates)
          console.log('Formatted date string:', dateStr)
          const formattedDates = selectedDates.map(date => formatDateToISO(date))
          console.log('Formatted dates:', formattedDates)
          emit('selecteddate', formattedDates)
        },
      })
    })
    return {
      isDarkTheme,
    }
  },
})

function formatDateToISO(date: Date): string {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}
</script>

<style lang="scss" scoped>
.bg {
  background-color: #312d4b;
  color: #fff;
  border-color: #444;
}
</style>
