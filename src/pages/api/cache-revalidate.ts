import { NextApiRequest, NextApiResponse } from 'next'
import { createClient, SanityClient } from 'next-sanity'
import { parseBody } from 'next-sanity/webhook'
import type { SanityDocument, SlugValue } from 'sanity'

import { apiVersion, dataset, projectId } from '@/lib/sanity/sanity.api'
import {
  nextPostByDateQuery,
  postByIdQuery,
  postSlugsByAuthorQuery,
  previousPostByDateQuery,
} from '@/lib/sanity/sanity.queries'
import type { Post } from '@/lib/sanity/types'

const { SANITY_REVALIDATE_SECRET, WEBHOOK_AUTHORIZATION_TOKEN } = process.env

type StaleRoute = '/blog' | `/blog/${string}`

interface StaleRouteBody extends Pick<SanityDocument, '_type' | '_id'> {
  date?: string
  slug?: SlugValue
}

const getPostById = (client: SanityClient, id: string) =>
  client.fetch<Post>(postByIdQuery, { id })

const getNextPost = (client: SanityClient, date: string) =>
  client.fetch<Post>(nextPostByDateQuery, { date })

const getPreviousPost = (client: SanityClient, date: string) =>
  client.fetch<Post>(previousPostByDateQuery, { date })

const getPostSlugsByAuthor = (client: SanityClient, id: string) =>
  client.fetch<string[]>(postSlugsByAuthorQuery, { id })

const queryStaleRoutes = async (body: StaleRouteBody): Promise<StaleRoute[]> => {
  const client = createClient({ apiVersion, dataset, projectId, useCdn: false })
  const { _id, _type } = body

  // When a post was deleted
  if (_type === 'post' && !await getPostById(client, _id))
    return await getStaleRoutesForDeletedPost(client, body)

  switch (_type) {
  case 'post':
    return await queryStalePostRoutes(client, _id)
  case 'author':
    return await queryStateAuthorRoutes(client, _id)
  default:
    return []
  }
}

const getStaleRoutesForDeletedPost = async (client: SanityClient, body: StaleRouteBody): Promise<StaleRoute[]> => {
  let staleRoutes: StaleRoute[] = ['/blog']

  const { date, slug } = body
  const previousPost = date ? await getPreviousPost(client, date) : undefined
  const nextPosts = date ? await queryNextPosts(client, date) : []

  if (slug?.current) staleRoutes.push(`/blog/${slug.current}`)
  if (previousPost) staleRoutes.push(`/blog/${previousPost.slug}`)
  staleRoutes = [...staleRoutes, ...nextPosts]

  return staleRoutes
}

const queryStalePostRoutes = async (client: SanityClient, id: string): Promise<StaleRoute[]> => {
  const post = await getPostById(client, id)
  const nextPost = await getNextPost(client, post.date)
  const previousPost = await getPreviousPost(client, post.date)
  const stalePosts = [post, nextPost, previousPost]
    .filter(post => !!post)
    .map(({ slug }) => `/blog/${slug}` as StaleRoute)

  return ['/blog', ...stalePosts]
}

const queryStateAuthorRoutes = async (client: SanityClient, id: string): Promise<StaleRoute[]> => {
  const slugsByAuthor = await getPostSlugsByAuthor(client, id)

  return [
    '/blog',
    ...slugsByAuthor.map((slug) => `/blog/${slug}` as StaleRoute),
  ]
}

const queryNextPosts = async (client: SanityClient, date: string): Promise<StaleRoute[]> => {
  const nextPost = await getNextPost(client, date)
  let postSlugs: StaleRoute[] = []

  if (nextPost) {
    const nextPostSlugs = await queryNextPosts(client, nextPost.date)
    postSlugs = [`/blog/${nextPost.slug}` as StaleRoute, ...nextPostSlugs]
  }

  return postSlugs
}

export { config } from 'next-sanity/webhook'

export default async function cacheRevalidate(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.headers['authorization'] !== `Bearer ${WEBHOOK_AUTHORIZATION_TOKEN}`) {
      const message = 'Unauthorized'
      console.log(message)
      return res.status(401).send(message)
    }

    const { body, isValidSignature } = await parseBody(req, SANITY_REVALIDATE_SECRET)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      console.log(message)
      return res.status(401).send(message)
    }

    if (!body._id) {
      const message = 'Invalid _id'
      console.error(message, { body })
      return res.status(400).send(message)
    }

    const staleRoutes = await queryStaleRoutes(body)
    await Promise.all(staleRoutes.map(route => res.revalidate(route)))

    const message = `Revalidated routes: ${staleRoutes.join(', ')}`
    console.log(message)
    return res.status(200).send(message)
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .send(
        'An unexpected error occured, please reach out to hi@lucasfadriano.dev if you see this!'
      )
  }
}
