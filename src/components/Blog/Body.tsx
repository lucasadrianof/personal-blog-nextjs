import { PortableText, PortableTextComponents } from '@portabletext/react'

import type { Post } from '@/lib/sanity/types'
import ImageComponent from '@/components/PortableText/Components/ImageComponent'

type BodyProps = Pick<Post, 'content'>

const components: PortableTextComponents = {
  types: {
    image: ImageComponent,
  },
}

export default function Body({ content }: BodyProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <PortableText components={components} value={content} />
    </div>
  )
}
