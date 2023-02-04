import Image from 'next/image'

import PersonalInfo from '@/components/PersonalInfo/PersonalInfo'

export default function WhoAmI() {
  return (
    <div className="grid grid-cols-12 md:gap-10 md:pt-4 xs:pt-10 items-center">
      <div className="col-span-12 md:col-span-4">
        <Image
          className="w-full object-cover overflow-hidden rounded-3xl mb-3"
          src="/who-am-i.jpg"
          width={300}
          height={400}
          alt="avatar"
        />
      </div>
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className="md:mr-12 xl:mr-16">
          <h3 className="text-2xl font-medium text-white mb-2.5">Who am I?</h3>
          <p className="leading-7 text-gray-400">
            I&apos;m a Senior FullStack Software Engineer from Brazil, currently
            working with Node.js, React, TypeScript and a bit of Functional
            Programming. I enjoy solving hard problems, learning new things and
            breaking things to see how they work.
          </p>
          <p className="leading-7 text-gray-400 mt-2.5">
            When working on a project I like to tackle different challenging
            tasks, learning as much as I can while I go and trying to always
            bring value and results to the partner.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium text-white mb-2.5">
            Personal Info
          </h3>
          <div className="grid grid-cols1- sm:grid-cols-2 gap-6">
            <PersonalInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
