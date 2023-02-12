import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  date,
  tags,
  title,
  "slug": slug.current
`

const nextPostQuery = groq`
*[_type == "post" && date > ^.date] | order(date asc) [0] {
  ${postFields}
}
`

export const nextPostByDateQuery = groq`
*[_type == "post" && date > $date] | order(date asc) [0] {
  ${postFields}
}
`

const previousPostQuery = groq`
*[_type == "post" && date < ^.date] | order(date desc) [0] {
  ${postFields}
}
`

export const previuousPostByDateQuery = groq`
*[_type == "post" && date < $date] | order(date desc) [0] {
  ${postFields}
}
`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}
`

export const postSlugsByAuthorQuery = groq`
*[_type == "author" && _id == $id] {
  "slug": *[_type == "post" && references(^._id)].slug.current
} ["slug"][]
`

export const postByIdQuery = groq`
*[_type == "post" && _id == $id][0]
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  content,
  coverImage,
  ${postFields},
  "author": author->{name, picture},
  "nextPost": ${nextPostQuery},
  "previousPost": ${previousPostQuery}
}
`

export const postsSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
