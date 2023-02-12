import React from 'react'
import {motion} from 'framer-motion'

const Cirtificates = () => {
  return (
    <motion.div
    initial={{
      opacity: 0,
      y: -20,
    }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        type: "spring",
        stiffness: 160,
      },
    }}
    className="text-gray-600 body-font"
  >
    <div className="container px-5 pb-10 pt-14 mx-auto">
      <div className="flex flex-wrap justify-evenly -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a
            href="cir1.png"
            className="block relative h-48 rounded overflow-hidden"
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="cir1.png"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              Python
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Data Manipulation in Python
            </h2>
            <p className="mt-1">29/01/2022</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a
            href="cir2.png"
            className="block relative h-48 rounded overflow-hidden"
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="cir2.png"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              R
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Data Science with R programming
            </h2>
            <p className="mt-1">19/11/2021</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a
            href="cir3.png"
            className="block relative h-48 rounded overflow-hidden"
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="cir3.png"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              Web Development
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Full stact web development program
            </h2>
            <p className="mt-1">15/09/2021</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a
            href="cir4.png"
            className="block relative h-48 rounded overflow-hidden"
          >
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src="cir4.png"
            />
          </a>
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              Django
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Django in Hindi
            </h2>
            <p className="mt-1">03/2022</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Cirtificates