import http from './api'

export const getProducts = (query: any) => {
  // 分页请求等待实现
  return http.get(`/getProducts?page=${query.page}&pageSize=${query.pageSize}`)
}
