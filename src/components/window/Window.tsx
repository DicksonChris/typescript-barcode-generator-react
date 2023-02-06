import React, { useEffect, useState } from 'react'
import { CloseBtn } from '../CloseBtn'
import { CSSProperties, FC } from 'react'
import useDragger from '../../hooks/useDragger'
import useResizeFixer from '../../hooks/useResizeFixer'
import { NEW_PROJECT_WINDOW_ID } from '../../constants'
import '../../styles/window.css'
import { getViewportWidth } from '../../utils/getViewportWidth'

export interface WindowProps {
  windowId: string
  children: React.ReactNode
}

const windowDraggableStyle: CSSProperties = {
  cursor: 'move',
}

const windowStyle: CSSProperties = {
  position: 'absolute',
}

export const Window: FC<WindowProps> = ({ windowId, children }) => {
  const [breakpoint, setBreakpoint] = useState<string | undefined>(undefined)

  useEffect(() => {
    setBreakpoint(getViewportWidth())
  }, [])

  useDragger(windowId)
  useResizeFixer(windowId)

  return (
    <div
      id={windowId} // The id of the window used by the useResizeFixer hook and the useDragger hook
      className="window relative my-modal-box p-0"
      style={{ ...windowStyle, maxWidth: breakpoint === 'sm' ? '100vw' : '90%' }}
    >
      {breakpoint !== 'sm' ? (
        <div
          id={windowId + '-handle'} // The id of the handle is used by the useDragger hook
          style={windowDraggableStyle}
          className="window-top flex justify-end bg-accent-focus rounded-t-xl items-end py-2"
        >
          <CloseBtn htmlFor={NEW_PROJECT_WINDOW_ID} alt="Close window" btnClasses="mx-4" />
        </div>
      ) : null}
      {children}
    </div>
  )
}
