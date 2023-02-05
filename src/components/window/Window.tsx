import '../../styles/window.css'
import closeIcon from '../../assets/close-icon.svg'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
import { CSSProperties, FC, ReactNode, useEffect } from 'react'

export interface WindowProps {
  id: string
  left: number
  top: number
  preview?: boolean
  children: React.ReactNode
}

const windowDraggableStyle: CSSProperties = {
  cursor: 'move',
  width: '100%',
}

const windowStyle: CSSProperties = {
  position: 'absolute',
  width: '100%',
}

const role = 'Window'

export const Window: FC<WindowProps> = ({ id, left, top, preview, children }) => {
  const [{ opacity, isDragging }, drag, dragPreview] = useDrag(() => {
    return {
      type: ItemTypes.WINDOW,
      item: { id, left, top },
      
      previewOptions: {
        captureDraggingState: true,
      },

      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        opacity: monitor.isDragging() ? 0 : 1,
      }),
    }
  }, [id, left, top])

  if (isDragging) {
    return <div ref={dragPreview} />
  }

  return (
    <div
      ref={dragPreview}
      className="window relative"
      style={{ ...windowStyle, left, top, opacity }}
    >
      <div
        ref={drag}
        role={role}
        style={{ ...windowDraggableStyle }}
        className="window-top flex justify-end bg-accent-focus h-12 rounded-t-xl items-center"
      >
        <div className="flex-1"/>
        <button className="flex-0 mx-4 btn btn-xxs btn-ghost btn-circle">
          <img src={closeIcon} alt="close window" />
        </button>
      </div>
      {children}
    </div>
  )
}

