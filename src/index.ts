import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index'
import { install } from './plugin'

// 创建vue
const vueApp = createApp(App)

// 安装插件
install(vueApp)

// 挂载
vueApp.mount('#root')