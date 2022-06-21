/** */
export const createSpacing = (splitArr = [1, 12, 24, 48, 96]) => {
  const arr = [splitArr[0]]
  for (let i = 0, magnification = 0.5; i < splitArr.length; i++) {
    magnification *= 2
    if (splitArr[i + 1]) {
      for (
        let current = Number(arr[arr.length - 1]) + magnification;
        current <= splitArr[i + 1];

      ) {
        arr.push(current)
        current = Number(arr[arr.length - 1]) + magnification
      }
    }
  }
  return Object.fromEntries(arr.map((v) => [v, `${v}px`]))
}
