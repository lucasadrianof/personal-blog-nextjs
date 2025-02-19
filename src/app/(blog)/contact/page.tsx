import Image from 'next/image'

import ContactBadges from '@/components/ContactBadges/ContactBadges'
import { generateMetadata } from '@/lib/generateMetadata'

export const metadata = generateMetadata({ titlePrefix: 'Contact' })

export default function About () {
  return (
    <div className='bg-gray-950 px-4 lg:container sm:px-5 md:px-10 lg:rounded-2xl lg:px-20'>
      <div>
        <div className='xs:pb-12 xs:pt-0 sm:py-12'>
          <h2 className='after-effect mb-10 mt-12 after:left-40 xs:mt-6 md:mt-0'>
            Contact
          </h2>
          <div className='flex flex-col-reverse lg:flex-row'>
            <div
              className='flex flex-col space-y-6 xs:mt-6 sm:mt-0'
              data-aos='fade-right'
              data-aos-once
            >
              <ContactBadges />
            </div>
            <div
              className='flex grow flex-col items-center justify-center'
              data-aos='fade-left'
              data-aos-once
            >
              <Image
                alt='Contact Person'
                className='rounded-3xl'
                height={400}
                src='/contact-person.png'
                width={400}
              />
              <h2 className='mt-4 self-center px-4 text-center text-white'>
                You can reach out to me through any of the social medias listed
                here. Email is the preferable one since I check it more often,
                but feel free to say hi using the one you feel most comfortable
                with :)
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
