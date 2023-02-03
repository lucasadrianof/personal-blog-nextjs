import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  "slug": slug.current,
  "author": author->{name, picture}
  `

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  content,
  coverImage,
  ${postFields}
}
`

export const postsSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const morePostsQuery = groq`
*[_type == "post" && slug.current != $slug] | order(date asc, _updatedAt desc) [0...2] {
  ${postFields}
}
`
