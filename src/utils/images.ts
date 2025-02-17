export function getImageUrl(imagePath: string) {
  if (import.meta.env.VITE_BASE_URL) {
    return `${import.meta.env.VITE_BASE_URL}${imagePath}`
  }
  return imagePath
}