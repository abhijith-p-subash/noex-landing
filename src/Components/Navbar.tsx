/* eslint-disable react/jsx-no-target-blank */
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SiBuymeacoffee } from "react-icons/si";
import { BiStore } from "react-icons/bi";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { NavLink } from "../Contants/Constant";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  return (
    <Disclosure as="nav" className="bg-noexBlack">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1
                    onClick={() => navigate("/")}
                    className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer"
                  >
                    NOEX
                  </h1>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* {NavLink.map((nav, index) => (
                      <Link
                        to={nav.id}
                        onClick={() => {
                          setActive(nav.title);
                        }}
                        className={classNames(
                          active === nav.title
                            ? "bg-gray-900 text-primary"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {nav.title}
                      </Link>
                    ))} */}
                    <a
                      href="https://www.buymeacoffee.com/abhijithpsubash"
                      target="_blank"
                      className="flex items-center bg-primary p-2 rounded-lg text-xs"
                    >
                      <SiBuymeacoffee /> <p>Buy Me a Coffee</p>
                    </a>
                  </div>
                </div>
                <div className="ml-2">
                  <div className="flex space-x-4">
                    <a
                      href="https://noex-store.blinkstore.in"
                      target="_blank"
                      className="flex items-center bg-primary p-2 rounded-lg text-xs"
                    >
                      <BiStore /> <p>STORE</p>
                    </a>
                  </div>
                </div>

                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"home"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"about"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={"docs"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NavLink.map((nav) => (
                <Link
                  to={nav.id}
                  onClick={() => {
                    setActive(nav.title);
                  }}
                  className={classNames(
                    active === nav.title
                      ? "bg-gray-900 text-primary"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  <Disclosure.Button>{nav.title}</Disclosure.Button>
                </Link>
              ))}
              <div className="flex items-center my-2">
                <a
                  href="https://www.buymeacoffee.com/abhijithpsubash"
                  target="_blank"
                  className="flex items-center bg-primary p-2 rounded-lg text-xs"
                >
                  <SiBuymeacoffee /> <p>Buy Me a Coffee</p>
                </a>
              </div>
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
