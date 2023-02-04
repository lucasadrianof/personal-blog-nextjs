import { PortableText, PortableTextComponents } from '@portabletext/react'

import { H4Header } from '@/components/PortableText/Components/Header'
import ImageComponent from '@/components/PortableText/Components/ImageComponent'
import type { Post } from '@/lib/sanity/types'

type BodyProps = Pick<Post, 'content'>

const components: PortableTextComponents = {
  block: {
    h4: H4Header,
  },
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
