import { notFound } from 'next/navigation'

import Body from '@/components/Blog/Body'
import Header from '@/components/Blog/Header'
import { getAllPostsSlugs, getPostBySlug } from '@/lib/sanity/sanity.client'
import type { Post } from '@/lib/sanity/types'

type PageProps = {
  params: Pick<Post, 'slug'>
}

export default async function Page({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) notFound()

  console.log(JSON.stringify(post, null, 4))

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
    </>
  )
}

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}
