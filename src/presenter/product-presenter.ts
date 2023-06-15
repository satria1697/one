import { invoke } from '@/service/axios'
import type { Product } from '@/stores/product'
import { AxiosError } from 'axios'
import type { MiResponse } from '@/entities/mi-response'

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

  async getProduct(id: string): MiResponse<Product> {
    try {
      const res = await invoke<Product>(`products/${id}`, 'GET')
      if (res.data == '') {
        return {
          data: null,
          error: `DATA-NOT-FOUND`,
          message: 'fail'
        }
      }
      return {
        data: res.data,
        error: '',
        message: 'success'
      }
    } catch (e) {
      const error = e as AxiosError
      return {
        data: null,
        error: error.message,
        message: 'fail'
      }
    }
  }
}

export default ProductPresenter
