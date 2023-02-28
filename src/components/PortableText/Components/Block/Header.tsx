import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortableTextBlockComponent, toPlainText } from '@portabletext/react'

import useScrollIntoLink from '@/hooks/useScrollIntoLink'

/**
 * Replaces all non-alpha characters with a white space,
 * trim any spaces from the start/end, transform the text to lower
 * and replace all remaining white-spaces with a "-"
 */
export const slugify = (text: string) =>
  text
    .replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim()
    .replace(/\s/g, '-')

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

