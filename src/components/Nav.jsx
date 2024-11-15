import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const navItems = (
    <>
      <li onClick={handleMenuClick}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={handleMenuClick}>
        <Link to="/add-profiles">Add Profiles</Link>
      </li>
      <li onClick={handleMenuClick}>
        <Link to="/login" className="btn btn-primary px-6">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 shadow-lg bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start space-x-1 w-2/3">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="w-7 h-7 text-primary"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            >
              <path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 17l5 1l.75-1.5M14 21v-4l-4-3l1-6" />
              <path d="M6 12V9l5-1l3 3l3 1" />
              <path fill="white" d="M19.5 20a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" />
            </g>
          </svg> */}
          <RiTeamFill className="text-primary text-2xl" />
          <Link to="/" className="text-xl font-bold text-primary uppercase">
            We Are a Team
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2 items-center">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end lg:hidden w-1/3">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost relative lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`absolute right-0 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2 ${
                isOpen ? "" : "hidden"
              }`}
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
