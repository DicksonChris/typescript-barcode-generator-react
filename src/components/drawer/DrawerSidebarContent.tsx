import * as React from 'react'
import { DrawerCloseBtn } from './DrawerSidebarContentItems/DrawerCloseBtn'
import { NewProjectBtn } from './DrawerSidebarContentItems/NewProjectBtn'
import { RecentProjects } from './DrawerSidebarContentItems/RecentProjects'

export const DrawerSidebarContent = () => {
  return (
      <ul className="menu w-80 bg-base-100 text-base-content">
        <DrawerCloseBtn />
        {/* Sidebar content here */}
        <NewProjectBtn />
        <div className="divider" />
        <RecentProjects />
      </ul>
  )
}
