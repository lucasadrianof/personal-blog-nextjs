import Image from 'next/image'
import ContactBadges from '../components/ContactBadges/ContactBadges'

export default function About() {
  return (
    <div className="lg:container lg:rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
      <div>
        <div className="sm:py-12 xs:pt-0 xs:pb-12">
          <h2 className="after-effect after:left-40 mt-12 mb-10 xs:mt-6 lg:mt-0">
            Contact
          </h2>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col space-y-6">
              <ContactBadges />
            </div>
            <div className="flex flex-col grow items-center justify-center">
              <Image
                alt="logo-transparent"
                src="/logo-transparent.svg"
                height={250}
                width={250}
              />
              <h2 className="mt-4 px-4 self-center text-center text-white">
                Thank you for wanting to talk to me! You can reach me out in any
                of the social medias listed here.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
