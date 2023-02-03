import Link from 'next/link'

import { Post } from '@/lib/sanity/types'

import Date from './Date'

type NextPostPreviewProps = Pick<Post, 'date' | 'excerpt' | 'slug' | 'title'>

export default function NextPostPreview({
  date,
  excerpt,
  slug,
  title,
}: NextPostPreviewProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm leading-snug">
        <Link className="hover:underline" href={`/blog/${slug}`}>
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-xs">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-sm leading-relaxed">{excerpt}</p>
    </div>
  )
}
