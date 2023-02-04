import { PortableTextBlockComponent } from '@portabletext/react'

export const Paragraph: PortableTextBlockComponent = ({ children, value }) => {
  const hasValue =
    value.children.filter(({ text }) => text.trim().length > 0).length > 0

  return <p className="text-gray-400">{hasValue ? children : <br />}</p>
}
