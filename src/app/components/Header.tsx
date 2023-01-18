import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faFile, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faBars, faHouse, faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

type MenuLinkProps = {
  icon: IconProp
  href: string
  text: string
}

const MenuLink = ({ icon, href, text }: MenuLinkProps) => (
  <li className="pl-6">
    <Link className="pl-6" href={href} >
      <span className="mr-2 text-xl">
        <FontAwesomeIcon icon={icon} />
      </span>
      {text}
    </Link >
  </li>
)

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
          <MenuLink icon={faHouse} href="/about" text="About me" />
          <MenuLink icon={faFile} href="/resume" text="Resume" />
          <MenuLink icon={faRss} href="/blog" text="Blog" />
          <MenuLink icon={faPaperPlane} href="/contact" text="Contact" />
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
