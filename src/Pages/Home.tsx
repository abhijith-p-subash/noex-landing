/* eslint-disable react/jsx-no-target-blank */
import { SiBuymeacoffee } from "react-icons/si";
import { MdOutlineContentCopy } from "react-icons/md";
import Lottie from "lottie-react";
import { BiStore } from "react-icons/bi";

import Hero from "../Components/Hero";
import Features from "../Components/Features";
// import Testmonial from "../Components/Testmonial";
import technology from "../Contants/Lottie/technology.json";
import { useState } from "react";

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copy, setCopy] = useState(false);
  const handleCopy = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopy(true);
  };
  return (
    <div>
      <Hero />
      <div>
        <div className="overflow-hidden bg-secondary py-20 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="hidden lg:block">
                <Lottie width={100} animationData={technology} loop={true} />
              </div>
              <div className="lg:col-span-2 xs:col-span-3">
                <h1 className="font-bold lg:text-4xl xs:text-3xl">
                  The open source platform designed for the future.
                </h1>
                <div className="my-6">
                  <p className="text-lg">
                    Noex simplifies the creation of backend applications,
                    allowing developers to rapidly bootstrap their projects. Our
                    intuitive command-line interface (CLI) equips you with
                    powerful tools to effortlessly set up a new project,
                    configure essential settings, and generate the initial
                    structure. Say goodbye to time-consuming boilerplate code
                    and get straight into developing your application's unique
                    features.
                  </p>
                  {/* <button className="btn btn-primary-outline my-4">
                    Contact Us
                  </button> */}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold text-primary text-center">
                Exmaple Code
              </h1>
              <div className="lg:mx-10 xs:mx-0 my-4">
                <p className="text-lg">Create a new Noex application:</p>
                <br />
                <p>
                  You can create a project with different Database
                  configurations using NOEX-CLI. It allows you to create a
                  MongoDB project where all the modules and newly created
                  modules are based on MongoDB. However, creating a MySQL
                  project alone is not supported because the user login logs and
                  all other logs are kept in MongoDB. During module creation,
                  you can choose the required database, giving you the
                  flexibility to build a versatile and scalable application
                  tailored to your needs.
                </p>
                <div className="bg-gray-500 bg-opacity-40 p-6 rounded-lg flex justify-between my-4">
                  <div>
                    <p className="font-bold text-lg">noex new my-app</p>
                    <p className="text-lg">eg: noex new Blog</p>
                  </div>
                  <div>
                    <button
                      className=" hover:text-primary"
                      onClick={() => handleCopy("noex new my-app")}
                    >
                      <MdOutlineContentCopy className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:mx-10 xs:mx-0 my-4">
                <p className="text-lg">Create new module:</p>
                <div className="bg-gray-500 bg-opacity-40 p-6 rounded-lg flex justify-between my-4">
                  <div>
                    <p className="font-bold text-lg">
                      noex generate module-name
                    </p>
                    <p className="text-lg">eg: noex generate post</p>
                  </div>
                  <div>
                    <button
                      className=" hover:text-primary"
                      onClick={() => handleCopy("noex generate module-name")}
                    >
                      <MdOutlineContentCopy className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:mx-10 xs:mx-0 my-4">
                <p className="text-lg">
                  To access the help documentation for Noex-CLI, you can use the
                  following command::
                </p>
                <div className="bg-gray-500 bg-opacity-40 p-6 rounded-lg flex justify-between my-4">
                  <div>
                    <p className="font-bold text-lg">noex -h</p>
                  </div>
                  <div>
                    <button
                      className=" hover:text-primary"
                      onClick={() => handleCopy("noex -h")}
                    >
                      <MdOutlineContentCopy className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      {/* TESTIMONIAL */}
      {/* <Testmonial /> */}
      {/* SUPPORT US */}
      <div>
        <div className="overflow-hidden bg-gray-900 py-20 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-primary text-center">
                Support Us
              </h1>
              <p className="my-6 text-lg">
                NOEX is an ISC-licensed open-source project. Hence, it grows
                thanks to the sponsors and support by the amazing backers.
                Please, consider supporting us!
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href="https://www.buymeacoffee.com/abhijithpsubash"
                target="_blank"
                className="flex items-center bg-primary btn"
              >
                <SiBuymeacoffee className="text-lg" /> Buy Me a Coffee
              </a>
              <a
                href="https://noex-store.blinkstore.in"
                target="_blank"
                className="flex items-center bg-primary btn"
              >
                <BiStore className="text-lg" /> <p> STORE</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
