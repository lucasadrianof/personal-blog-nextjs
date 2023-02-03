import { Image } from 'sanity'

export interface Author {
  name: string
  picture: string
}

export interface Post {
  _id: string
  title: string
  coverImage: Image
  date: string
  excerpt: string
  author: Author
  slug: string
  content: string
}
