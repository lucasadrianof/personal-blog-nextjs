'use client'

import cn from 'classnames'
import {
  faBars,
  faClose,
  faFile,
  faCircleUser,
  faHouse,
  faPaperPlane,
  faBlog,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type MenuLinkProps = {
  icon: IconProp
  href: string
  text: string
}

const isActiveLink = (menuPath: string, routePath: string | null) =>
  menuPath?.replace(/\/\d+/, '') === routePath?.replace(/\/\d+/, '')

const MenuLink = ({ icon, href, text }: MenuLinkProps) => {
  const currentPath = usePathname()
  const classes =
    'flex items-center px-5 py-3 rounded-md font-medium text-sm bg-[#212425] text-[#A6A6A6] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'
  const className = cn(classes, {
    ['bg-gradient-to-r text-white']: isActiveLink(href, currentPath),
  })

  return (
    <li className="px-2 xl:pl-5">
      <Link className={className} href={href}>
        <span className="mr-2 text-xl">
          <FontAwesomeIcon icon={icon} />
        </span>
        {text}
      </Link>
    </li>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenuOpen = () => setMenuOpen(!menuOpen)

  return (
    <header className="container w-full h-24 flex items-center place-content-between">
      <div className="flex grow justify-between items-center px-4">
        <div>
          <Link href="/">
            <Image alt="logo" src="/logo.png" width={190} height={30} />
          </Link>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            className="w-12 h-12 bg-[#ef4060] rounded-full"
            onClick={toggleMenuOpen}
          >
            <FontAwesomeIcon
              className="text-3xl text-white"
              icon={menuOpen ? faClose : faBars}
            />
          </button>
        </div>
      </div>
      <nav className={`${menuOpen ? 'block bg-black' : 'hidden lg:block'}`}>
        <ul
          className={`${
            menuOpen
              ? 'block lg:hidden absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-[#212425] drop-shadow-lg py-4 '
              : 'flex'
          }`}
        >
          <MenuLink icon={faHouse} href="/" text="Home" />
          <MenuLink icon={faCircleUser} href="/about" text="About me" />
          <MenuLink icon={faFile} href="/resume" text="Resume" />
          <MenuLink icon={faBlog} href="/blog" text="Blog" />
          <MenuLink icon={faPaperPlane} href="/contact" text="Contact" />
        </ul>
      </nav>
    </header>
  )
}
