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
    iconClass: 'text-[#ff4057]',
    name: 'Email',
    meta: (
      <>
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="mailto:hi@lucasfadriano.dev"
        >
          hi@lucasfadriano.dev
        </a>
      </>
    ),
  },
  {
    icon: faLinkedinIn,
    iconClass: 'text-[#0072b1]',
    name: 'LinkedIn',
    meta: (
      <>
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="https://www.linkedin.com/in/lucas-felicio-adriano/"
          rel="noreferrer"
          target="_blank"
        >
          Lucas Felicio Adriano
        </a>
      </>
    ),
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
    meta: (
      <>
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="https://www.linkedin.com/in/x-team/"
          rel="noreferrer"
          target="_blank"
        >
          X-Team
        </a>
      </>
    ),
  },
]

export default personalInfo
