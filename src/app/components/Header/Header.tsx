'use client'

import cn from 'classnames'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEventHandler, useState } from 'react'

import menuData, { MenuItem } from './data'

interface MenuItemLink extends MenuItem {
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const isActiveLink = (menuPath: string, routePath: string | null) =>
  menuPath?.replace(/\/\d+/, '') === routePath?.replace(/\/\d+/, '')

const MenuLink = ({ icon, href, onClick, text }: MenuItemLink) => {
  const currentPath = usePathname()
  const classes =
    'flex items-center px-5 py-3 rounded-md font-medium text-sm bg-[#212425] text-[#A6A6A6] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'
  const className = cn(classes, {
    ['bg-gradient-to-r text-white']: isActiveLink(href, currentPath),
  })

  return (
    <li className="px-2 xl:pl-5">
      <Link className={className} href={href} onClick={onClick}>
        <span className="mr-2 text-xl">
          <FontAwesomeIcon className="w-4" icon={icon} />
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
    <header className="lg:container w-full h-24 flex items-center place-content-between bg-black lg:bg-transparent">
      <div className="flex grow justify-between items-center px-4">
        <div>
          <Link href="/">
            <Image
              alt="logo"
              className="h-5 w-auto"
              src="/logo.png"
              width={190}
              height={30}
            />
          </Link>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            className="w-9 h-9 bg-[#ef4060] rounded-full"
            onClick={toggleMenuOpen}
          >
            <FontAwesomeIcon
              className="text-2xl text-white"
              icon={menuOpen ? faClose : faBars}
            />
          </button>
        </div>
      </div>
      <nav className={`${menuOpen ? 'block bg-black' : 'hidden lg:block'}`}>
        <ul
          className={`${
            menuOpen
              ? 'block lg:hidden absolute left-0 top-20 w-full bg-[#212425] drop-shadow-lg py-4 z-10 '
              : 'flex'
          }`}
        >
          {menuData.map(({ href, icon, text }, index) => (
            <MenuLink
              key={index}
              icon={icon}
              href={href}
              text={text}
              onClick={toggleMenuOpen}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}
