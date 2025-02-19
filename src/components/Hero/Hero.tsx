import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import Social from '@/components/Social/Social'

export default function Hero () {
  return (
    <div
      className='flex h-screen flex-col items-center justify-center xs:h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh]'
      data-aos='zoom-in'
    >
      <Image
        alt='avatar'
        className='size-60 rounded-full object-cover'
        height={250}
        src='/avatar.webp'
        width={250}
      />
      <h3 className='mb-1 mt-6 text-3xl font-semibold text-white'>
        Lucas Felicio Adriano
      </h3>
      <p className='mb-4 text-gray-500'>
        Senior&nbsp;
        <span className='after:animate-title' />
      </p>
      <div className='flex space-x-3'>
        <Social />
      </div>
      <a
        className='mt-6 flex items-center rounded-[35px] bg-gradient-to-r from-brand-background-element to-rose-900 px-8 py-3 text-lg text-white transition duration-200 ease-linear hover:bg-gradient-to-l'
        href={process.env.RESUME_DOWNLOAD_URL}
        rel='noreferrer'
        target='_blank'
      >
        <FontAwesomeIcon className='mr-2' icon={faDownload} />
        Download CV
      </a>
    </div>
  )
}
