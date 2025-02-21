import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef, MouseEventHandler, Ref } from 'react'

interface MenuToggleButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  open: boolean
}

function MenuToggleButton (
  { onClick, open }: MenuToggleButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      aria-label='Menu Button'
      className='flex size-9 items-center justify-center rounded-full bg-brand-background-element'
      onClick={onClick}
      ref={ref}
    >
      <FontAwesomeIcon
        className='text-2xl text-white'
        icon={open ? faClose : faBars}
      />
    </button>
  )
}

export default forwardRef(MenuToggleButton)
