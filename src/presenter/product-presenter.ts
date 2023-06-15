import { invoke } from '@/service/axios'
import type { Product } from '@/stores/product'
import { AxiosError } from 'axios'

class ProductPresenter {
  async getAllProduct(): MiResponse<Array<Product>> {
    try {
      const res = await invoke<Array<Product>>('products', 'GET')
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

export default ProductPresenter
