import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import personalInfo from './data'

export default function PersonalInfo() {
  return (
    <>
      {personalInfo.map(({ icon, iconClass, meta, name }, index) => (
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
