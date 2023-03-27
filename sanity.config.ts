import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { apiVersion, dataset, projectId } from '@/lib/sanity/sanity.api'
import authorSchema from '@/sanity/schemas/author'
import postSchema from '@/sanity/schemas/post'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    types: [authorSchema, postSchema],
  },
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
})
