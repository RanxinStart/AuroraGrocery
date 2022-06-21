declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module 'markdown-it-copy' {
  import type { PluginWithOptions } from 'markdown-it'
  const copy: PluginWithOptions<{
    btnText?: string // 'copy' | button text
    failText?: string // 'copy fail' | copy-fail text
    successText?: string // 'copy success' | copy-success text
    successTextDelay?: number // 2000 | successText show time [ms]
    extraHtmlBeforeBtn?: string // '' | a html-fragment before <button>
    extraHtmlAfterBtn?: string // '' | a html-fragment after <button>
    showCodeLanguage?: boolean // false | show code language before [btn || extraHtmlBeforeBtn] | [add-after-1.1.0]
    attachText?: string // '' | some text append copyText， Such as: copyright | [add-after-1.2.0]
  }>
  export default copy
}
