import AuthorAvatar from '@/components/Blog/AuthorAvatar'
import CoverImage from '@/components/Blog/CoverImage'
import Date from '@/components/Blog/Date'
import type { Post } from '@/lib/sanity/types'

type HeaderProps = Pick<
  Post,
  'author' | 'coverImage' | 'date' | 'slug' | 'title'
>

export default function Header({
  author,
  coverImage,
  date,
  slug,
  title,
}: HeaderProps) {
  return (
    <>
      <h1 className="after-effect after:ml-2 mt-12 mb-2 xs:mt-6">{title}</h1>
      <div className="mb-6 text-sm">
        <Date dateString={date} />
      </div>
      <div className="hidden md:mb-12 md:block">
        <AuthorAvatar {...author} />
      </div>
      {coverImage &&
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage
            coverImage={coverImage}
            slug={slug}
            title={title}
            priority
          />
        </div>
      }
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <AuthorAvatar {...author} />
        </div>
      </div>
    </>
  )
}
