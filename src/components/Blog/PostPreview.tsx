import Link from 'next/link'

import { Post } from '@/lib/sanity/types'

type PostPreviewProps = Pick<Post, 'slug' | 'title'>

export default function PostPreview({ slug, title }: PostPreviewProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <span className="text-xl text-brand-background-element underline">
        {title}
      </span>
    </Link>
  )
}
