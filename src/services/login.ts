import http from './api'

export const loginRequest = (data: any) => {
  return http.post('/login', data)
}
