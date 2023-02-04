import { PortableTextMarkComponent } from '@portabletext/react'

interface LinkMark {
  _type: 'link'
  href: string
}

export const LinkMark: PortableTextMarkComponent<LinkMark> = ({
  value,
  children,
}) => {
  const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
  return (
    <a className="text-white underline" href={value?.href} target={target}>
      {children}
    </a>
  )
}
