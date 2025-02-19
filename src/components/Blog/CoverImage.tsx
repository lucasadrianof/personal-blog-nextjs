import Image from 'next/image'
import Link from 'next/link'
import type { Image as ImageType } from 'sanity'

import { urlForImage } from '@/lib/sanity/sanity.image'
import { Post } from '@/lib/sanity/types'

interface CoverImageProps extends Pick<Post, 'slug' | 'title'> {
  coverImage: ImageType
  priority: boolean
}

export default function CoverImage ({
  coverImage,
  priority,
  slug,
  title,
}: CoverImageProps) {
  return (
    <div className='sm:mx-0'>
      <Link aria-label={title} href={`/blog/${slug}`}>
        <div className='shadow-sm transition-shadow duration-200 hover:shadow-md'>
          <Image
            alt={`Cover Image for ${title}`}
            className='h-auto w-full'
            height={1000}
            priority={priority}
            sizes='100vw'
            src={urlForImage(coverImage).height(1000).width(2000).url()}
            width={2000}
          />
        </div>
      </Link>
    </div>
  )
}
