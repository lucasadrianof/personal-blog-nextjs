import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PortableTextBlockComponent, toPlainText } from '@portabletext/react'

interface HeaderProps {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const Header =
  (Element: React.FC<HeaderProps>): PortableTextBlockComponent =>
  // eslint-disable-next-line react/display-name
  ({ value, children }) => {
    const slug = slugify(toPlainText(value))

    return (
      <Element className="cursor-pointer text-white mt-6">
        <a href={`#${slug}`}>
          <FontAwesomeIcon className="pr-1 text-sm" icon={faHashtag} />
          {children}
        </a>
      </Element>
    )
  }

export const H4Header = Header(({ children, className }) => (
  <h4 className={`${className} font-bold`}>{children}</h4>
))
