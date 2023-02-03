import Skills from '../../../components/Skills/Skills'
import WhoAmI from '../../../components/WhoAmI/WhoAmI'

export default function About() {
  return (
    <div className="lg:container lg:rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
      <div>
        <div className="sm:py-12 xs:pt-0 xs:pb-12">
          <h2 className="after-effect after:left-52 mt-12 xs:mt-6 lg:mt-0">
            About me
          </h2>
          <WhoAmI />
        </div>
        <div className="pb-12">
          <h3 className="text-white text-4xl font-medium pb-5">My skills!</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}
