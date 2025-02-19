import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Body from '@/components/Blog/Body'
import Header from '@/components/Blog/Header'
import MorePosts from '@/components/Blog/MorePosts'
import SectionSeparator from '@/components/Blog/SectionSeparator'
import Tags from '@/components/Blog/Tags'
import Commento from '@/components/Commento/Commento'
import { generateMetadata as generateMetadataHelper } from '@/lib/generateMetadata'
import { getAllPostsSlugs, getPostBySlug } from '@/lib/sanity/sanity.client'
import type { Post } from '@/lib/sanity/types'

type PageProps = {
  params: Pick<Post, 'slug'>
}

export async function generateMetadata ({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return generateMetadataHelper({ titlePrefix: post.title })
}

export default async function Page ({ params: { slug } }: PageProps) {
  const { nextPost, previousPost, ...post } = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className='flex flex-col'>
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
      {post.tags && <Tags className='self-end' tags={post.tags} />}
      <MorePosts nextPost={nextPost} previousPost={previousPost} />
      <Commento />
    </div>
  )
}

export async function generateStaticParams () {
  return await getAllPostsSlugs()
}
