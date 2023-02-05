export const RecentProjects = () => {
  return (
    <>
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
    </>
  )
}

