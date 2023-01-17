import React from 'react'
import DrawerWrapper from './components/drawer/DrawerWrapper'
import SelectContent from './SelectContent'
import Window from './components/window/Window'
import { WindowProvider } from './components/window/WindowContext'

const Layout = () => {
  return (
    <DrawerWrapper>
      {/* NAVBAR START */}
      <div className="navbar bg-base-300 sticky top-0 z-50 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-square drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NAVBAR END */}
      {/* CONTENT START */}
      <div className="xl:container mx-auto">
        <WindowProvider>
          <Window>
            <SelectContent />
          </Window>
        </WindowProvider>
      </div>
      {/* CONTENT END */}
    </DrawerWrapper>
  )
}

export default Layout
