import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="bg-white flex py-14 relative flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:pl-44 space-y-5">
        <h2 className="text-4xl">Contact me</h2>
        <div className="flex items-center cursor-pointer">
          <FiPhoneCall className="text-green-600 text-xl" />
          <p className="ml-2"> +91-6290653563</p>
        </div>
        <div className="flex items-center cursor-pointer">
          <AiOutlineMail className="text-orange-600 text-xl" />
          <p className="ml-2"> rs7289579@gmail.com</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/mr___skywalker/">
            <AiOutlineInstagram className="text-3xl text-red-600 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-singh-5b84a9223/"
          >
            <AiFillLinkedin className="text-3xl text-blue-600 cursor-pointer" />
          </a>
          <a href="https://twitter.com/RohanSingh_CSE">
            <AiFillTwitterCircle className="text-3xl text-cyan-400 cursor-pointer" />
          </a>
          <a href="https://github.com/RohanSingh182003">
            <AiFillGithub className="text-3xl cursor-pointer" />
          </a>
        </div>
        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.9,
          }}
          href="img1.png"
          download
          className="py-2 px-4 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:shadow-blue-300 hover:shadow-md"
        >
          Download CV
        </motion.a>
      </div>
      <form
        method="POST"
        action="https://formspree.io/f/mqkjekak"
        className="w-full md:w-1/2 flex flex-col space-y-4 px-12 mt-10 md:mt-0"
      >
        <input
          required
          className="p-2 border rounded-md focus:shadow-blue-300 focus:shadow-lg focus:outline-none"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <input
          required
          className="p-2 border rounded-md focus:shadow-blue-300 focus:shadow-lg focus:outline-none"
          type="email"
          name="email"
          placeholder="Enter Your Email Id"
        />
        <textarea
          required
          className="p-2 border rounded-md focus:shadow-blue-300 focus:shadow-lg focus:outline-none"
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Enter Message"
        ></textarea>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="absolute right-12 bottom-2 py-2 px-4 text-blue-600 border border-blue-600 rounded-md hover:text-white hover:bg-blue-600 hover:shadow-blue-300 hover:shadow-md"
        >
          Submit
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;
