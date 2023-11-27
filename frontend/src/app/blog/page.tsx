import { allPosts } from '../../../.contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/app/components/post-date'
import PostTags from '@/app/components/post-tags'
import PostItem from '@/app/components/post-item'

export const metadata = {
  title: 'blog',
  description: 'blog'
}

import Newsletter from '@/app/components/newsletter'

export default function Blog() {

  // Sort posts by date
  allPosts.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })

  const featuredPost = allPosts[0]
  const posts = allPosts.slice(1)

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* thats the vertical flex items */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/*  Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1" data-aos="fade-up">Refreshing news for developers and designers</h1>
            </div>

            <div className="max-w-sm mx-auto md:max-w-none">

              {/*  Section title */}
              <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Latest articles</h4>

              {/*  Articles container */}
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {posts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div>

            </div>


          </div>
        </div >
      </section >
      <Newsletter />
    </>
  )
}