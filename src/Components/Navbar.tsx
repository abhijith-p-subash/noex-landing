import { useState } from "react";
import { NavLink } from "../Contants/Constant";
import { HiMenuAlt3, HiOutlineX, HiMenuAlt1 } from "react-icons/hi";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className=" w-full flex py-4 justify-between items-center navbar bg-opacity-10 container mx-auto">
        <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          NOEX
        </h1>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {NavLink.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === NavLink.length - 1 ? "mr-0" : "mr-10"
              } ${active === nav.title ? "text-primary" : "text-noexWhite"}`}
              onClick={() => {
                setActive(nav.title);
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* <button
            className={`${toggle ? "bg-primary" : "bg-red-500"}`}
            onClick={() => setToggle((prev: boolean) => !prev)}
          >
            click
          </button> */}
          <div
            onClick={() => setToggle((prev: boolean) => !prev)}
            className="cursor-pointer"
          >
            {toggle ? (
              <HiOutlineX className="text-3xl" />
            ) : (
              <HiMenuAlt3 className="text-3xl" />
            )}
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {NavLink.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === NavLink.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
