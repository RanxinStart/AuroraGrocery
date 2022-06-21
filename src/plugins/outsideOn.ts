import type { Plugin } from 'vue'
import { useEvent } from 'vue-composable'
import type { RemoveEventFunction } from 'vue-composable'

export const createOutsideOn = () => {
  let eventRemove: RemoveEventFunction | null
  const plugin: Plugin = {
    install(app) {
      app.directive('outside', {
        created(el: Element, option) {
          const behavior = <keyof DocumentEventMap>option.arg || 'click'
          eventRemove = useEvent(document, behavior, ({ target }) => {
            el.contains(<Node>target) || option.value()
          })
        },
        unmounted() {
          eventRemove?.()
        }
      })
    }
  }
  return plugin
}

export const outsideOn = createOutsideOn()
export default outsideOn
