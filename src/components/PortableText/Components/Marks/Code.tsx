import { PortableTextMarkComponent } from '@portabletext/react'

export const CodeMark: PortableTextMarkComponent = ({ children }) => (
  <code className='bg-gray-850'>{children}</code>
)
