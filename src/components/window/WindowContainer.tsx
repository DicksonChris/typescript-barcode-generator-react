import { CSSProperties, ReactNode, useCallback, useState } from 'react'
import { Window } from './Window'

export interface WindowContainerProps {
  windowId: string,
  children: ReactNode
}

const windowContainerStyle: CSSProperties = {
  width: 'auto',
  height: '80vmin', // TODO: Hacky, make better
  position: 'relative',
  backgroundColor: 'green'
}

export const WindowContainer = ({ windowId, children }: WindowContainerProps) => {
  return (
    <div style={windowContainerStyle}>
      <Window windowId={windowId}>
        {children}
      </Window>
    </div>
  )
}
