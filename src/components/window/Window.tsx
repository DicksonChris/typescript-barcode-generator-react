import React, { useState, useEffect, useContext } from 'react'
import '../../styles/window.css'
import closeIcon from '../../assets/close-icon.svg'
import { WindowContext } from './WindowContext'

type WindowProps = {
  children: React.ReactNode
}

const Window = ({ children }: WindowProps) => {
  const { initial, offset, setInitial, setOffset } = useContext(WindowContext)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    setInitial({ x: event.pageX, y: event.pageY })
    setIsDragging(true)
  }

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (event: MouseEvent) => {
        event.preventDefault()
        setOffset({ x: event.pageX - initial.x, y: event.pageY - initial.y })
      }
      document.addEventListener('mousemove', handleMouseMove)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isDragging, initial])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', () => setIsDragging(false))
      return () => {
        document.removeEventListener('mouseup', () => setIsDragging(false))
      }
    }
  }, [isDragging])

  return (
    <div className="window" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
      <div
        className="window-top flex justify-end bg-accent-focus h-12 rounded-t-xl items-center"
        onMouseDown={handleMouseDown}
      >
        <div className="flex-1"></div>
        <button className="flex-0 mx-4 btn btn-xxs btn-ghost btn-circle">
          <img src={closeIcon} alt="close window" />
        </button>
      </div>
      {children}
    </div>
  )
}

export default Window
