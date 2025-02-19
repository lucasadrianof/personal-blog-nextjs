import Skills from '@/components/Skills/Skills'
import WhoAmI from '@/components/WhoAmI/WhoAmI'
import { generateMetadata } from '@/lib/generateMetadata'

export const metadata = generateMetadata({ titlePrefix: 'About me' })

export default function About () {
  return (
    <div className='bg-gray-950 px-4 lg:container sm:px-5 md:px-10 lg:rounded-2xl lg:px-20'>
      <div data-aos='fade' data-aos-duration={300} data-aos-once>
        <div className='xs:pb-12 xs:pt-0 sm:py-12'>
          <h2 className='after-effect mt-12 after:left-52 xs:mt-6 lg:mt-0'>
            About me
          </h2>
          <WhoAmI />
        </div>
        <div className='pb-12'>
          <h3 className='pb-5 text-4xl font-medium text-white'>My skills!</h3>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  )
}
