import * as React from 'react'
import { CloseBtn } from './DrawerSidebarContentItems/CloseBtn'
import { NewProjectBtn } from './DrawerSidebarContentItems/NewProjectBtn'
import { RecentProjects } from './DrawerSidebarContentItems/RecentProjects'

export const DrawerSidebarContent = () => {
  return (
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* Sidebar content here */}
      <CloseBtn />
      <NewProjectBtn />
      <div className="divider" />
      <RecentProjects />
    </ul>
  )
}
