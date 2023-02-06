import { CSSProperties, ReactNode } from 'react'
import { NEW_PROJECT_WINDOW_ID } from '../../constants'
import { addModalOpenClass } from './addModalOpenClass'
import { Window } from './Window'

export interface WindowContainerProps {
  windowId: string
  children: ReactNode
}

const windowContainerStyle: CSSProperties = {
  overflowY: 'scroll'
}

export const WindowContainer = ({ windowId, children }: WindowContainerProps) => {
  const handleModalClick = (event: React.MouseEvent) => {
    // Only closes the modal if the click target is outside the window
    if (event.target === event.currentTarget) {
      addModalOpenClass(false)
    }
  }

  return (
    <>
      <input type="checkbox" id={NEW_PROJECT_WINDOW_ID} className="modal-toggle" />
      <div className="modal" style={windowContainerStyle} id={`${NEW_PROJECT_WINDOW_ID}-modal`}
        onClick={handleModalClick}
      >
        <Window windowId={windowId}>{children}</Window>
      </div>
    </>
  )
}
