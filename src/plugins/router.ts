import { createRouter, createWebHashHistory } from 'vue-router'
import { useTitle } from 'vue-composable'
import { routes } from '@/routes'

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

/* router hook */
router.beforeEach((to) => {
    useTitle(<string>to.meta.title)
})