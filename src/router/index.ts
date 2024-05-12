import { createRouter, createWebHistory } from 'vue-router'
import GlobalLayout from '@/layout/GlobalLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        return {
          path: '/home'
        }
      },
      component: GlobalLayout,
      children: [
        { name: '概览', path: '/home', component: () => import('@/views/home/HomeView.vue') }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/LoginView.vue')
    },
    {
      path: '/product',
      component: GlobalLayout,
      children: [
        {
          name: '商品管理',
          path: '/product-manage',
          component: () => import('@/views/product/ProductManage.vue')
        }
      ]
    }
  ]
})

export default router
