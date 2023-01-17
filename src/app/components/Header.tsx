import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => (
  <div className="container flex items-center justify-between">
    <div>
      <Link className="w-24 lg:w-48" href="/">Home</Link>
    </div>
    <div className="hidden lg:block">
      {/* menu items for mobile */}
    </div>
    <div className="block lg:hidden">
      <button className="w-5">
        <FontAwesomeIcon className="text-4xl text-black" icon={faBars} />
      </button>
    </div>
  </div>
)

export default Header