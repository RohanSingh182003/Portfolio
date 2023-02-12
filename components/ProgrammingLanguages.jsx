import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";

const ProgrammingLanguages = () => {
    const [css, setCss] = useState(false);
    const [javascript, setJavascript] = useState(false);
    const [python, setPython] = useState(false);
    
    const handleCss = () => {
        setCss(!css);
      };
      const handleJavascript = () => {
        setJavascript(!javascript);
      };
      const handlePython = () => {
        setPython(!python);
      };
  return (
    <motion.div
    initial={{
      opacity: 0,
      y: -20
    }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        type: 'spring',
        stiffness: 160
      }
    }}
    className='space-y-2 md:space-y-4 lg:space-y-6'>
    <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
      <span className='w-20 text-center'>HTML</span>
      <div className='h-4 md:h-5 border w-full rounded-xl md:w-[60vw] relative bg-blue-50'>
        <div className='h-full bg-blue-500 w-[50vw] rounded-xl absolute'></div>
      </div>
      <span>80%</span>
    </div>
    <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
      <span className='w-20 text-center'>CSS</span>
      <div className='h-4 md:h-5 border w-full rounded-xl md:w-[60vw] relative bg-blue-50'>
        <div className='h-full bg-blue-500 w-[36vw] rounded-xl absolute'></div>
      </div>
      <span>60%</span>
      <span onClick={handleCss} className='relative -mt-4 cursor-pointer'>
        <AiOutlineDown className='border md:text-xl rounded-sm font-semibold text-blue-800 absolute bg-white' />
        {css && <AiOutlineUp className='border md:text-xl rounded-sm font-semibold text-blue-800 absolute bg-white' />}
      </span>
    </div>
    {css && <motion.div
      initial={{
        opacity: 0,
        y: -50
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          type: 'spring',
          stiffness: 180
        }
      }}
      className='space-y-4 ml-6 md:ml-24'>
      <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
        <span className='w-20 text-center'>Bootstrap</span>
        <div className='h-4 md:h-5 border w-full rounded-xl md:w-[50vw] relative bg-cyan-50'>
          <div className='h-full bg-cyan-500 w-[40vw] rounded-xl absolute'></div>
        </div>
        <span>80%</span>
      </div>
      <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
        <span className='w-24 md:w-20 text-center'>Tailwind&nbsp;CSS</span>
        <div className='h-4 md:h-5 border w-full rounded-xl md:w-[50vw] relative bg-cyan-50'>
          <div className='h-full bg-cyan-500 w-[40vw] rounded-xl absolute'></div>
        </div>
        <span>80%</span>
      </div>
    </motion.div>}
    <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
      <span className='w-20 text-center'>Java&nbsp;Script</span>
      <div className='h-4 md:h-5 border w-full rounded-xl md:w-[60vw] relative bg-blue-50'>
        <div className='h-full bg-blue-500 w-[36vw] rounded-xl absolute'></div>
      </div>
      <span>60%</span>
      <span onClick={handleJavascript} className='-mt-4 cursor-pointer'>
        <AiOutlineDown className='border md:text-xl rounded-sm font-semibold text-blue-800 absolute bg-white' />
        {javascript && <AiOutlineUp className='border md:text-xl rounded-sm font-semibold text-blue-800 absolute bg-white' />}
      </span>
    </div>
    {javascript && <motion.div
      initial={{
        opacity: 0,
        y: -50
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          type: 'spring',
          stiffness: 180
        }
      }}
      className='space-y-4 ml-6 md:ml-24'>
      <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
        <span className='w-20 text-center'>React.js</span>
        <div className='h-4 md:h-5 border w-full rounded-xl md:w-[50vw] relative bg-cyan-50'>
          <div className='h-full bg-cyan-500 w-[25vw] rounded-xl absolute'></div>
        </div>
        <span>50%</span>
      </div>
      <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
        <span className='w-20 text-center'>Next.js</span>
        <div className='h-4 md:h-5 border w-full rounded-xl md:w-[50vw] relative bg-cyan-50'>
          <div className='h-full bg-cyan-500 w-[30vw] rounded-xl absolute'></div>
        </div>
        <span>60%</span>
      </div>
      <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
        <span className='w-20 text-center'>React&nbsp;Native</span>
        <div className='h-4 md:h-5 border w-full rounded-xl md:w-[50vw] relative bg-cyan-50'>
          <div className='h-full bg-cyan-500 w-[20vw] rounded-xl absolute'></div>
        </div>
        <span>40%</span>
      </div>
    </motion.div>}
    <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
      <span className='w-20 text-center'>Python</span>
      <div className='h-4 md:h-5 border w-full rounded-xl md:w-[60vw] relative bg-blue-50'>
        <div className='h-full bg-blue-500 w-[36vw] rounded-xl absolute'></div>
      </div>
      <span>60%</span>
      <span onClick={handlePython} className='-mt-4 cursor-pointer'>
        <AiOutlineDown className='border md:text-xl rounded-sm font-semibold text-blue-800 absolute bg-white' />
        {python && <AiOutlineUp className='border md:text-xl rounded-sm font-semibold text-blue-800 absolute bg-white' />}
      </span>
    </div>
    {python && <motion.div
      initial={{
        opacity: 0,
        y: -50
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          type: 'spring',
          stiffness: 180
        }
      }}
      className='flex px-2 space-x-2 md:space-x-4 items-center ml-6 md:ml-24'>
      <span className='w-20 text-center'>Django</span>
      <div className='h-4 md:h-5 border w-full rounded-xl md:w-[50vw] relative bg-cyan-50'>
        <div className='h-full bg-cyan-500 w-[35vw] rounded-xl absolute'></div>
      </div>
      <span>70%</span>
    </motion.div>}
    <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
      <span className='w-20 text-center'>C</span>
      <div className='h-4 md:h-5 border w-full rounded-xl md:w-[60vw] relative bg-blue-50'>
        <div className='h-full bg-blue-500 w-[48vw] rounded-xl absolute'></div>
      </div>
      <span>80%</span>
    </div>
    <div className='flex px-2 space-x-2 md:space-x-4 items-center'>
      <span className='w-20 text-center'>C++</span>
      <div className='h-4 md:h-5 border w-full rounded-xl md:w-[60vw] relative bg-blue-50'>
        <div className='h-full bg-blue-500 w-[24vw] rounded-xl absolute'></div>
      </div>
      <span>40%</span>
    </div>
  </motion.div>
  )
}

export default ProgrammingLanguages