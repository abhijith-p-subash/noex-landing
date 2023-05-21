/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineContentCopy } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
// const links = [
//   { name: "Open roles", href: "#" },
//   { name: "Internship program", href: "#" },
//   { name: "Our values", href: "#" },
//   { name: "Meet our leadership", href: "#" },
// ];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Downloads", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copy, setCopy] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g noex-cli");
    setCopy(true);
    alert("copied");
  };

  return (
    <div className="relative isolate overflow-hidden bg-noexBlack py-24 sm:py-32 h-screen">
      <img
        src={`${process.env.PUBLIC_URL}/assets/noex-g.webp`}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#46f3ff] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#46f3ff] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hello,
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              NOEX
            </span>{" "}
            !
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Noex CLI: Transform your backend development journey with ease,
            security, and scalability. Build robust applications effortlessly
            while ensuring ironclad protection and limitless growth.
          </p>
        </div>
        <div className="bg-noexBlack bg-opacity-70 rounded-lg p-4 flex items-center justify-between mt-6 lg:w-1/2 md:w-1/2 xs:w-full mx-auto max-w-2xl lg:mx-0">
          <p className="font-bold text-primary text-lg">
            npm install -g noex-cli
          </p>
          <button className=" hover:text-primary" onClick={() => handleCopy()}>
            <MdOutlineContentCopy className="text-xl" />
          </button>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <button
              onClick={() => navigate("/docs")}
              className="btn btn-primary"
            >
              Documentions
            </button>

            <a
              href="https://github.com/sixbeeshades/nox_framework"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 btn btn-noex-white-outline"
            >
              <AiOutlineGithub /> Source Code
            </a>

            {/* <button className="btn btn-primary-outline">Buy Me a Coffee</button> */}
            {/* {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))} */}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default Hero;
