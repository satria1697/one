import { invoke } from '@/service/axios'
import type { AxiosError } from 'axios'
import type { MiResponse } from '@/entities/mi-response'
import type { Product } from '@/entities/product'

class ProductPresenter {
  async getAllProduct(): Promise<MiResponse<Array<Product>>> {
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

  async getProduct(id: string): Promise<MiResponse<Product | null>> {
    try {
      const res = await invoke<Product>(`products/${id}`, 'GET')
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

  async getFilteredProductByCategory(category: string): Promise<MiResponse<Array<Product>>> {
    try {
      const res = await invoke<Array<Product>>(`products/category/${category}`, 'GET')
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
