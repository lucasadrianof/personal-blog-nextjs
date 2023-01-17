import Link from "next/link"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  return (
    <div id="main" className="relative">
      <div className="w-full top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <Link className="w-24 lg:w-48" href="/">Home</Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center">
              <li className="group pl-6"></li>
            </div>
          </div>
          <div className="block lg:hidden">
            <button className="w-5">
              <FontAwesomeIcon className="text-4xl text-black" icon={faBars} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}