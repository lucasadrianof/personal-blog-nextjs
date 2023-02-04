import { PortableText, PortableTextComponents } from '@portabletext/react'

import {
  CodeMark,
  H4Header,
  ImageComponent,
  Paragraph,
} from '@/components/PortableText/Components'
import type { Post } from '@/lib/sanity/types'

type BodyProps = Pick<Post, 'content'>

const components: PortableTextComponents = {
  block: {
    normal: Paragraph,
    h4: H4Header,
  },
  marks: {
    code: CodeMark,
  },
  types: {
    image: ImageComponent,
  },
}

export default function Body({ content }: BodyProps) {
  console.log(JSON.stringify(content, null, 4))
  return (
    <div className="mx-auto max-w-2xl">
      <PortableText components={components} value={content} />
    </div>
  )
}
