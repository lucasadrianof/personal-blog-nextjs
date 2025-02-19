import Hero from '@/components/Hero/Hero'
import { generateMetadata } from '@/lib/generateMetadata'

export const metadata = generateMetadata()

export default function Home () {
  return (
    <div className='container' id='main'>
      <Hero />
    </div>
  )
}
