import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export interface ContactType {
  href: string
  icon: IconProp
  text: string
  title: string
}

const contactTypes: ContactType[] = [
  {
    href: 'mailto:hi@lucasfadriano.dev',
    icon: faEnvelope,
    text: 'hi@lucasfadriano.dev',
    title: 'Email',
  },
  {
    href: 'https://www.linkedin.com/in/lucas-felicio-adriano/',
    icon: faLinkedinIn,
    text: 'Lucas Felicio Adriano',
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/lucasadrianof/',
    icon: faGithub,
    text: '@lucasadrianof',
    title: 'GitHub',
  },
]

export default contactTypes
