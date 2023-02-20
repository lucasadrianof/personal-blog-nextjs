import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortableTextBlockComponent, toPlainText } from '@portabletext/react'
import { useEffect, useRef } from 'react'

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const Header:PortableTextBlockComponent = ({ children, value }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const slug = slugify(toPlainText(value))

  const scrollIntoLink = () => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  useEffect(() => {
    const hash = ref.current?.hash.replace('#', '') || ''
    const hashParams = new URLSearchParams(window.location.hash.substring(1))

    if (ref.current && hashParams.has(hash)) {
      scrollIntoLink()
    }
  }, [])

  return (
    <a href={`#${slug}`} onClick={scrollIntoLink} ref={ref}>
      <FontAwesomeIcon className="pr-1 text-sm" icon={faHashtag} />
      {children}
    </a>
  )
}

export const H4Header:PortableTextBlockComponent = ({ ...props }) =>
  <h4 className="cursor-pointer font-bold text-white mt-6"><Header {...props} /></h4>

export const H5Header:PortableTextBlockComponent = ({ ...props }) =>
  <h5 className="cursor-pointer font-bold text-white mt-6"><Header {...props} /></h5>

