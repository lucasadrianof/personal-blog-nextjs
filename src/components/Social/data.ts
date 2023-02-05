import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'

type SocialMediaType = {
  href: string
  icon: IconProp
  iconClass?: string
  label: string
}

const socialMedias: SocialMediaType[] = [
  {
    href: 'https://www.linkedin.com/in/lucas-felicio-adriano/',
    icon: faLinkedinIn,
    iconClass: 'text-[#0072b1]',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/lucas.adrianoo/',
    icon: faInstagram,
    iconClass: 'text-[#DD2A7B]',
    label: 'Instagram',
  },
  {
    href: 'https://github.com/lucasadrianof/',
    icon: faGithub,
    iconClass: 'text-white',
    label: 'GitHub',
  },
  {
    href: 'https://twitch.tv/the_branko',
    icon: faTwitch,
    iconClass: 'text-[#6441A4]',
    label: 'Twitch',
  },
]

export default socialMedias
