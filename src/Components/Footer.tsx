/* eslint-disable react/jsx-no-target-blank */
// import { SiBuymeacoffee } from "react-icons/si";

import { Link } from "react-router-dom";
import { NavLink } from "../Contants/Constant";

const Footer = () => {
  return (
    <footer className="shadow mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between xs:justify-center">
          <h1 className="xs:text-center font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            NOEX
          </h1>
          <div className="flex items-center justify-center h-full">
            {" "}
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium justify-center text-noexWhite sm:mb-0 xs:mt-4 lg:mt-0 text-center">
              {NavLink.map((navLink) => (
                <li id={navLink.id}>
                  <Link
                    className="mr-4 hover:underline md:mr-6 "
                    to={navLink.id}
                  >
                    {navLink.title}
                  </Link>
                </li>
              ))}
              {/* <li className="xs:mt-4 sm:mt-0">
                <a
                  href="https://www.buymeacoffee.com/abhijithpsubash"
                  target="_blank"
                  className="flex btn btn-primary items-center"
                >
                  <SiBuymeacoffee className="text-lg" /> Buy Me a Coffee
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            NOEX™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
