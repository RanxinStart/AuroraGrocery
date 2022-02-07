import type { RouteRecordRaw } from 'vue-router'
import NavLayout from '@/layout/NavLayout.vue'

export const application: RouteRecordRaw = {
    name: 'application',
    path: '/application',
    redirect: '/home',
    component: NavLayout,
    children: [],
}