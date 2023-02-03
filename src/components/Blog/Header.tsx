import type { Post } from '@/lib/sanity/types'
import CoverImage from './CoverImage'
import Date from './Date'

type HeaderProps = Pick<Post, 'coverImage' | 'date' | 'slug' | 'title'>

export default function Header({ coverImage, date, slug, title }: HeaderProps) {
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
      <div className="mx-auto max-w-2xl">
        <Date dateString={date} />
      </div>
    </>
  )
}
