import { visionTool } from '@sanity/vision'
import {
  apiVersion,
  dataset,
  // previewSecretId,
  projectId,
} from '@/lib/sanity.api'
// import { previewDocumentNode } from 'plugins/previewPane'
// import { productionUrl } from 'plugins/productionUrl'
// import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
// import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

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
  plugins: [
    deskTool(),
    // deskTool({
    //   structure: settingsStructure(settingsType),
    //   // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
    //   defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    // }),
    // // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // settingsPlugin({ type: settingsType.name }),
    // // Add the "Open preview" action
    // productionUrl({
    //   apiVersion,
    //   previewSecretId,
    //   types: [postType.name, settingsType.name],
    // }),
    // // Add an image asset source for Unsplash
    // unsplashImageAsset(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
