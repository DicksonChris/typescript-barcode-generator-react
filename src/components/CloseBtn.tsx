import closeIcon from '../assets/close-icon.svg'
import { NEW_PROJECT_WINDOW_ID } from '../constants'
import { addModalOpenClass } from './window/addModalOpenClass'

type CloseBtnProps = {
  htmlFor: string
  btnClasses?: string
  alt?: string
}

export const CloseBtn = ({ htmlFor, btnClasses = '', alt = '' }: CloseBtnProps) => {
  return (
    <label htmlFor={htmlFor} className={`btn btn-xs btn-ghost btn-circle p-[0] ${btnClasses}`}
    onClick={(event) => {
      if (htmlFor === NEW_PROJECT_WINDOW_ID) {
        event.preventDefault()
        addModalOpenClass(false)
      }
    }}
    >
      <img src={closeIcon} alt={alt} />
    </label>
  )
}
