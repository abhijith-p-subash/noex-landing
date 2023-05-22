/* eslint-disable react/jsx-no-target-blank */
import { SiBuymeacoffee } from "react-icons/si";
import Lottie from "lottie-react";

import Hero from "../Components/Hero";
import Features from "../Components/Features";
import technology from "../Contants/Lottie/technology.json";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <div>
        <div className="overflow-hidden bg-secondary py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="hidden lg:block">
                <Lottie width={100} animationData={technology} loop={true} />
              </div>
              <div className="lg:col-span-2 xs:col-span-3">
                <h1 className="font-bold lg:text-4xl xs:text-3xl">
                  The open source platform designed for the future. Build
                  enterprise.
                </h1>
                <div className="my-6">
                  <p className="text-lg">
                    A complete development kit for building scalable server-side
                    apps. Contact us to find out more about expertise
                    consulting, on-site enterprise support, trainings, and
                    private sessions.
                  </p>
                  <button className="btn btn-primary-outline my-4">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SUPPORT US */}
      <div>
        <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-primary text-center">
                Support Us
              </h1>
              <p className="my-6 text-lg">
                Nest is an MIT-licensed open-source project. Hence, it grows
                thanks to the sponsors and support by the amazing backers.
                Please, consider supporting us!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://www.buymeacoffee.com/abhijithpsubash"
                target="_blank"
                className="flex items-center bg-primary btn"
              >
                <SiBuymeacoffee className="text-lg" /> Buy Me a Coffee
              </a>
            </div>
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 xs:col-span-3">
                <h1 className="font-bold lg:text-4xl xs:text-3xl">
                  The open source platform designed for the future. Build
                  enterprise.
                </h1>
                <div className="my-6">
                  <p className="text-lg">
                    A complete development kit for building scalable server-side
                    apps. Contact us to find out more about expertise
                    consulting, on-site enterprise support, trainings, and
                    private sessions.
                  </p>
                  <button className="btn btn-primary-outline my-4">
                    Contact Us
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
