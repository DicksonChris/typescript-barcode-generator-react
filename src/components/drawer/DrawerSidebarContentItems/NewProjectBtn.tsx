import { MY_DRAWER_ID, NEW_PROJECT_WINDOW_ID } from '../../../constants'
import useCheckboxToggler from '../../../hooks/useCheckboxToggler'
import { addModalOpenClass } from '../../window/addModalOpenClass'

export const NewProjectBtn = () => {
  const [isDrawerChecked, toggleCheckboxMyDrawer] = useCheckboxToggler(MY_DRAWER_ID)
  const [isNewProjectChecked] = useCheckboxToggler(NEW_PROJECT_WINDOW_ID)

  return (
    <li>
      <label
        htmlFor={NEW_PROJECT_WINDOW_ID}
        className="btn btn-primary mx-2"
        onClick={(event) => {
          event.preventDefault()
          // Always close the drawer before opening the new project window
          if (!isDrawerChecked) {
            toggleCheckboxMyDrawer()
          }
          // Only opens the new project window if it's not already open
          addModalOpenClass(true)
        }}
      >
        New Project
      </label>
    </li>
  )
}
