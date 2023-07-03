import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import type { Product } from '@/entities/product'
import ProductPresenter from '@/presenter/product-presenter'
import CategoryPresenter from '@/presenter/category-presenter'
interface DataInterface {
  product: Array<Product>
  category: Array<string>
  selected: string
}

const productPresenter = new ProductPresenter()
const categoryPresenter = new CategoryPresenter()

export const useProductFilterBindStore = defineStore('product-filter-bind', () => {
  const data = reactive<DataInterface>({
    product: [],
    category: [],
    selected: ''
  })

  const getProduct = async () => {
    const filteredProductByCategory = await productPresenter.getFilteredProductByCategory(
      data.selected
    )
    data.product = filteredProductByCategory.data
  }

  const getCategory = async () => {
    const response = await categoryPresenter.getAllCategory()
    data.category = response.data
  }

  const setSelectedCategory = (category: string) => {
    data.selected = category
  }

  const getProductState = computed(() => data.product)
  const getCategoryState = computed(() => data.category)
  const getSelectedState = computed(() => data.selected)

  return {
    getProductState,
    getProduct,
    getCategory,
    setSelectedCategory,
    getCategoryState,
    getSelectedState
  }
})
