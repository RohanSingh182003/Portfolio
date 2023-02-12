import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white md:px-12 lg:px-24 pb-16 pt-4 md:py-10 opacity-[2] relative"
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-start font-semibold text-blue-600">
        My Recent Projects
      </h1>
      <p className="text-slate-700 text-center lg:text-start">
        Here is the all of my Recent Project Section. If you want to see the
        code just Click on it.
      </p>
      <div className="flex flex-col md:flex-row flex-wrap md:my-6 items-center md:justify-evenly cursor-pointer space-y-6 md:space-y-4 lg:space-y-0 mt-6">
        <motion.div
          whileHover={{
            y: -5,
            transition: {
              duration: 0.3,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-64 h-64 rounded-lg relative mt-4 md:mt-2 lg:mt-0 hover:shadow-2xl hover:border-2 border"
        >
          <img
            className="absolute rounded-lg inset-0 w-full h-full object-cover object-center hover:opacity-50"
            src="./auth.png"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="relative rounded-lg z-10 w-full min-h-full p-4 bg-gradient-to-t from-blue-500 to-[#ffffffdc]"
          >
            <a
              href="https://github.com/RohanSingh182003/Auithentication_System"
            >
              <div className="flex flex-col justify-center items-center">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-600 mb-1">
                  Django
                </h2>
                <h1 className="title-font text-xl font-semibold text-blue-700 mb-3">
                  Authentication System
                </h1>
                <p className="text-xs text-green-600 -mt-3 mb-4 ml-auto">
                  ~ Completed
                </p>
                <p className="leading-relaxed text-slate-800">
                  This Authentication System fully make in Django which is a
                  python Framework.
                </p>
              </div>
            </a>
            <div className="absolute bottom-2 right-3 flex">
              <p className="text-xs md:text-sm mx-2 text-white">
                Click it to show the code on{" "}
              </p>
              <AiFillGithub className="text-xl" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{
            y: -5,
            transition: {
              duration: 0.3,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-64 h-64 rounded-lg relative mt-4 md:mt-2 lg:mt-0 hover:shadow-2xl hover:border-2 border"
        >
          <img
            className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
            src="./Ecommerce.png"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="relative rounded-lg z-10 w-full min-h-full p-4  bg-gradient-to-t from-blue-500 to-[#ffffffdc]"
          >
            <a
              href="https://github.com/RohanSingh182003/My-Ecommerce-Store"
            >
              <div className="flex flex-col justify-center items-center">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-600 mb-1">
                  Next.js
                </h2>
                <h1 className="title-font text-xl font-semibold text-blue-700 mb-3">
                  Ecommerce Website
                </h1>
                <p className="text-xs text-yellow-600 -mt-3 mb-4 ml-auto">
                  ~ Under Process
                </p>
                <p className="leading-relaxed text-slate-800">
                  This Ecommerce website is fully made with JavaScript and its
                  frameworks.
                </p>
              </div>
            </a>
            <div className="absolute bottom-2 right-3 flex">
              <p className="text-xs md:text-sm mx-2 text-white">
                Click it to show the code on{" "}
              </p>
              <AiFillGithub className="text-xl" />
            </div>
          </motion.div>
          <div className="absolute bottom-1 right-2 flex lg:hidden">
            <p className="text-xs md:text-sm mx-2 text-black">
              Click it to show the code on{" "}
            </p>
            <AiFillGithub className="text-xl" />
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            y: -5,
            transition: {
              duration: 0.3,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-64 h-64 rounded-lg relative mt-4 md:mt-2 lg:mt-0 hover:shadow-2xl hover:border-2 border"
        >
          <img
            className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
            src="./todoApp.png"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="relative rounded-lg z-10 w-full min-h-full p-4  bg-gradient-to-t from-blue-500 to-[#ffffffdc]"
          >
            <a
              href="https://github.com/RohanSingh182003/ToDo-App"
            >
              <div className="flex flex-col justify-center items-center">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-600 mb-1">
                  React Native
                </h2>
                <h1 className="title-font text-xl font-semibold text-blue-700 mb-3">
                  Todo App
                </h1>
                <p className="text-xs text-green-600 -mt-3 mb-4 ml-auto">
                  ~ Completed
                </p>
                <p className="leading-relaxed text-slate-800">
                  This Todo app is a cross platform mobile application, madw
                  with React Native.
                </p>
              </div>
            </a>
            <div className="absolute bottom-2 right-3 flex">
              <p className="text-xs md:text-sm mx-2 text-white">
                Click it to show the code on{" "}
              </p>
              <AiFillGithub className="text-xl" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          whileHover={{
            y: -5,
            transition: {
              duration: 0.3,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="hidden md:block lg:hidden w-64 h-64 rounded-lg relative mt-4 md:mt-2 lg:mt-0 hover:shadow-2xl hover:border-2 border"
        >
          <img
            className="absolute rounded-lg inset-0 w-full h-full object-cover object-center"
            src="./crud.png"
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            className="relative rounded-lg z-10 w-full min-h-full p-4  bg-gradient-to-t from-blue-500 to-[#ffffffdc]"
          >
            <a
              href="https://github.com/RohanSingh182003/CRUD-Using-Django"
            >
              <div className="flex flex-col justify-center items-center">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-600 mb-1">
                  Django
                </h2>
                <h1 className="title-font text-xl font-semibold text-blue-700 mb-3">
                  CRUD App
                </h1>
                <p className="text-xs text-green-600 -mt-3 mb-4 ml-auto">
                  ~ Completed
                </p>
                <p className="leading-relaxed text-slate-800">
                  This Crud app is made in Django to proform basic crud
                  operations.
                </p>
              </div>
            </a>
            <div className="absolute bottom-2 right-3 flex">
              <p className="text-xs md:text-sm mx-2 text-white">
                Click it to show the code on{" "}
              </p>
              <AiFillGithub className="text-xl" />
            </div>
          </motion.div>
        </motion.div>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="absolute lg:right-44 bottom-2 py-2 px-4 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:shadow-blue-300 hover:shadow-md"
        >
          <a href="https://github.com/RohanSingh182003">
            {" "}
            View more
          </a>
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
