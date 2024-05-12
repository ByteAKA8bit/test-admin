import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    login() {
      // 实际项目中，此处应调用登录接口
      this.isLoggedIn = true
    },
    logout() {
      this.isLoggedIn = false
    }
  }
})
