import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import Social from '../Social/Social'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] lg:h-[80vh]">
      <Image
        alt="avatar"
        className="object-cover rounded-full h-60 w-60"
        src="/avatar.jpg"
        height={250}
        width={250}
      />
      <h3 className="mt-6 mb-1 text-3xl font-semibold text-white">
        Lucas Felicio Adriano
      </h3>
      <p className="mb-4 text-[#7B7B7B]">Senior Software Engineer</p>
      <div className="flex space-x-3">
        <Social />
      </div>
      <a
        href="#"
        className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6"
      >
        <FontAwesomeIcon className="mr-2" icon={faDownload} />
        Downlad CV
      </a>
    </div>
  )
}
