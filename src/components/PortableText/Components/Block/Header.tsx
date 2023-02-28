import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortableTextBlockComponent, toPlainText } from '@portabletext/react'

import useScrollIntoLink from '@/hooks/useScrollIntoLink'

export const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9#]+/g, '-')

const Header:PortableTextBlockComponent = ({ children, value }) => {
  const [ref, scrollIntoLink] = useScrollIntoLink()
  const slug = slugify(toPlainText(value))

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

