import type { GetServerSideProps } from "next";
import { createClient } from 'next-sanity'
import type { ISitemapField } from "next-sitemap";
import { getServerSideSitemap } from "next-sitemap";

import { apiVersion, dataset, projectId, useCdn } from '@/lib/sanity/sanity.api'
import { indexQuery } from "@/lib/sanity/sanity.queries";
import type { Post } from "@/lib/sanity/types";

const { SITE_URL } = process.env

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // manually create the client here because of the server-only dep
  const client = createClient({ apiVersion, dataset, projectId, useCdn })
  const posts = await client.fetch<Post[]>(indexQuery)

  const fields:ISitemapField[] = posts.map(({ date, slug }) => ({
    loc: `${SITE_URL}/blog/${slug}`,
    lastmod: date,
    priority: 0.7 // same from "next-sitemap.config.js"
  }))

  return getServerSideSitemap(ctx, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function BlogSitemapXml () {}