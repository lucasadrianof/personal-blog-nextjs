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
            <h2 className="self-center text-center text-white">
              Thanks for wanting to reach out! You can contact me in any of the
              social medias here.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
