interface EyeDropper {
  new (): {
    open: () => Promise<{ sRGBHex: string }>
  }
}
interface Window {
  EyeDropper: undefined | EyeDropper
}
