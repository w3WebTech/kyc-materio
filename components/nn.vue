<template>
  <div class="ml-15 my-5">
    <ol class="relative text-gray-500 border-s dark:border-gray-700 dark:text-gray-400">
      <li
        class="mb-10 ms-6"
        @click="incrementStep(0)"
        :class="{ 'opacity-100': myValue >= 0, 'opacity-50': myValue <= 0 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"
          :class="{ 'bg-[#7a1ff2]': myValue >= 0, 'bg-gray-100': myValue < 0 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{
              'text-white dark:text-white ': myValue >= 0,
              'text-gray-500 dark:text-gray-400': myValue < 0,
            }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 0, 'font-medium': myValue < 0 }"
        >
          Identity Verification
        </h3>
      </li>
      <li
        class="mb-10 ms-6"
        @click="incrementStep(1)"
        :class="{ 'opacity-100': myValue >= 1, 'opacity-50': myValue <= 1 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
          :class="{ 'bg-[#7a1ff2]': myValue >= 1, 'bg-gray-100': myValue < 1 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{ 'text-white dark:text-white': myValue >= 1, 'text-gray-500 dark:text-gray-400': myValue < 1 }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path
              d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 1, 'font-medium': myValue < 1 }"
        >
          Digilocker Document Fetch
        </h3>
      </li>
      <li
        class="mb-10 ms-6"
        @click="incrementStep(2)"
        :class="{ 'opacity-100': myValue >= 2, 'opacity-50': myValue <= 2 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
          :class="{ 'bg-[#7a1ff2]': myValue >= 2, 'bg-gray-100': myValue < 2 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{ 'text-white dark:text-white': myValue >= 2, 'text-gray-500 dark:text-gray-400': myValue < 2 }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 2, 'font-medium': myValue < 2 }"
        >
          KYC & Personal Details
        </h3>
      </li>
      <li
        class="mb-10 ms-6"
        @click="incrementStep(3)"
        :class="{ 'opacity-100': myValue >= 3, 'opacity-50': myValue <= 3 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
          :class="{ 'bg-[#7a1ff2]': myValue >= 3, 'bg-gray-100': myValue < 3 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{ 'text-white dark:text-white': myValue >= 3, 'text-gray-500 dark:text-gray-400': myValue < 3 }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 3, 'font-medium': myValue < 3 }"
        >
          Bank Details
        </h3>
      </li>
 
      <li
        class="mb-10 ms-6"
        @click="incrementStep(4)"
        :class="{ 'opacity-100': myValue >= 4, 'opacity-50': myValue <= 4 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
          :class="{ 'bg-[#7a1ff2]': myValue >= 4, 'bg-gray-100': myValue < 4 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{ 'text-white dark:text-white': myValue >= 4, 'text-gray-500 dark:text-gray-400': myValue < 4 }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 4, 'font-medium': myValue < 4 }"
        >
          Selfie
        </h3>
      </li>
      <li
        class="mb-10 ms-6"
        @click="incrementStep(5)"
        :class="{ 'opacity-100': myValue >= 5, 'opacity-50': myValue <= 5 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
          :class="{ 'bg-[#7a1ff2]': myValue >= 5, 'bg-gray-100': myValue < 5 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{ 'text-white dark:text-white': myValue >= 5, 'text-gray-500 dark:text-gray-400': myValue < 5 }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 5, 'font-medium': myValue < 5 }"
        >
          Signature
        </h3>
      </li>
      <li
        class="mb-10 ms-6"
        @click="incrementStep(5)"
        :class="{ 'opacity-100': myValue >= 5, 'opacity-50': myValue <= 5 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
          :class="{ 'bg-[#7a1ff2]': myValue >= 6, 'bg-gray-100': myValue < 6 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{ 'text-white dark:text-white': myValue >= 6, 'text-gray-500 dark:text-gray-400': myValue < 6 }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 6, 'font-medium': myValue < 6 }"
        >
          Segment Activation
        </h3>
      </li>
      <li
        class="ms-6"
        @click="incrementStep(6)"
        :class="{ 'opacity-100': myValue >= 6, 'opacity-50': myValue <= 6 }"
      >
        <div
          class="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
          :class="{ 'bg-[#7a1ff2]': myValue >= 7, 'bg-gray-100': myValue < 7 }"
        >
          <svg
            class="w-3.5 h-3.5"
            :class="{ 'text-white dark:text-white': myValue >= 7, 'text-gray-500 dark:text-gray-400': myValue < 7 }"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"
            />
          </svg>
        </div>
        <h3
          class="leading-tight pt-2"
          :class="{ 'font-bold': myValue >= 7, 'font-medium': myValue < 7 }"
        >
          Account Form Submission
        </h3>
      </li>
    </ol>
  </div>
</template>

<script  lang="ts">
export default {
  data() {
    return {}
  },
  methods: {
    incrementStep(value: any) {
      console.log(value, 'value')
      this.$emit('step-changed', value)
    },
  },
  mounted() {},
  props: {
    myValue: String, // Define prop type
  },
}
</script>
 
