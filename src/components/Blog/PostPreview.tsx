import Link from 'next/link'

import { Post } from '@/lib/sanity/types'

import Date from './Date'

type PostPreviewProps = Pick<Post, 'date' | 'excerpt' | 'slug' | 'title'>

export default function PostPreview({
  date,
  excerpt,
  slug,
  title,
}: PostPreviewProps) {
  return (
    <Link className="text-white" href={`/blog/${slug}`}>
      <div className="flex flex-col">
        <Date className="text-sm" dateString={date} />
        <span className="text-xl">{title}</span>
        <span>{excerpt}</span>
      </div>
    </Link>
  )
}
