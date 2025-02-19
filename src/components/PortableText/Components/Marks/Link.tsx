import { PortableTextMarkComponent } from '@portabletext/react'
import { useRef } from 'react'

import { slugify } from '@/components/PortableText/Components/Block/Header'

interface LinkMarkProps {
  _type: 'link'
  href: string
}

const ExternalLink: PortableTextMarkComponent<LinkMarkProps> = ({
  children,
  value,
}) => (
  <a
    className='text-white underline'
    href={value?.href}
    rel='noreferrer'
    target='_blank'
  >
    {children}
  </a>
)

const InternalLink: PortableTextMarkComponent<LinkMarkProps> = ({
  children,
  value,
}) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const slug = slugify(value?.href || '')

  const scrollToHeader = () => {
    const links = document.querySelectorAll(`a[href='${slug}']`)
    const headerLink = Array.from(links).find(
      (link) => !ref.current?.isSameNode(link)
    )

    headerLink?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <a
      className='text-white underline'
      href={value?.href}
      onClick={scrollToHeader}
      ref={ref}
    >
      {children}
    </a>
  )
}

export const LinkMark: PortableTextMarkComponent<LinkMarkProps> = ({ value, ...props }) => {
  const isExternalLink = (value?.href || '').startsWith('http')
  const Link = isExternalLink ? ExternalLink : InternalLink

  return <Link value={value} {...props} />
}
