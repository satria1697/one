import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import CategoryPresenter from '@/presenter/category-presenter'
import miToast from '@/components/global/mi-toast'

const categoryPresenter = new CategoryPresenter()

export const useMiHeaderBindStore = defineStore('mi-header-bind', () => {
  const categories = ref<Array<String>>([])
  const error = ref('')
  const loading = ref<boolean>(false)

  const getCategoryState = computed(() => categories.value)
  const getLoadingState = computed(() => loading.value)
  const getErrorMessage = computed(() => error.value)

  const getCategoryData = async () => {
    loading.value = true
    const res = await categoryPresenter.getAllCategory()
    if (res.error) {
      error.value = res.error
      miToast.failed(res.error)
      loading.value = false
      return
    }
    categories.value = res.data
    loading.value = false
  }

  return { getCategoryData, getCategoryState, getLoadingState, getErrorMessage }
})
