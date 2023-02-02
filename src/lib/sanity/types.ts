export interface Author {
  name: string
  picture: string
}

export interface Post {
  _id: string
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  content: string
}
