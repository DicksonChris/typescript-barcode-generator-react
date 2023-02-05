import * as React from 'react'
import { DrawerSidebar } from './DrawerSidebar'

type DrawerWrapperProps = {
  children?: React.ReactNode
}

export const DrawerWrapper = ({ children }: DrawerWrapperProps) => (
  <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">{children}</div>
    <DrawerSidebar />
  </div>
)
