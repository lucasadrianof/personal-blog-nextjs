import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faBlog,
  faCircleUser,
  faHouse,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

export interface MenuItem {
  icon: IconProp
  href: string
  text: string
}

const menuData: MenuItem[] = [
  {
    icon: faHouse,
    href: '/',
    text: 'Home',
  },
  {
    icon: faCircleUser,
    href: '/about',
    text: 'About me',
  },
  {
    icon: faBlog,
    href: '/blog',
    text: 'Blog',
  },
  {
    icon: faPaperPlane,
    href: '/contact',
    text: 'Contact',
  },
]

export default menuData
