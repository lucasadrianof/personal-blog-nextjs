import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import socialMedias from './data'

export default function Social() {
  return (
    <>
      {socialMedias.map(({ href, icon, iconClass }, key) => (
        <a key={key} href={href} target="_blank" rel="noreferrer">
          <span
            className={cn(
              'w-10 h-10 rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] flex justify-center items-center  hover:text-white transition-colors duration-300  ease-in-out  bg-[#212425]',
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
