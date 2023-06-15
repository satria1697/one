export interface MiResponse<T> {
  message: 'success' | 'failed' | string
  data: T
  error: string
}
