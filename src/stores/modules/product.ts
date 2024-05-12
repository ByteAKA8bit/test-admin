import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  actions: {
    setProducts(products) {
      this.products = products
    }
  }
})
