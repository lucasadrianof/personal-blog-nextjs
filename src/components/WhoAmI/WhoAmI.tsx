import Image from 'next/image'

import CountryFlag from '@/components/CountryFlag/CountryFlag'
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo'

const CountryList = () => (
  <>
    <CountryFlag className="mr-1" country="Brazil" />
    <CountryFlag className="mr-1" country="Portugal" />
    <CountryFlag className="mr-1" country="Spain" />
    <CountryFlag country="Argentina" />
  </>
)

export default function WhoAmI() {
  return (
    <div className="grid grid-cols-12 items-center xs:pt-10 md:gap-10 md:pt-4">
      <div className="col-span-12 md:col-span-4">
        <Image
          className="mb-3 w-full overflow-hidden rounded-3xl object-cover"
          src="/who-am-i.webp"
          width={300}
          height={400}
          alt="avatar"
        />
      </div>
      <div className="col-span-12 space-y-2.5 md:col-span-8">
        <div className="md:mr-12 xl:mr-16">
          <h3 className="mb-2.5 text-2xl font-medium text-white">Who am I?</h3>
          <p className="leading-7 text-gray-400">
            I&apos;m a Senior FullStack Software Engineer from Brazil, currently
            working with Node.js, React, TypeScript and a bit of Functional
            Programming. I enjoy solving hard problems, learning new things and
            breaking things to see how they work.
          </p>
          <p className="mt-2.5 leading-7 text-gray-400">
            When working on a project I like to tackle different challenging
            tasks, learning as much as I can while I go and trying to always
            bring value and results to the partner.
          </p>
          <p className="mt-2.5 leading-7 text-gray-400">
            Aside from work, I really like to travel and get to know different
            places and try different foods and beers. From time to time I also
            like to work from different countries, currently my list of visited
            countries is four (<CountryList />
            ), but I have plans on growing that list as I&apos;m starting to
            embrace the digital nomad lifestyle.
          </p>
        </div>
        <div>
          <h3 className="mb-2.5 text-2xl font-medium text-white">
            Personal Info
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <PersonalInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
