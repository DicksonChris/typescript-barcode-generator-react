import { CloseBtn } from '../../CloseBtn'
import closeIcon from '../../../assets/close-icon.svg'
import { MY_DRAWER_ID } from '../../../constants'

export const DrawerCloseBtn = () => {
  return (
    <div className="flex mx-2">
      <CloseBtn
        htmlFor={MY_DRAWER_ID}
        alt="Close sidebar"
        btnClasses="ml-auto drawer-overlay my-4"
      />
    </div>
  )
}
