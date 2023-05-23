// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import {
  AiOutlineLock,
  AiOutlineExpandAlt,
  AiFillDatabase,
} from "react-icons/ai";

const features = [
  {
    name: "Security Features.",
    description:
      "Noex-CLI includes built-in security features to help developers create secure web applications. It includes best practices for securing Express applications, such as helmet middleware for setting secure HTTP headers, csrf protection, and XSS prevention.",
    icon: (
      <AiOutlineLock
        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Database Management.",
    description:
      "Noex-CLI simplifies database management in Noex applications. It includes pre-configured options for popular databases like MongoDB and MySQL making it easy to set up and configure database connections.",
    icon: (
      <AiFillDatabase
        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Scalability",
    description:
      "Noex-CLI is designed with scalability in mind, allowing developers to easily create scalable web applications. It provides a modular architecture, making it easy to add and configure components like routers, controllers, and services.",
    icon: (
      <AiOutlineExpandAlt
        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
        aria-hidden="true"
      />
    ),
  },
];

const Features = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Noex-CLI is a powerful command-line tool for creating and
                managing Noex applications, which are built on top of Node.js
                and Express. It provides a streamlined workflow for developers
                to create robust and scalable web applications, with built-in
                features for security and database management.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      /> */}
                      {feature.icon}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" */}
          <img
            src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129677/regular_1708x683_0604-nodeos-the-javascript-based-operating-system-Waldek_Newsletter-ef506c21c0db1d42e9abd7a8180e98eb.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
