import { getAllPostsSlugs, getPostBySlug } from '@/lib/sanity/sanity.client'
import { Post } from '@/lib/sanity/types'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Pick<Post, 'slug'>
}

export default async function Page({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) notFound()

  return <div className="text-white">Hi {post.slug}</div>
}

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}
