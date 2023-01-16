import * as React from 'react'

type DrawerWrapperProps = {
  children?: React.ReactNode
}

const DrawerWrapper = ({ children }: DrawerWrapperProps) => (
  <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">{children}</div>
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {/* Sidebar content here */}
        <li className='mb-2'>
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost ml-auto drawer-overlay">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </li>
        <li>
          <a href='#'>New Project</a>
        </li>
        <div className="divider"></div>
        <li className="menu-title">
          <span>Recent</span>
        </li>
        <li className="hover-bordered">
          <a>
            <img src="https://picsum.photos/300/201" />{' '}
          </a>
        </li>
        <li className="hover-bordered">
          <a>
            <img src="https://picsum.photos/301/200" />{' '}
          </a>
        </li>
        <li className="hover-bordered">
          <a>
            <img src="https://picsum.photos/300/200" />{' '}
          </a>
        </li>
        <li>
          <a className="link link-primary" href="#">
            See more...
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default DrawerWrapper
