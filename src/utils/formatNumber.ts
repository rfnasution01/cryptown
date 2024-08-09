export function formatNumberValue(value: number) {
  if (value < 0) {
    return value?.toFixed(8)
  } else if (value < 10) {
    return value?.toFixed(6)
  } else if (value < 1000) {
    return value?.toFixed(4)
  } else {
    return value?.toFixed(2)
  }
}
