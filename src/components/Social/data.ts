import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faUntappd,
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
    iconClass: 'text-linkedIn',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.instagram.com/lucas.adrianoo/',
    icon: faInstagram,
    iconClass: 'text-instagram',
    label: 'Instagram',
  },
  {
    href: 'https://github.com/lucasadrianof/',
    icon: faGithub,
    iconClass: 'text-white',
    label: 'GitHub',
  },
  {
    href: 'https://untappd.com/user/lucasadrianoo',
    icon: faUntappd,
    iconClass: 'text-untappd',
    label: 'Untappd',
  },
]

export default socialMedias
