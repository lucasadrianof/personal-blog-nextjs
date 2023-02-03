import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture}
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  content,
  ${postFields}
}
`

export const postsSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const morePostsQuery = groq`
*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
  ${postFields}
}
`
