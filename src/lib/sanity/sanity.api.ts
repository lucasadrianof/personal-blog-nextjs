export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15'

export const useCdn = process.env.SANITY_REVALIDATE_SECRET
  ? false
  : process.env.NODE_ENV === 'production'
