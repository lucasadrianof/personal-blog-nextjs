import 'server-only'

import { createClient } from 'next-sanity'
import { cache } from 'react'

import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import { postBySlugQuery, postsSlugsQuery } from './sanity.queries'
import { Post } from './types'

const client = createClient({ apiVersion, dataset, projectId, useCdn })

export const getAllPostsSlugs = cache(
  async (): Promise<Pick<Post, 'slug'>[]> => {
    const slugs = await client.fetch<string[]>(postsSlugsQuery)
    return slugs.map((slug) => ({ slug }))
  }
)

export const getPostBySlug = cache(
  (slug: string): Promise<Post> => client.fetch(postBySlugQuery, { slug })
)
