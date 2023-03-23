import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faEnvelopeOpenText,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'

type PersonalInfo = {
  icon: IconProp
  iconClass: string
  name: string
  meta: JSX.Element | string
}

const personalInfo: PersonalInfo[] = [
  {
    icon: faEnvelopeOpenText,
    iconClass: 'text-brand-background-element',
    name: 'Email',
    meta:
      <>
        <a
          className="transition duration-300 hover:text-brand-background-element"
          href="mailto:hi@lucasfadriano.dev"
        >
          hi@lucasfadriano.dev
        </a>
      </>
    ,
  },
  {
    icon: faLinkedinIn,
    iconClass: 'text-linkedIn',
    name: 'LinkedIn',
    meta:
      <>
        <a
          className="transition duration-300 hover:text-brand-background-element"
          href="https://www.linkedin.com/in/lucas-felicio-adriano/"
          rel="noreferrer"
          target="_blank"
        >
          Lucas Felicio Adriano
        </a>
      </>
    ,
  },
  {
    icon: faGraduationCap,
    iconClass: 'text-green-500',
    name: 'Graduation',
    meta: 'Software Analysis, UniCesumar',
  },
  {
    icon: faBuilding,
    iconClass: 'text-purple-500',
    name: 'Work',
    meta:
      <>
        <a
          className="transition duration-300 hover:text-brand-background-element"
          href="https://www.linkedin.com/company/x-team/"
          rel="noreferrer"
          target="_blank"
        >
          X-Team
        </a>
      </>
    ,
  },
]

export default personalInfo
