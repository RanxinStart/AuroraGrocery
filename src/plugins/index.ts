import type { App, Plugin } from 'vue'

// 自动引入需要安装的插件
const pluginList = import.meta.globEager('./*.ts')

// 安装程序
export const install = (app: App) => {
    for (const plugin of Object.values(pluginList)) {
        app.use(<Plugin>plugin.default)
    }
}
export default install