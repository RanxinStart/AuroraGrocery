import type { App, Plugin } from 'vue'

// 自动引入需要安装的插件
const pluginList = import.meta.globEager('./*.ts')

// 安装程序
export const install = (vueApp: App) => {
    for (const plugin of Object.values(pluginList)) {
        vueApp.use(<Plugin>plugin.default)
    }
}
export default install