import { PortableTextMarkComponent } from '@portabletext/react'

export const CodeMark: PortableTextMarkComponent = ({ children }) => (
  <code className="bg-[#212425]">{children}</code>
)
