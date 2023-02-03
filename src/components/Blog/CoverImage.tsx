import Image from 'next/image'
import Link from 'next/link'

import { urlForImage } from '@/lib/sanity/sanity.image'
import { Post } from '@/lib/sanity/types'

interface CoverImageProps extends Pick<Post, 'coverImage' | 'slug' | 'title'> {
  priority: boolean
}

export default function CoverImage({
  coverImage,
  priority,
  slug,
  title,
}: CoverImageProps) {
  return (
    <div className="sm:mx-0">
      <Link aria-label={title} href={`/blog/${slug}`}>
        <div className="shadow-sm transition-shadow duration-200 hover:shadow-md">
          <Image
            alt={`Cover Image for ${title}`}
            className="h-auto w-full"
            height={1000}
            width={2000}
            sizes="100vw"
            src={urlForImage(coverImage).height(1000).width(2000).url()}
            priority={priority}
          />
        </div>
      </Link>
    </div>
  )
}
