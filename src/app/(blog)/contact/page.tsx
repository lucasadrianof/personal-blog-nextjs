import Image from 'next/image'

import ContactBadges from '@/components/ContactBadges/ContactBadges'

export default function About() {
  return (
    <div className="lg:container lg:rounded-2xl bg-gray-950 flex-grow px-4 sm:px-5 md:px-10 lg:px-20">
      <div>
        <div className="sm:py-12 xs:pt-0 xs:pb-12">
          <h2 className="after-effect after:left-40 mt-12 mb-10 xs:mt-6 md:mt-0">
            Contact
          </h2>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col space-y-6 xs:mt-6 sm:mt-0" data-aos="fade-right">
              <ContactBadges />
            </div>
            <div className="flex flex-col grow items-center justify-center" data-aos="fade-left">
              <Image
                alt="Contact Person"
                className="rounded-3xl"
                src="/contact-person.png"
                height={400}
                width={400}
              />
              <h2 className="mt-4 px-4 self-center text-center text-white">
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
