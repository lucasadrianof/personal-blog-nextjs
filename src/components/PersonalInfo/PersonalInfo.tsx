import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import personalInfo from '@/components/PersonalInfo/data'

export default function PersonalInfo() {
  return (
    <>
      {personalInfo.map(({ icon, iconClass, meta, name }, index) => (
        <div className="flex items-center" key={index}>
          <span
            className={`${iconClass} mr-2.5 flex h-12 w-12 items-center justify-center rounded-md bg-gray-850`}
          >
            <FontAwesomeIcon icon={icon} />
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-400">{name}</p>
            <h6 className="font-medium text-white">{meta}</h6>
          </div>
        </div>
      ))}
    </>
  )
}
