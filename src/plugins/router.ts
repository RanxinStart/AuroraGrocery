import { createRouter, createWebHashHistory } from 'vue-router'
import { useTitle } from 'vue-composable'
import { routes } from '@/routes'

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

/* router hook */
router.afterEach((to) => {
    useTitle(<string>to.meta.title)
})

router.beforeEach((to) => {
    if (/\/application/.test(to.path) && !router.hasRoute(to.name || '')) {
        router.replace({ name: 'home' })
        return false
    }
})