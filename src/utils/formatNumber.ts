export function formatNumberValue(value: number) {
  if (value < 0) {
    return value?.toFixed(8)
  } else if (value < 10) {
    return value?.toFixed(6)
  } else if (value < 1000) {
    return value?.toFixed(4)
  } else if (value >= 1000 && value < 1_000_000) {
    return (value / 1_000).toFixed(2) + 'K'
  } else if (value >= 1_000_000 && value < 1_000_000_000) {
    return (value / 1_000_000).toFixed(2) + 'M'
  } else if (value >= 1_000_000_000 && value < 1_000_000_000_000) {
    return (value / 1_000_000_000).toFixed(2) + 'B'
  } else {
    return (value / 1_000_000_000_000).toFixed(2) + 'T'
  }
}
