export function formatTimeAgo(timestamp) {
  const now = Date.now()
  const secondsPast = (now - timestamp) / 1000

  if (secondsPast < 60) {
    return `${Math.floor(secondsPast)} seconds ago`
  } else if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60)
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  } else if (secondsPast < 86400) {
    // < 1 day
    const hours = Math.floor(secondsPast / 3600)
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (secondsPast < 2592000) {
    // < 30 days
    const days = Math.floor(secondsPast / 86400)
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (secondsPast < 31622400) {
    // < 366 days
    const months = Math.floor(secondsPast / 2592000)
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else {
    const years = Math.floor(secondsPast / 31622400)
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
}
