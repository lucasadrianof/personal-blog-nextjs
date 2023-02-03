import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { Post } from '@/lib/sanity/types'

import Date from './Date'

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
          <FontAwesomeIcon className="text-white mr-2" icon={faChevronLeft} />
        )}
        <div className="flex flex-col">
          <span className="text-gray-400 text-sm">{type} Post</span>
          <span className="font-bold text-lg text-white">{title}</span>
          <Date className="text-xs" dateString={date} />
        </div>
        {type === 'Next' && (
          <FontAwesomeIcon className="text-white ml-2" icon={faChevronRight} />
        )}
      </div>
    </Link>
  )
}
