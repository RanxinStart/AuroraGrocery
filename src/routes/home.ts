import type { RouteRecordRaw } from 'vue-router'
import NavLayout from '@/layout/NavLayout.vue'

export const home: RouteRecordRaw = {
    name: 'home',
    path: '/home',
    component: NavLayout,
    children: [
        {
            path: '',
            meta: { title: '首页' },
            component: () => import('@/views/home/index.vue'),
        },
    ],
}