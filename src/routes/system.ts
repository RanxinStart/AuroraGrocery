import type { RouteRecordRaw } from 'vue-router'
import EmptyLayout from '@/layout/EmptyLayout.vue'

export const system: RouteRecordRaw = {
    path: '/system',
    redirect: '/system/setting',
    component: EmptyLayout,
    children: [
        {
            path: 'setting',
            meta: { title: '设置' },
            component: () => import('@/views/system/setting/index.vue'),
        },
    ],
}