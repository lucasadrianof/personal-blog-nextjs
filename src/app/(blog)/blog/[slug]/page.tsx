import { notFound } from 'next/navigation'

import Body from '@/components/Blog/Body'
import Header from '@/components/Blog/Header'
import MorePosts from '@/components/Blog/MorePosts'
import SectionSeparator from '@/components/Blog/SectionSeparator'
import {
  getAllPostsSlugs,
  getMorePosts,
  getPostBySlug,
} from '@/lib/sanity/sanity.client'
import type { Post } from '@/lib/sanity/types'

type PageProps = {
  params: Pick<Post, 'slug'>
}

export default async function Page({ params: { slug } }: PageProps) {
  const post = await getPostBySlug(slug)
  const morePosts = await getMorePosts(slug)

  if (!post) notFound()

  console.log(JSON.stringify({ post, morePosts }, null, 4))

  return (
    <>
      <article>
        <Header
          author={post.author}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          title={post.title}
        />
        <Body content={post.content} />
      </article>
      <SectionSeparator />
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </>
  )
}

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}