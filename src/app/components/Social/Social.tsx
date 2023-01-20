import cn from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SocialMediaType = {
  href: string
  icon: IconProp
  iconClass?: string
}

const socialMedias: SocialMediaType[] = [
  {
    href: 'https://www.linkedin.com/in/lucas-felicio-adriano/',
    icon: faLinkedinIn,
    iconClass: 'text-[#0072b1]',
  },
  {
    href: 'https://www.instagram.com/lucas.adrianoo/',
    icon: faInstagram,
    iconClass: 'text-[#DD2A7B]',
  },
  {
    href: 'https://github.com/lucasadrianof/',
    icon: faGithub,
    iconClass: 'text-white',
  },
]

export default function Social() {
  return (
    <>
      {socialMedias.map(({ href, icon, iconClass }, key) => (
        <a key={key} href={href} target="_blank" rel="noreferrer">
          <span
            className={cn(
              'w-10 h-10 rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  flex justify-center items-center  hover:text-white transition-colors duration-300  ease-in-out  bg-[#212425]',
              iconClass
            )}
          >
            <FontAwesomeIcon icon={icon} />
          </span>
        </a>
      ))}
    </>
  )
}
