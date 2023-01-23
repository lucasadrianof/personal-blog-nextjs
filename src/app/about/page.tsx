import WhoAmI from '../components/WhoAmI/WhoAmI'

export default function About() {
  return (
    <div className="lg:container lg:rounded-2xl bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
      <div>
        <div className="py-12">
          <h2 className="after-effect after:left-52 mt-12 lg:mt-0">About me</h2>
          <WhoAmI />
        </div>
      </div>
    </div>
  )
}
