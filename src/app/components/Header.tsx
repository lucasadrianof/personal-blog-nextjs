import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="container w-full h-24 bg-black flex items-center place-content-between">
      <div className="pl-6">
        <Link href="/">
          <Image alt="logo" src="/logo.png" width={190} height={30} />
        </Link>
      </div>
      <nav>
        <ul className="pr-6 flex items-center text-white">
          <li className="pl-6">
            <Link href="/about">About me</Link>
          </li>
          <li className="pl-6">
            <Link href="/about">Resume</Link>
          </li>
          <li className="pl-6">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="pl-6">
            <Link href="/blog">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="block lg:hidden">
        <button className="w-5">
          <FontAwesomeIcon className="text-4xl text-black" icon={faBars} />
        </button>
      </div>
    </div>
  )
}
