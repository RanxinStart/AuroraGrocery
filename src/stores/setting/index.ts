import { defineStore } from 'pinia'
import { useLocalStorage } from 'vue-composable'

export const { storage } = useLocalStorage('store__setting', {
  size: 'sm',
  lang: 'zh_CN'
})

export const useSettingStore = defineStore('setting', {
  state() {
    return storage
  },
  actions: {
    updateSize(value: ThememSize) {
      this.size = value
    },
    updateLang(value:string){
      this.lang = value
    }
  }
})
