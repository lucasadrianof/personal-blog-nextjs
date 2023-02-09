import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import contactTypes from '@/components/ContactBadges/data'

export default function ContactBadges() {
  return (
    <>
      {contactTypes.map(({ href, icon, iconColor, text, title }, index) => (
        <div className="flex gap-2 p-8 rounded-xl bg-gray-850" key={index}>
          <span className="w-8 mt-2">
            <FontAwesomeIcon className={`${iconColor} text-4xl`} icon={icon} />
          </span>
          <div className="space-y-2 pl-2 text-gray-400">
            <p className="text-xl font-semibold text-white">{title}:</p>
            <a
              className="hover:text-brand-background-element duration-300 transition"
              href={href}
            >
              {text}
            </a>
          </div>
        </div>
      ))}
    </>
  )
}
