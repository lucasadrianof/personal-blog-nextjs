import { NextApiRequest, NextApiResponse } from "next";
import { createClient, SanityClient } from "next-sanity";
import type { ParseBody } from 'next-sanity/webhook'
import { parseBody } from 'next-sanity/webhook'
import type { SlugValue } from 'sanity'

import { apiVersion, dataset, projectId } from "@/lib/sanity/sanity.api";
import {
  nextPostByDateQuery,
  postByIdQuery,
  postSlugsByAuthorQuery,
  previuousPostByDateQuery
} from "@/lib/sanity/sanity.queries";
import { Post } from "@/lib/sanity/types";

const { SANITY_REVALIDATE_SECRET } = process.env

type StaleRoute = '/blog' | `/blog/${string}`

interface StaleRouteBody extends Pick<ParseBody['body'], '_type' | '_id' > {
  date?: string
  slug?: SlugValue
}

const getPostById = (client: SanityClient, id: string):Promise<Post> => client.fetch(postByIdQuery, { id })
const getNextPost = (client: SanityClient, date: string):Promise<Post> => client.fetch(nextPostByDateQuery, { date })
const getPreviousPost = (client: SanityClient, date: string):Promise<Post> => client.fetch(previuousPostByDateQuery, { date })
const getPostSlugsByAuthor = (client: SanityClient, date: string):Promise<string[]> => client.fetch(postSlugsByAuthorQuery, { date })

const queryStaleRoutes = async (body: StaleRouteBody): Promise<StaleRoute[]> => {
  const client = createClient({ apiVersion, dataset, projectId, useCdn: false })
  const { _id, _type, slug } = body

  // When a post was deleted
  if (_type === 'post' && !await getPostById(client, _id)) {
    const staleRoutes: StaleRoute[] = ['/blog']

    if (slug?.current) {
      staleRoutes.push(`/blog/${slug.current}`)
    }

    return staleRoutes
  }

  switch (_type) {
  case 'post': return await queryStalePostRoutes(client, _id)
  case 'author': return await queryStateAuthorRoutes(client, _id)
  default: return []
  }
}

const queryStalePostRoutes = async(client: SanityClient, id: string):Promise<StaleRoute[]> => {
  const post = await getPostById(client, id)
  const nextPost = await getNextPost(client, post.date)
  const previousPost = await getPreviousPost(client, post.date)
  const stalePosts = [post, nextPost, previousPost]
    .filter(post => !!post)
    .map(({ slug }) => `/blog/${slug}` as StaleRoute)

  return ['/blog', ...stalePosts]
}

const queryStateAuthorRoutes = async(client: SanityClient, id: string): Promise<StaleRoute[]> => {
  const slugsByAuthor = await getPostSlugsByAuthor(client, id)

  return ['/blog',
    ...slugsByAuthor.map(slug => `/blog/${slug}` as StaleRoute),
  ]
}

export default async function cacheRevalidate(req: NextApiRequest, res: NextApiResponse) {
  try {
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
    return res.status(500).send('An unexpected error occured, please reach out to hi@lucasfadriano.dev if you see this!')
  }
}