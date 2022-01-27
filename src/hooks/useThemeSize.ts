
type appName = 'app' | 'application'
const application = [36, 40, 54, 68]


const ThemeNameMap = new Map([
    ['app', application],
    ['application', application],
])

const ThemeSizeMap = new Map([
    ['default', 2],
    ['sm', 0],
    ['md', 1],
    ['lg', 2],
    ['xl', 3],
])

type ThememSize = 'sm' | 'md' | 'lg' | 'xl' | 'default' | 0 | 1 | 2 | 3
type ThememType = appName


/**
 * 
 * @param type 
 * @param size 
 * @returns { size }
 */
export const useThemeSize = (type: ThememType, size: ThememSize) => {
    const keySize = typeof size === 'number' ? size : ThemeSizeMap.get(size)
    return {
        size: ThemeNameMap.get(type)?.[keySize || 0],
    }
}

export default useThemeSize