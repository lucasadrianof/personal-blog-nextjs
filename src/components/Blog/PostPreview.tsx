import Link from 'next/link'

import Date from '@/components/Blog/Date'
import { Post } from '@/lib/sanity/types'

type PostPreviewProps = Pick<Post, 'date' | 'slug' | 'title'>

export default function PostPreview({ date, slug, title }: PostPreviewProps) {
  return (
    <Link
      className="bg-[#212425] text-white rounded-xl p-4"
      href={`/blog/${slug}`}
    >
      <div className="flex flex-col">
        <Date className="text-sm" dateString={date} />
        <span className="text-xl">{title}</span>
      </div>
    </Link>
  )
}
