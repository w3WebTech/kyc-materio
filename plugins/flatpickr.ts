import { defineNuxtPlugin } from '#app'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

export default defineNuxtPlugin(nuxtApp => {
  // Register flatpickr globally
  nuxtApp.provide('flatpickr', flatpickr)
})

