import type { MiResponse } from '@/entities/mi-response'
import { invoke } from '@/service/axios'
import type { AxiosError } from 'axios'

class CategoryPresenter {
  async getAllCategory(): Promise<MiResponse<Array<String>>> {
    try {
      const res = await invoke<Array<String>>('products/categories', 'GET')
      return {
        data: res.data,
        error: '',
        message: 'success'
      }
    } catch (e) {
      const error = e as AxiosError
      return {
        data: [],
        error: error.message,
        message: 'fail'
      }
    }
  }
}

export default CategoryPresenter
