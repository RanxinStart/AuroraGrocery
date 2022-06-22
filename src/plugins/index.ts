import type { App, Plugin } from 'vue'

// 自动引入需要安装的插件
const pluginList = import.meta.globEager('./*.ts')

// 安装程序
export const install = (app: App) => {
  const keyPluginList = Object.values(pluginList)
  const sortKeyPluginList = keyPluginList
  for (const plugin of sortKeyPluginList) {
    app.use(<Plugin>plugin.default)
  }
}

export default install
