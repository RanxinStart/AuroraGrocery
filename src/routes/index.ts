import type { RouteRecordRaw } from 'vue-router'
import { auth } from './auth'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '首页',
        },
        component: import('@/views/index.vue'),
    },
    auth,
]