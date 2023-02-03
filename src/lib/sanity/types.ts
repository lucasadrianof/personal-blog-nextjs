import type { Image, PortableTextTextBlock } from 'sanity'

export interface Author {
  name: string
  picture: string
}

export interface Post {
  _id: string
  title: string
  content: PortableTextTextBlock[]
  coverImage: Image
  date: string
  excerpt: string
  author: Author
  slug: string
}
