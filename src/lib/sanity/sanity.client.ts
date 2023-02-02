import { createClient } from 'next-sanity'
import { postBySlugQuery, postsSlugsQuery } from './sanity.queries'

import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import { Post } from './types'

const client = createClient({ apiVersion, dataset, projectId, useCdn })

export const getAllPostsSlugs = async (): Promise<Pick<Post, 'slug'>[]> => {
  const slugs = await client.fetch<string[]>(postsSlugsQuery)
  return slugs.map((slug) => ({ slug }))
}

export const getPostBySlug = async (slug: string): Promise<Post> =>
  client.fetch(postBySlugQuery, { slug })
