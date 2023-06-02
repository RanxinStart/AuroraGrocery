import type { RouteRecordRaw } from 'vue-router'
import LoginLayout from '@/layout/LoginLayout.vue'
import { routes } from '.'

export const auth: RouteRecordRaw = {
  name: 'auth',
  path: '/auth',
  redirect: '/auth/login',
  component: LoginLayout,
  children: [
    {
      path: 'login',
      meta: { title: '登录' },
      component: () => import('@/views/auth/login/index.vue')
    }
  ]
}

routes.push(auth)
