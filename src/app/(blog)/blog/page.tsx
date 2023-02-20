import { format, parseISO } from 'date-fns'

import Date from '@/components/Blog/Date'
import PostPreview from '@/components/Blog/PostPreview'
import { getAllPosts } from '@/lib/sanity/sanity.client'
import type { Post } from '@/lib/sanity/types'

type MonthYear = `${string}-${string}`
type PostsByMonthYear = Record<MonthYear, Post[]>

export default async function Blog() {
  const allPosts = await getAllPosts()
  const postsByMonthYear = groupPostsByMonth(allPosts)

  return (
    <div className="flex-grow" data-aos="fade" data-aos-duration={300}>
      <div className="bg-gray-950 mx-auto px-5 lg:container lg:rounded-2xl md:px-10 lg:px-20">
        <div className="sm:py-12 xs:pt-0 xs:pb-12">
          <h2 className="after-effect after:left-24 mt-12 xs:mt-6 lg:mt-0">
            Blog
          </h2>
          <p className="pt-2 leading-7 text-gray-400 mt-2.5">
            My personal blog, where I write about software development and other tech-related subjects.
          </p>
        </div>
        <div className="py-4">
          {
            Object.entries(postsByMonthYear).map(([monthYear, posts]) =>
              <div className="mb-6" key={monthYear}>
                <h3 className="border-b-2 inline-block pb-1 text-brand-slogan text-xl">{monthYear}</h3>
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
  posts.reduce((acc:PostsByMonthYear, post) => {
    const monthYear = format(parseISO(post.date), 'MM-yyyy') as MonthYear

    if (monthYear in acc) {
      acc[monthYear].push(post)
    } else {
      acc[monthYear] = [post]
    }

    return acc
  }, {})
