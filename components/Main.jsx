import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <motion.section
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }}
    className='relative md:px-6' id='home'>
    <div className='flex justify-evenly mt-10'>
      <div className='w-8/2 h-[22rem] md:h-[60vh] md:w-[60vw] lg:h-[100vh] lg:w-[70vw] flex items-center flex-col justify-center md:-mt-10 lg:-mt-16'>
        <div className='absolute left-2 md:left-12 -mt-24 lg:left-20'>
          <h1 className='text-xl md:text-2xl lg:text-5xl text-center'><sup className='text-slate-700'> hi,</sup> I&apos;m <span className='text-blue-600'> Rohan </span>Singh </h1>
          <h2 className='text-md md:text-lg lg:text-2xl text-center mt-2 flex absolute left-6 lg:left-14 w-52 md:w-72'><span className='text-lg md:text-2xl lg:text-3xl'> I </span><span className='text-red-700 text-sm md:text-xl mt-1'>&nbsp; ❤ &nbsp;</span>&nbsp;<span className='text-blue-600 text-lg md:text-xl lg:text-2xl'>
            <Typewriter
              options={{
                strings: ['JavaScript', 'React.js', 'MongoDB', 'Express.js', 'Node.js'],
                autoStart: true,
                loop: true,
              }} />
          </span></h2>
        </div>
      </div>
      <img src="img1.png" className='h-96 md:h-[60vh] lg:h-[100vh] fixed right-0 md:right-20 lg:right-36 -z-10' />
    </div>
  </motion.section>
  )
}

export default Main