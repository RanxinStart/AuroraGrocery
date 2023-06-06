import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { STORE_SETTING } from '@/data/localStorageKey'

export const storage = useLocalStorage(STORE_SETTING, {
  size: 'sm',
  lang: 'zh_CN'
})

export const useSettingStore = defineStore('setting', {
  state() {
    return storage
  },
  actions: {
    updateSize(value: ThemeSize) {
      this.size = value
    },
    updateLang(value: string) {
      this.lang = value
    }
  }
})
