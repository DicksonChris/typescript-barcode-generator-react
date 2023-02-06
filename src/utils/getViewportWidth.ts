export function getViewportWidth() {
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  if (width <= BREAKPOINTS.sm) return 'sm'
  if (width <= BREAKPOINTS.md) return 'md'
  if (width <= BREAKPOINTS.lg) return 'lg'
  if (width <= BREAKPOINTS.xl) return 'xl'
  return '2xl'
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}
