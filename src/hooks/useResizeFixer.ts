import { useState, useEffect } from 'react'
import { getViewportWidth } from '../utils/getViewportWidth'

const useResizeFixer = (id: string) => {
  const [resizing, setResizing] = useState(false)

  useEffect(() => {
    // check breakpoint and early return if equal to 'sm'
    const breakpoint = getViewportWidth()
    if (breakpoint === 'sm') return

    // Get the target element using the passed id
    const target = document.getElementById(id)
    if (!target) throw new Error("Element with given id doesn't exist")

    let timeoutId: number | undefined

    const onResizeStart = () => {
      setResizing(true)
      target.style.width = 'auto'

      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        target.style.width = `${target.offsetWidth}px`
        setResizing(false)
      }, 100)
    }

    window.addEventListener('resize', onResizeStart)

    return () => {
      window.removeEventListener('resize', onResizeStart)
    }
  }, [id])

  return resizing
}

export default useResizeFixer
