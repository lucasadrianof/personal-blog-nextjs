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
    <Link
      className="bg-[#212425] text-white rounded-xl p-4"
      href={`/blog/${slug}`}
    >
      <div className="flex flex-col">
        <Date className="text-sm" dateString={date} />
        <span className="text-xl">{title}</span>
        <span>{excerpt}</span>
      </div>
    </Link>
  )
}
