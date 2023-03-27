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
    <div className="grow" data-aos="fade" data-aos-duration={300}>
      <div className="mx-auto bg-gray-950 px-5 md:px-10 lg:container lg:rounded-2xl lg:px-20">
        <div className="xs:pt-0 xs:pb-12 sm:py-12">
          <h2 className="after-effect mt-12 after:left-24 xs:mt-6 lg:mt-0">
            Blog
          </h2>
          <p className="mt-2.5 pt-2 leading-7 text-gray-400">
            My personal blog, where I write about software development,
            travelling, digital nomading and other related - and a little random
            :) - subjects.
          </p>
        </div>
        <div className="py-4">
          {Object.entries(postsByMonthYear).map(([monthYear, posts]) => (
            <div className="mb-6" key={monthYear}>
              <h3 className="inline-block border-b-2 pb-1 text-xl text-brand-slogan">
                {monthYear}
              </h3>
              <ul className="flex flex-col pt-4">
                {posts.map((post) => (
                  <li
                    key={post.slug}
                    className="mb-1 flex items-center gap-x-8"
                  >
                    <Date
                      className="hidden text-sm md:block"
                      dateString={post.date}
                    />
                    <PostPreview {...post} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const groupPostsByMonth = (posts: Post[]) =>
  posts.reduce((acc: PostsByMonthYear, post) => {
    const monthYear = format(parseISO(post.date), 'MM-yyyy') as MonthYear

    if (monthYear in acc) {
      acc[monthYear].push(post)
    } else {
      acc[monthYear] = [post]
    }

    return acc
  }, {})
