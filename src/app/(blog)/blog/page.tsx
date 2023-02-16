import { format, parseISO } from 'date-fns'

import Date from '@/components/Blog/Date'
import PostPreview from '@/components/Blog/PostPreview'
import { getAllPosts } from '@/lib/sanity/sanity.client'
import type { Post } from '@/lib/sanity/types'

type MonthYear = `${string}-${string}`
type PostsByMonth = Record<MonthYear, Post[]>

export default async function Blog() {
  const allPosts = await getAllPosts()
  const postsByMonth = groupPostsByMonth(allPosts)

  return (
    <div className="flex-grow">
      <div className="bg-gray-950 mx-auto px-5 lg:container lg:rounded-2xl md:px-10 lg:px-20">
        <div className="py-4">
          {
            Object.entries(postsByMonth).map(([yearMonth, posts]) =>
              <div key={yearMonth} className="mb-6">
                <h3 className="border-b-2 inline-block pb-1 text-brand-slogan text-xl">{yearMonth}</h3>
                <ul className="flex flex-col pt-4" >
                  {posts.map((post) =>
                    <li key={post.slug} className="flex items-center gap-x-8 mb-1">
                      <Date className="hidden md:block text-sm" dateString={post.date} />
                      <PostPreview {...post} />
                    </li>
                  )}
                </ul>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

const groupPostsByMonth = (posts: Post[]) =>
  posts.reduce((acc:PostsByMonth, post) => {
    const monthYear = format(parseISO(post.date), 'MM-yyyy') as MonthYear

    if (monthYear in acc) {
      acc[monthYear].push(post)
    } else {
      acc[monthYear] = [post]
    }

    return acc
  }, {})
