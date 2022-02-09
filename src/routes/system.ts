import type { RouteRecordRaw } from 'vue-router'
import NavLayout from '@/layout/NavLayout.vue'

export const system: RouteRecordRaw = {
    path: '/system',
    redirect: '/system/setting',
    component: NavLayout,
    children: [
        {
            name: 'system.setting',
            path: 'setting',
            meta: { title: '设置' },
            component: () => import('@/views/system/setting/index.vue'),
        },
    ],
}