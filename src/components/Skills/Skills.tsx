import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'

import skills from '@/components/Skills/data'

export default function Skills () {
  return (
    <>
      {skills.map(({ description, icon, iconColor, title }, index) => (
        <div
          className='flex items-center gap-4 rounded-xl border-2 border-gray-850 bg-transparent p-6'
          key={index}
        >
          <FontAwesomeIcon className={cn(iconColor, 'text-2xl')} icon={icon} />
          <div className='space-y-2'>
            <h3 className='text-xl font-semibold text-white'>{title}</h3>
            <p className='leading-8 text-gray-400'>{description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
