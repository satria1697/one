import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { Product } from '@/entities/product'
import ProductPresenter from '@/presenter/product-presenter'
import CategoryPresenter from '@/presenter/category-presenter'
interface DataInterface {
  product: Array<Product>
  category: Array<string>
  selected: string
  isLoading: {
    product: boolean
    category: boolean
  }
}

const productPresenter = new ProductPresenter()
const categoryPresenter = new CategoryPresenter()

export const useProductFilterBindStore = defineStore('product-filter-bind', () => {
  const data = reactive<DataInterface>({
    product: [],
    category: [],
    selected: '',
    isLoading: {
      product: true,
      category: true
    }
  })

  const getProduct = async () => {
    data.isLoading.product = true
    const filteredProductByCategory = await productPresenter.getFilteredProductByCategory(
      data.selected
    )
    data.product = filteredProductByCategory.data
    data.isLoading.product = false
  }

  const getCategory = async () => {
    data.isLoading.category = true
    const response = await categoryPresenter.getAllCategory()
    data.category = response.data
    data.isLoading.category = false
  }

  const setSelectedCategory = (category: string) => {
    data.selected = category
  }

  const getProductState = computed(() => data.product)
  const getCategoryState = computed(() => data.category)
  const getSelectedState = computed(() => data.selected)
  const getIsLoadingProductState = computed(() => data.isLoading.product)
  const getIsLoadingCategoryState = computed(() => data.isLoading.category)
  return {
    getProductState,
    getProduct,
    getCategory,
    setSelectedCategory,
    getCategoryState,
    getSelectedState,
    getIsLoadingProductState,
    getIsLoadingCategoryState
  }
})
