import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { invoke } from '@/service/axios'

export interface Product {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export const useProductStore = defineStore('product', () => {
  const products = ref<Array<Product>>(0)
  const getProductState = computed(() => products.value)
  const loading = ref<boolean>(false)
  const getLoadingState = computed(() => loading.value)
  const getProductData = async () => {
    loading.value = true
    const res = await invoke<Array<Product>>('products', 'GET')
    products.value = res.data
    loading.value = false
  }

  return { getProductData, getProductState, getLoadingState }
})
