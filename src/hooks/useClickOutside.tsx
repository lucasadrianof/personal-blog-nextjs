import { RefObject, useEffect, useState } from 'react'

export default function useClickOutside (ref: RefObject<HTMLElement | null>) {
  const [clickOutside, setClickOutside] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) =>
      setClickOutside(!ref.current?.contains(event.target as HTMLElement))

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [ref])

  return clickOutside
}
