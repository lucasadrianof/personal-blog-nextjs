import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import Date from '@/components/Blog/Date'
import { Post } from '@/lib/sanity/types'

interface PostNavigationLinkProps
  extends Pick<Post, 'date' | 'slug' | 'title'> {
  type: 'Previous' | 'Next'
}

export default function PostNavigationLink({
  date,
  slug,
  title,
  type,
}: PostNavigationLinkProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex items-center">
        {type === 'Previous' && (
          <FontAwesomeIcon className="mr-2 text-white" icon={faChevronLeft} />
        )}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">{type} Post</span>
          <span className="text-lg font-bold text-white">{title}</span>
          <Date className="text-xs" dateString={date} />
        </div>
        {type === 'Next' && (
          <FontAwesomeIcon className="ml-2 text-white" icon={faChevronRight} />
        )}
      </div>
    </Link>
  )
}
