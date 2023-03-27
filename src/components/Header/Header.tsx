'use client'

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEventHandler, useEffect, useRef, useState } from 'react'

import menuData, { MenuItem } from '@/components/Header/data'
import useClickOutside from '@/hooks/useClickOutside'

interface MenuItemLink extends MenuItem {
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const isActiveLink = (menuPath: string, routePath: string | null) =>
  menuPath.replace(/\/\d+/, '') === routePath?.replace(/\/\d+/, '')

const MenuLink = ({ icon, href, onClick, text }: MenuItemLink) => {
  const currentPath = usePathname()
  const activeLink = isActiveLink(href, currentPath)

  const classes =
    'flex items-center px-5 py-3 rounded-md font-medium text-sm bg-gray-850 hover:text-white hover:bg-gradient-to-r from-brand-background-element to-rose-900'
  const className = cn(classes, {
    'bg-gradient-to-r text-white': activeLink,
    'text-gray-400': !activeLink,
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

  const buttonRef = useRef(null)
  const menuRef = useRef(null)
  const clickedOutsideButton = useClickOutside(buttonRef)
  const clickedOutsideMenu = useClickOutside(menuRef)

  const toggleMenuOpen = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    if (menuOpen && clickedOutsideButton && clickedOutsideMenu) {
      setMenuOpen(false)
    }
  }, [clickedOutsideButton, clickedOutsideMenu, menuOpen])

  return (
    <header className="flex h-24 w-full shrink-0 place-content-between items-center bg-black lg:container lg:bg-transparent">
      <div className="flex grow items-center justify-between px-4">
        <Link href="/">
          <Image alt="logo.svg" src="/logo.svg" height={32} width={192} />
        </Link>
        <div className="lg:hidden">
          <button
            aria-label="Menu Button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-background-element"
            onClick={toggleMenuOpen}
            ref={buttonRef}
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
              ? 'absolute left-0 top-20 z-10 block w-full bg-gray-850 py-4 drop-shadow-lg lg:hidden '
              : 'flex'
          }`}
          ref={menuRef}
        >
          {menuData.map(({ href, icon, text }) => (
            <MenuLink
              key={href}
              icon={icon}
              href={href}
              text={text}
              onClick={() => {
                if (menuOpen) setMenuOpen(false)
              }}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}
