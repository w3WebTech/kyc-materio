import { defineStore } from 'pinia';
export const userDataStore = defineStore('todos', {
  state: () => ({
    todos: [],
    userId:'',
    password:''
  }),
  actions: {
    setUser(email: string,pword: string) {
      this.userId =email
      this.password=pword
     console.log(this.userId,  this.password)
    },
    removeUser() {
      this.userId =''
      this.password=''
    },
      
  },
})
