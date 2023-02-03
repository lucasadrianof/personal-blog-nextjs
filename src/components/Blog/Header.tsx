import type { Post } from '@/lib/sanity/types'
import CoverImage from './CoverImage'

export default function PostHeader({
  coverImage,
  date,
  slug,
  title,
}: Pick<Post, 'coverImage' | 'date' | 'slug' | 'title'>) {
  return (
    <>
      <h1 className="after-effect after:left-52 mt-12 xs:mt-6 lg:mt-0">
        {title}
      </h1>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage
          coverImage={coverImage}
          slug={slug}
          title={title}
          priority
        />
      </div>
    </>
  )
}
