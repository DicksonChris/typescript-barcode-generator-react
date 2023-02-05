import * as React from 'react'
import { DrawerSidebarContent } from './DrawerSidebarContent'

export const DrawerSidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <DrawerSidebarContent />
    </div>
  )
}
