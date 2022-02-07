import type { RouteRecordRaw } from 'vue-router'
import { auth } from './auth'
import { home } from './home'
import { system } from './system'
import { application } from './application'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
    },
    auth,
    home,
    system,
    application,
]