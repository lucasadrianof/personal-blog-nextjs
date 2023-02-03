import PostPreview from '@/components/Blog/PostPreview'
import { getAllPosts } from '@/lib/sanity/sanity.client'

export default async function Blog() {
  const allPosts = await getAllPosts()

  return (
    <div className="py-4">
      <div className="flex flex-col gap-y-4">
        {allPosts.map((post) => (
          <PostPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}
