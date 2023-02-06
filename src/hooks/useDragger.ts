import { useEffect, useRef } from 'react'
import { getViewportWidth } from '../utils/getViewportWidth'

type Coords = {
  startX: number
  startY: number
  lastX: number
  lastY: number
}

function useDragger(id: string): void {
  const isClicked = useRef<boolean>(false)

  const coords = useRef<Coords>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  })

  useEffect(() => {
    // check breakpoint and early return if equal to 'sm'
    const breakpoint = getViewportWidth()
    if (breakpoint === 'sm') return

    // Get the target element using the passed id
    const target = document.getElementById(id)
    if (!target) throw new Error("Element with given id doesn't exist")

    // Get the handle element
    const handle = document.getElementById(id + '-handle')
    if (!handle) throw new Error("Handle element with id 'handle' doesn't exist")

    // Get the parent container of the target element
    const container = target.parentElement
    if (!container) throw new Error('target element must have a parent')

    // Fix the initial width of the target element
    target.style.width = `${target.offsetWidth}px`
    // Center the target element horizontally and set its initial y position
    target.style.top = '76px'
    target.style.left = `${container.offsetWidth / 2 - target.offsetWidth / 2}px`

    const onMouseDown = (event: MouseEvent) => {
      event.preventDefault()
      isClicked.current = true
      coords.current.startX = event.clientX - target.offsetLeft
      coords.current.startY = event.clientY - target.offsetTop
    }

    const onMouseUp = (event: MouseEvent) => {
      isClicked.current = false
      coords.current.lastX = target.offsetLeft
      coords.current.lastY = target.offsetTop
    }

    // event handler for mouse move event on the container
    const onMouseMove = (event: MouseEvent) => {
      if (!isClicked.current) return
      event.preventDefault()

      const nextX = event.clientX - coords.current.startX
      const nextY = event.clientY - coords.current.startY

      target.style.top = `${nextY}px`
      target.style.left = `${nextX}px`
    }

    // Add event listener to window for resizing
    const onResize = () => {
      target.style.width = 'auto'
    }

    handle.addEventListener('mousedown', onMouseDown)
    handle.addEventListener('mouseup', onMouseUp)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseUp)

    const cleanup = () => {
      handle.removeEventListener('mousedown', onMouseDown)
      handle.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseUp)
    }

    return cleanup
  }, [id])
}

export default useDragger
