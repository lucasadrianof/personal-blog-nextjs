import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export interface ContactType {
  href: string
  icon: IconProp
  iconColor: string
  text: string
  title: string
}

const contactTypes: ContactType[] = [
  {
    href: 'mailto:hi@lucasfadriano.dev',
    icon: faEnvelope,
    iconColor: 'text-brand-background-element',
    text: 'hi@lucasfadriano.dev',
    title: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/lucas-felicio-adriano/',
    icon: faLinkedinIn,
    iconColor: 'text-linkedIn',
    text: 'Lucas Felicio Adriano',
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/lucasadrianof/',
    icon: faGithub,
    iconColor: 'text-white',
    text: '@lucasadrianof',
    title: 'GitHub',
  },
]

export default contactTypes
