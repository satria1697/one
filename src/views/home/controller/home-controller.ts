import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { Product } from '@/entities/product'
import ProductPresenter from '@/presenter/product-presenter'
import MiToast from '@/components/global/mi-toast'

const productPresenter = new ProductPresenter()
const miToast = new MiToast()

export const useProductStore = defineStore('product', () => {
  const products = ref<Array<Product>>([])
  const error = ref('')
  const loading = ref<boolean>(false)

  const getProductState = computed(() => products.value)
  const getLoadingState = computed(() => loading.value)
  const getErrorMessage = computed(() => error.value)

  const getProductData = async () => {
    loading.value = true
    const res = await productPresenter.getAllProduct()
    if (res.error) {
      error.value = res.error
      miToast.failed(res.error)
      loading.value = false
      return
    }
    products.value = res.data
    loading.value = false
  }

  return { getProductData, getProductState, getLoadingState, getErrorMessage }
})
