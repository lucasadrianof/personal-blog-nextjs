import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEventHandler } from 'react'

import { MenuItem } from '@/components/Header/data'
import { cn } from '@/utils/cn'

interface MenuItemLink extends MenuItem {
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const isActiveLink = (menuPath: string, routePath: string | null) =>
  menuPath.replace(/\/\d+/, '') === routePath?.replace(/\/\d+/, '')

export default function MenuLink ({ icon, href, onClick, text }: MenuItemLink) {
  const currentPath = usePathname()
  const activeLink = isActiveLink(href, currentPath)

  const classes =
    'flex items-center px-5 py-3 rounded-md font-medium text-sm bg-gray-850 hover:text-white hover:bg-gradient-to-r from-brand-background-element to-rose-900'
  const className = cn(classes, {
    'bg-gradient-to-r text-white': activeLink,
    'text-gray-400': !activeLink,
  })

  return (
    <li className='px-2 xl:pl-5'>
      <Link className={className} href={href} onClick={onClick}>
        <span className='mr-2 text-xl'>
          <FontAwesomeIcon className='w-4' icon={icon} />
        </span>
        {text}
      </Link>
    </li>
  )
}
