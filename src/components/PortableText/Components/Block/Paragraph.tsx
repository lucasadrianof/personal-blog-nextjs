import { PortableTextBlockComponent } from '@portabletext/react'

export const Paragraph: PortableTextBlockComponent = ({ children }) => (
  <p className="text-gray-400">{children}</p>
)
