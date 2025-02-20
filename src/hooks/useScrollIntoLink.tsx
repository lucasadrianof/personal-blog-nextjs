import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'

type LinkRef = RefObject<HTMLAnchorElement | null>
type ScrollIntoLink = () => void

export default function useScrollIntoLink (): [LinkRef, ScrollIntoLink] {
  const ref = useRef<HTMLAnchorElement>(null)

  const scrollIntoLink = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  useEffect(() => {
    const hash = ref.current?.hash.replace('#', '') || ''
    const hashParams = new URLSearchParams(window.location.hash.substring(1))

    if (ref.current && hashParams.has(hash)) {
      scrollIntoLink()
    }
  }, [])

  return [ref, scrollIntoLink]
}
