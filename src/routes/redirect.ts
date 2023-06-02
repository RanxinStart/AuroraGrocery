import type { RouteRecordRaw } from 'vue-router'
import { routes } from '.'

export const redirect: RouteRecordRaw = {
  path: '/',
  redirect: '/home'
}

routes.push(redirect)
