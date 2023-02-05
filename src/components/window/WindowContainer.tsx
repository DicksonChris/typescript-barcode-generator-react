import { CSSProperties, ReactNode, useCallback, useState } from 'react'
import { ItemTypes } from '../../ItemTypes'
import { DragPreviewImage, useDrop } from 'react-dnd'
import type { DragItem } from './interfaces'
import type { XYCoord } from 'react-dnd'
import { Window } from './Window'

export interface WindowContainerProps {
  children: ReactNode
}

export interface ContainerState {
  windows: {
    [key: string]: { top: number; left: number; children?: ReactNode }
  }
}

const windowContainerStyle: CSSProperties = {
  width: 'auto',
  height: '80vmin', // TODO: Hacky, make better
  position: 'relative',
}

export const WindowContainer = ({ children }: WindowContainerProps) => {
  const [windows, setWindows] = useState<ContainerState['windows']>({
    selectProjectWindowState: {
      top: 0,
      left: 0,
      children,
    },
  })

  const moveWindow = useCallback(
    (id: string, left: number, top: number) => {
      setWindows((windows) => ({
        ...windows,
        [id]: { left, top, children: windows[id].children },
      }))
    },
    [windows, setWindows]
  )
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.WINDOW,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)
        moveWindow(item.id, left, top)
        return undefined
      },
    }),
    [moveWindow]
  )
  return (
    <div ref={drop} style={windowContainerStyle}>
      {Object.keys(windows).map((key) => {
        const { left, top, children } = windows[key]
        return (
          <Window key={key} id={key} left={left} top={top}>
            {children}
          </Window>
        )
      })}
    </div>
  )
}
