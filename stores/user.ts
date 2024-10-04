// store/counter.ts

import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count++;
      console.log(this.count)
    },
    decrement() {
      this.count--;
      console.log(this.count)
    },
    setCount(value: number) {
      this.count = value;
    },
  },
});
