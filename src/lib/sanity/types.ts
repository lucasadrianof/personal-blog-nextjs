import type { Image, PortableTextTextBlock } from 'sanity'

export interface Author {
  name: string
  picture: Image
}

export interface Post {
  _id: string
  author: Author
  date: string
  content: PortableTextTextBlock[]
  coverImage?: Image
  excerpt: string
  slug: string
  title: string
}
