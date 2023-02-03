import type { Post } from '@/lib/sanity/types'

import PostPreview from './PostPreview'

interface MorePostsProps {
  posts: Post[]
}

export default function MorePosts({ posts }: MorePostsProps) {
  return (
    <section>
      <div className="pb-8 flex justify-between">
        {posts.map(({ date, slug, title }, index) => (
          <PostPreview
            key={slug}
            date={date}
            slug={slug}
            title={title}
            type={index === 0 ? 'Previous' : 'Next'}
          />
        ))}
      </div>
    </section>
  )
}
