import type { Post } from '@/lib/sanity/types'

import NextPostPreview from './NextPostPreview'

interface MorePostsProps {
  posts: Post[]
}

export default function MorePosts({ posts }: MorePostsProps) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Posts
      </h2>
      <div className="mb-12 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map(({ date, excerpt, slug, title }) => (
          <NextPostPreview
            key={slug}
            date={date}
            excerpt={excerpt}
            slug={slug}
            title={title}
          />
        ))}
      </div>
    </section>
  )
}
