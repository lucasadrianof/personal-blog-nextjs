'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'

import {
  CodeMark,
  H4Header,
  H5Header,
  ImageComponent,
  LinkMark,
  Paragraph,
} from '@/components/PortableText/Components'
import type { Post } from '@/lib/sanity/types'

type BodyProps = Pick<Post, 'content'>

const components: PortableTextComponents = {
  block: {
    normal: Paragraph,
    h4: H4Header,
    h5: H5Header,
  },
  marks: {
    code: CodeMark,
    link: LinkMark,
  },
  types: {
    image: ImageComponent,
  },
}

export default function Body ({ content }: BodyProps) {
  return (
    <div className='mx-auto max-w-2xl'>
      <PortableText components={components} value={content} />
    </div>
  )
}
