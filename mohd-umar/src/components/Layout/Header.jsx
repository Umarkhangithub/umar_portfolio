import { NavLink, useNavigate } from "react-router-dom";
import ButtonComponent from "../UI/Button";
import Resume from "../../assets/Resume.pdf";

import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();
  const Addproject = () => {
    navigate("/addproject");
  };

  return (
    <div className="  fixed top-0 navbar backdrop-blur-lg bg-transparent shadow-sm shadow-white z-50">
      <div className="grid grid-flow-col  navbar-start">
        <div className="  w-auto drawer lg:hidden  mr-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" drawer-button">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden "
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
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-sky-500  text-base-content min-h-full w-60 lg:w-80 md:w-80   p-4">
              {/* Sidebar content here */}
              <li className=" ">
                <NavLink
                  className="bg-white text-sky-500 hover:text-white hover:bg-sky-700 px-4 py-2 rounded flex items-center justify-center text-center active:bg-sky-500 active:text-white"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="bg-white text-sky-500 px-4 py-2 rounded flex items-center   hover:text-white hover:bg-sky-700 justify-center text-center"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="bg-white text-sky-500 px-4 py-2 rounded flex  hover:text-white hover:bg-sky-700items-center justify-center text-center"
                  to="/education"
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="bg-white text-sky-500 px-4 py-2 rounded flex  hover:text-white hover:bg-sky-700items-center justify-center text-center"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="bg-white text-sky-500 px-4 py-2 rounded flex  hover:text-white hover:bg-sky-700items-center justify-center text-center"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <ButtonComponent>
                  <NavLink to="/userauth">Add Project</NavLink>
                </ButtonComponent>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2   w-full">
          <NavLink to="/" className="    text-2xl  font-bold">
            Mohd <span className="text-sky-500 font-bold">Umar</span>
          </NavLink>
        </div>
      </div>
      <div className=" navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " bg-sky-500  text-white "
                  : " hover:text-white hover:bg-sky-700 "
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? " bg-sky-500  text-white "
                  : " hover:text-white hover:bg-sky-700"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive
                  ? " bg-sky-500  text-white "
                  : " hover:text-white hover:bg-sky-700"
              }
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? " bg-sky-500  text-white "
                  : " hover:text-white hover:bg-sky-700"
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projectlist"
              className={({ isActive }) =>
                isActive
                  ? " bg-sky-500  text-white "
                  : " hover:text-white hover:bg-sky-700"
              }
            >
              project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? " bg-sky-500  text-white "
                  : " hover:text-white hover:bg-sky-700"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="borer border-green-700  grid gap-3 grid-flow-col navbar-end mr-4 lg:mr10">
        <div>
          <ButtonComponent href={Resume} download={"Mohd_Umar.pdf"}>
            Resume
          </ButtonComponent>
        </div>
        <div className="hidden lg:block md:block xl:block 2xl:block">
          <ButtonComponent>
            <NavLink to="/userauth">Add Project</NavLink>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Header;
