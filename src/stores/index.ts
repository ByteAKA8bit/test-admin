import { createPinia } from 'pinia'
import { useUserStore } from './modules/user'
import { useProductStore } from './modules/product'

const store = createPinia()

export function useStore() {
  return {
    user: useUserStore(),
    product: useProductStore()
  }
}

export default store
