import { defineStore } from 'pinia'
import { useSessionStorage } from 'vue-composable'

const { storage } = useSessionStorage('store__setting', {
    size: 'sm',
})

export const useSettingStore = defineStore('setting', {
    state() {
        return storage
    },
    actions: {
        updateSize(value: ThememSize) {
            this.size = value
        },
    },
})