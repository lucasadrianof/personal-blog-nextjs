import type { ISitemapField } from 'next-sitemap'
import { getServerSideSitemap } from 'next-sitemap'

import { getAllPosts } from '@/lib/sanity/sanity.client'

const { SITE_URL } = process.env

export const dynamic = 'force-dynamic'

export async function GET () {
  const posts = await getAllPosts()

  const fields: ISitemapField[] = posts.map(({ date, slug }) => ({
    loc: `${SITE_URL}/blog/${slug}`,
    lastmod: date,
    priority: 0.7, // same from "next-sitemap.config.js"
  }))

  return getServerSideSitemap(fields)
}
