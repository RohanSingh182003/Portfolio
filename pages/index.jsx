import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import About from "../components/About";
import ProgrammingLanguages from "../components/ProgrammingLanguages";
import Cirtificates from "../components/Cirtificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const [languages, setLanguages] = useState(true);
  const [cirtificates, setCirtificates] = useState(false);

  const handleLanguages = () => {
    setLanguages(true);
    setCirtificates(false);
  };
  const handleCirtificates = () => {
    setLanguages(false);
    setCirtificates(true);
  };
  return (
    <>
      <Head>
        <title>Rohan Singh | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ------------------------navbar----------------------- */}
      <Navbar />
      {/* ------------------------home----------------------- */}
      <Main />
      {/* ------------------------about----------------------- */}
      <About />
      {/* ------------------------ skills & achivements ----------------------- */}
      <section
        id="languages"
        className="flex flex-col space-y-4 md:space-y-6 bg-white px-4 md:px-16 lg:px-28 py-8 md:py-20"
      >
        <div className="flex justify-evenly">
          <div>
            <motion.h1
              whileHover={{
                y: -3,
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => {
                handleLanguages();
              }}
              className={`${
                languages == true
                  ? "text-sm md:text-2xl lg:text-4xl text-blue-600 font-semibold"
                  : "text-xs md:text-xl lg:text-3xl text-slate-600 font-light"
              } cursor-pointer`}
            >
              Programming Languages
            </motion.h1>
            {languages && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 160,
                  },
                }}
                className="mt-1 text-slate-800 text-xs md:text-base pr-4 md:pr-0"
              >
                Here are some Programming languages or skills known by me.
              </motion.p>
            )}
          </div>
          <div>
            <motion.h1
              whileHover={{
                y: -3,
                scale: 1.1,
                transition: {
                  duration: 0.2,
                },
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => {
                handleCirtificates();
              }}
              className={`${
                cirtificates == true
                  ? "text-xs md:text-2xl lg:text-4xl text-blue-600 font-semibold"
                  : "text-sm md:text-xl lg:text-3xl text-slate-600 font-light"
              } cursor-pointer`}
            >
              My Cirtifications
            </motion.h1>
            {cirtificates && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 160,
                  },
                }}
                className="mt-1 text-slate-800 text-xs md:text-base pl-4 md:pl-0"
              >
                Here are all of my skilled cirtificates.
              </motion.p>
            )}
          </div>
        </div>
        {languages && <ProgrammingLanguages />}
        {cirtificates && <Cirtificates />}
      </section>
      {/* ------------------------projects----------------------- */}
      <Projects/>
      {/* ------------------------contact----------------------- */}
      <Contact/>
      {/* ------------------------footer----------------------- */}
      <Footer />
    </>
  );
}
