import type { Plugin } from 'vue'
import * as modules from '@/components/BuiltIn/index'

export const createBuiltlnComponent = () => {
  const plugin: Plugin = {
    install(app) {
      for (const [name, component] of Object.entries(modules)) {
        app.component(name, component)
      }
    }
  }
  return plugin
}

export default createBuiltlnComponent()
