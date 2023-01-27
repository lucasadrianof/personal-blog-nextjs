import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import personalInfo from './data'

export default function PersonalInfo() {
  return (
    <>
      {personalInfo.map(({ icon, iconClass, meta, name }, index) => (
        <div className="flex items-center" key={index}>
          <span
            className={`${iconClass} bg-[#212425] mr-2.5 flex items-center justify-center rounded-md w-12 h-12`}
          >
            <FontAwesomeIcon icon={icon} />
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
