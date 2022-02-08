import { defineStore } from 'pinia'
import { defineAsyncComponent } from 'vue'
import router from '@/plugins/router'

export const useStore = defineStore('user', {
    state() {
        return {
            appList: [
                {
                    icon: () => import('~icons/ic/round-settings'),
                    name: 'system.setting',
                    title: '系统设置',
                    component: () => import('@/views/system/setting/index.vue'),
                },
                {
                    icon:()=> import('~icons/ic/round-color-lens'),
                    name: 'native.color',
                    titie:'颜色控件',
                    component: () => import('@/views/app/nativeColor/index.vue'),
                },
            ],
            appShop:[{
                icon:()=> import('~icons/ic/round-color-lens'),
                name: 'native.color',
                titie:'颜色控件',
                component: () => import('@/views/app/nativeColor/index.vue'),
            }],
        }
    },
    getters: {
        appNameList() {
            const appNameList: string[] = this.appList.map((i) => i.name)
            return appNameList
        },
    },
    actions: {
        getAppInfo(name: string) {
            const target = this.appList.find((i) => i.name === name) || this.appList[0]
            return {
                ...target,
                vueIcon: defineAsyncComponent(target.icon),
                vueComponent: defineAsyncComponent(target.component),
            }
        },
        openApp(name: string) {
            const app = this.getAppInfo(name)
            router.addRoute('application', {
                name: app.name,
                path: app.name,
                component: app.component,
                meta: { title: app.title },
            })
            router.push(`/application/${app.name}`)
        },
    },
})