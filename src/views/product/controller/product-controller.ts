import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Product } from '@/entities/product'
import ProductPresenter from '@/presenter/product-presenter'

const productPresenter = new ProductPresenter()

export const useProductBindStore = defineStore('product-bind', () => {
  const products = ref<Product | null>(null)
  const error = ref('')
  const loading = ref<boolean>(false)

  const getProductState = computed(() => products.value)
  const getLoadingState = computed(() => loading.value)
  const getErrorMessage = computed(() => error.value)

  const getProductData = async (id: string) => {
    loading.value = true
    const res = await productPresenter.getProduct(id)
    if (res.error) {
      if (res.error == 'DATA-NOT-FOUND') {
        error.value = `Can't find product with ID ${id}`
      } else {
        error.value = res.error
      }
      loading.value = false
      return
    }
    products.value = res.data
    loading.value = false
  }

  return {
    getProductState,
    getLoadingState,
    getErrorMessage,
    getProductData
  }
})
