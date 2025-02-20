import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import socialMedias from '@/components/Social/data'
import { cn } from '@/utils/cn'

export default function Social () {
  return (
    <>
      {socialMedias.map(({ href, icon, iconClass, label }, key) => (
        <a
          aria-label={label}
          href={href}
          key={key}
          rel='noreferrer'
          target='_blank'
        >
          <span
            className={cn(
              'w-10 h-10 rounded-lg hover:bg-gradient-to-r from-brand-background-element to-rose-900 flex justify-center items-center hover:text-white transition-colors duration-300 ease-in-out bg-gray-850',
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
