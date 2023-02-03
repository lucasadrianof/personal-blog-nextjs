import 'server-only'

import { createClient } from 'next-sanity'
import { cache } from 'react'

import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import { indexQuery, postBySlugQuery, postsSlugsQuery } from './sanity.queries'
import type { Post } from './types'

interface PostWithNavigation extends Post {
  nextPost: Post
  previousPost: Post
}

const client = createClient({ apiVersion, dataset, projectId, useCdn })

export const getAllPosts = cache(
  (): Promise<Post[]> => client.fetch(indexQuery)
)

export const getAllPostsSlugs = cache(
  async (): Promise<Pick<Post, 'slug'>[]> => {
    const slugs = await client.fetch<string[]>(postsSlugsQuery)
    return slugs.map((slug) => ({ slug }))
  }
)

export const getPostBySlug = cache(
  (slug: string): Promise<PostWithNavigation> =>
    client.fetch(postBySlugQuery, { slug })
)
