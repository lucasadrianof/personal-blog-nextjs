import { useEffect } from 'react'

export default function useViewportCorrection () {
  const setViewportProperty = (doc: HTMLElement) => {
    let prevClientHeight: number

    const handleResize = () => {
      const { clientHeight } = doc

      if (clientHeight !== prevClientHeight) {
        requestAnimationFrame(() => {
          doc.style.setProperty('--vh', clientHeight * 0.01 + 'px')
          prevClientHeight = clientHeight
        })
      }
    }

    handleResize()

    return handleResize
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      setViewportProperty(document.documentElement),
      true
    )

    return () => {
      window.removeEventListener(
        'resize',
        setViewportProperty(document.documentElement),
        true
      )
    }
  }, [])
}
