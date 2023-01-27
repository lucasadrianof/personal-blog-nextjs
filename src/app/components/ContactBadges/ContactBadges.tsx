import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contactTypes from './data'

export default function ContactBadges() {
  return (
    <>
      {contactTypes.map(({ href, icon, text, title }, index) => (
        <div className="flex gap-2 p-8 rounded-xl bg-[#212425]" key={index}>
          <span className="w-8 mt-2">
            <FontAwesomeIcon className="text-4xl text-white" icon={icon} />
          </span>
          <div className="space-y-2 pl-2 text-gray-400">
            <p className="text-xl font-semibold text-white">{title}:</p>
            <a href={href}>{text}</a>
          </div>
        </div>
      ))}
    </>
  )
}
