import { notFound } from 'next/navigation'

import { getAllPostsSlugs, getPostBySlug } from '@/lib/sanity/sanity.client'
import Header from '@/components/Blog/Header'
import { Post } from '@/lib/sanity/types'

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
        <Header {...post} />
      </article>
    </>
  )
}

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}
