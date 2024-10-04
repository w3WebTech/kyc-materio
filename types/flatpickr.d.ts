import { FlatpickrInstance } from 'flatpickr'

declare module '#app' {
  interface NuxtApp {
    $flatpickr: typeof FlatpickrInstance
  }
}
