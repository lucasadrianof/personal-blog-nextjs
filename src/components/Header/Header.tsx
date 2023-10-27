'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import menuData from '@/components/Header/data'
import MenuLink from '@/components/Header/MenuLink'
import MenuToggleButton from '@/components/Header/MenuToggleButton'
import useClickOutside from '@/hooks/useClickOutside'

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
          <MenuToggleButton
            onClick={toggleMenuOpen}
            open={menuOpen}
            ref={buttonRef}
          />
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
