// axios.js

import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000 // 设置超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // 从本地存储获取token
    if (token) {
      config.headers.Authorization = `Bearer ${token}` // 添加token到请求头
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) {
      return Promise.reject(response.data.message)
    }

    return response.data
  },
  (error) => {
    // 在这里处理错误
    return Promise.reject(error)
  }
)

export default instance
