import axios, { AxiosRequestConfig } from 'axios'

type HttpMethod = 'GET'

export const invoke = <R>(url: string, method: HttpMethod) => {
  const config: AxiosRequestConfig = {
    baseURL: 'https://fakestoreapi.com',
    url,
    method,
    timeout: 13000
  }
  return axios.request<R>(config)
}
