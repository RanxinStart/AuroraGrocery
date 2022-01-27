import type { Plugin } from 'vue'

interface createSizeOption {
    defaultUnit?:'px' | 'em' | 'rem' | 'pt' | '%'
}

export const createSize = (option:createSizeOption = {}) => {
    const { defaultUnit = 'px'} = option
    
    const plugin:Plugin = {
        install(app){
            app.directive('size',{
                mounted(el,option){
                    const unit = option.arg || defaultUnit
                    el.style.width = `${option.value}${unit}`
                    el.style.height = `${option.value}${unit}`
                },
            })
        },
    }
    return plugin
} 

export const size = createSize({
    defaultUnit:'px',
})

export default size