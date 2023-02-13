import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

import skills from '@/components/Skills/data'

export default function Skills() {
  return (
    <>
      {skills.map(({ description, icon, iconColor, title }, index) =>
        <div
          className="border-2 border-gray-850 bg-transparent rounded-xl p-6 flex items-center gap-4"
          data-aos="fade-up"
          data-aos-once={true}
          key={index}
        >
          <FontAwesomeIcon className={cn(iconColor, 'text-2xl')} icon={icon} />
          <div className="space-y-2">
            <h3 className="text-white text-xl font-semibold">{title}</h3>
            <p className="leading-8 text-gray-400">{description}</p>
          </div>
        </div>
      )}
    </>
  )
}
