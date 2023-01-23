import '../../styles/window.css'
import closeIcon from '../../assets/close-icon.svg'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../ItemTypes'
import { CSSProperties, FC, ReactNode } from 'react'

export interface WindowProps {
  id: string
  left: number
  top: number
  hideSourceOnDrag: boolean
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

const Window: FC<WindowProps> = ({ id, left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: ItemTypes.WINDOW,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }
  }, [id, left, top])

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }

  return (
    <div className="window relative" style={{ ...windowStyle, left, top }}>
      <div
        ref={drag}
        role={role}
        style={windowDraggableStyle}
        className="window-top flex justify-end bg-accent-focus h-12 rounded-t-xl items-center"
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
