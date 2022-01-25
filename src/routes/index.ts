import type { RouteRecordRaw } from 'vue-router'
import { auth } from './auth'
import { home } from './home'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    auth,
    home,
]