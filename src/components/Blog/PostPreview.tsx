import Link from 'next/link'

import Date from '@/components/Blog/Date'
import Tags from '@/components/Blog/Tags'
import { Post } from '@/lib/sanity/types'

type PostPreviewProps = Pick<Post, 'date' | 'slug' | 'tags' | 'title'>

export default function PostPreview({
  date,
  slug,
  tags,
  title,
}: PostPreviewProps) {
  console.log({ tags })
  return (
    <Link
      className="bg-[#212425] text-white rounded-xl p-4"
      href={`/blog/${slug}`}
    >
      <div className="flex flex-col">
        <Date className="text-sm" dateString={date} />
        <span className="text-xl">{title}</span>
        {tags && <Tags tags={tags} />}
      </div>
    </Link>
  )
}
