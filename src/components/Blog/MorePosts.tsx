import cn from 'classnames'

import PostNavigationLink from '@/components/Blog/PostNavigationLink'
import type { Post } from '@/lib/sanity/types'

interface MorePostsProps {
  nextPost?: Post
  previousPost?: Post
}

export default function MorePosts ({ previousPost, nextPost }: MorePostsProps) {
  return (
    <section>
      <div
        className={cn('pb-8 flex', {
          'justify-between': !!previousPost && !!nextPost,
          'justify-start': !!previousPost && !nextPost,
          'justify-end': !previousPost && !!nextPost,
        })}
      >
        {previousPost && (
          <PostNavigationLink
            date={previousPost.date}
            key={previousPost.slug}
            slug={previousPost.slug}
            title={previousPost.title}
            type='Previous'
          />
        )}
        {nextPost && (
          <PostNavigationLink
            date={nextPost.date}
            key={nextPost.slug}
            slug={nextPost.slug}
            title={nextPost.title}
            type='Next'
          />
        )}
      </div>
    </section>
  )
}
