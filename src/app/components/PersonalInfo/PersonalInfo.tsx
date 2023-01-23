import cn from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faEnvelopeOpenText,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

type PersonalContent = {
  icon: IconProp
  iconClass: string
  name: string
  meta: JSX.Element | string
}

const personalContent: PersonalContent[] = [
  {
    icon: faEnvelopeOpenText,
    iconClass: 'text-pink-500',
    name: 'Email',
    meta: (
      <>
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="mailto:lucas.f.adriano@hotmail.com"
        >
          lucas.f.adriano@hotmail.com
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
    iconClass: 'text-purple-500',
    name: 'Graduation',
    meta: 'Software Analysis and Development, UniCesumar',
  },
  {
    icon: faBuilding,
    iconClass: 'text-red-500',
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

export default function PersonalInfo() {
  return (
    <>
      {personalContent.map(({ icon, iconClass, meta, name }, index) => (
        <div className="flex" key={index}>
          <span
            className={cn(
              iconClass,
              'bg-[#212425] mr-2.5 flex items-center justify-center rounded-md w-12'
            )}
          >
            <FontAwesomeIcon className="text-2xl w-4" icon={icon} />
          </span>
          <div className="space-y-1">
            <p className="test-xs text-gray-400">{name}</p>
            <h6 className="font-medium text-white">{meta}</h6>
          </div>
        </div>
      ))}
    </>
  )
}
