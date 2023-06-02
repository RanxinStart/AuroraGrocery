import type { RouteRecordRaw } from 'vue-router'
import NavLayout from '@/layout/NavLayout.vue'
import { routes } from '.'

export const application: RouteRecordRaw = {
  name: 'application',
  path: '/application',
  redirect: '/home',
  component: NavLayout,
  children: []
}

routes.push(application)
