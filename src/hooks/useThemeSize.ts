type appName = 'app' | 'application'
const application = [36, 40, 54, 68]

const themeNameMap = new Map([
  ['app', application],
  ['application', application]
])

export const themeSizeMap = new Map([
  ['default', 2],
  ['sm', 0],
  ['md', 1],
  ['lg', 2],
  ['xl', 3]
])

type ThememType = appName

/**
 *
 * @param type
 * @param size
 * @returns { size }
 */
export const useThemeSize = (type: ThememType, size: ThememSize) => {
  const keySize = themeSizeMap.get(size)
  return themeNameMap.get(type)?.[keySize || 0]
}

export default useThemeSize
