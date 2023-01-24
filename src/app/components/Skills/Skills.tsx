import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import skills from './skills'

export default function Skills() {
  return (
    <>
      {skills.map(({ description, icon, iconColor, title }, index) => (
        <div
          className="border-2 border-[#212425] bg-transparent rounded-xl p-6 flex items-center gap-4"
          key={index}
        >
          <FontAwesomeIcon className={cn(iconColor, 'text-2xl')} icon={icon} />
          <div className="space-y-2">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="leading-8 text-[#A6A6A6]">{description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
