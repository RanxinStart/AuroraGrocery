import type { RouteRecordRaw } from 'vue-router'
import LoginLayout from '@/layout/LoginLayout.vue'

export const auth:RouteRecordRaw = {
    path:'/auth',
    redirect:'/auth/login',
    component:LoginLayout,
    children:[
        {
            path:'login',
            component: ()=>import('@/views/auth/login/index.vue'),
        },
    ],
}