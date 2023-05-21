// import {
//   AiFillFacebook,
//   AiOutlineInstagram,
//   AiOutlineGithub,
// } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";

import { Link } from "react-router-dom";
import { NavLink } from "../Contants/Constant";

const Footer = () => {
  return (
    // <footer className="bg-secondary w-full ">
    //   <div className="container mx-auto py-10 ">
    //     <div className="grid grid-cols-5 gap-4">
    //       <div>
    //         <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
    //           NOEX
    //         </h1>
    //         <p>Unleash your coding superpower and build the future!</p>
    //       </div>
    //       <div className="items-center flex w-full">
    //         <ul>
    //           {NavLink.map((navLink) => (
    //             <li key={navLink.id}>
    //               <Link to={navLink.id}>{navLink.title}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div>
    //         <button className="bg-primary">
    //           <SiBuymeacoffee /> Buy Me a Coffee
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            NOEX
          </h1>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-noexWhite sm:mb-0">
            {NavLink.map((navLink) => (
              <li id={navLink.id}>
                <Link className="mr-4 hover:underline md:mr-6 " to={navLink.id}>
                  {navLink.title}
                </Link>
              </li>
            ))}
            <li>
              <button className="flex btn btn-primary items-center">
                <SiBuymeacoffee className="text-lg" /> Buy Me a Coffee
              </button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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
