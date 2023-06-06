import type { Plugin } from 'vue'

export const createOutsideOn = () => {
  let eventFn: (this: Document, ev: DocumentEventMap[keyof DocumentEventMap]) => void
  let behavior: keyof DocumentEventMap
  const plugin: Plugin = {
    install(app) {
      app.directive('outside', {
        created(el: Element, option) {
          behavior = <keyof DocumentEventMap>option.arg || 'click'
          eventFn = function ({ target }) {
            el.contains(<Node>target) || option.value()
          }
          document.addEventListener(behavior, eventFn)
        },
        unmounted() {
          document.removeEventListener(behavior, eventFn)
        }
      })
    }
  }
  return plugin
}

export const outsideOn = createOutsideOn()
export default outsideOn
