import React, { useState } from 'react'
import {motion} from 'framer-motion'

const About = () => {
    const [education, setEducation] = useState( true )
    const [achivements, setAchivements] = useState( false )
    const [skills, setSkills] = useState( false )
    const aboutVariants = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.3,
          when: "beforeChildren",
          staggerChildren: 0.3
        }
      }
    }
    const innerAboutVariants = {
      hidden: {
        opacity: 0,
        x: '-60vw'
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.2,
          type: 'spring',
          when: "afterChildren"
        }
      }
    }
    const handleEducation = () => {
        setEducation( true )
        setAchivements( false )
        setSkills( false )
      }
      const handleachivements = () => {
        setEducation( false )
        setAchivements( true )
        setSkills( false )
      }
      const handleSkills = () => {
        setEducation( false )
        setAchivements( false )
        setSkills( true )
      }
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
    id="about" className='bg-white flex justify-center md:justify-around flex-wrap px-6 pt-8'>
    <div className='w-52 bg-cyan-50 border border-cyan-100 shadow-xl shadow-cyan-50 h-52 md:w-64 md:h-64 rounded-lg overflow-hidden'>
    <img className='w-64 -mr-8' src="./pic.png" alt="My Pic" />
    </div>
    <div className='lg:w-6/12 md:w-5/12'>
      <h2 className='md:text-lg lg:text-xl text-blue-600 font-semibold text-center md:text-start'>About me</h2>
      <p className='text-xs text-slate-700 px-6 md:px-2 text-center md:text-start'>I am Rohan Singh , from Kolkata , West Bengal. Codeing is my hobby. My fevourite programming language is JavaScript.</p>
      <ul className='flex space-x-3 md:space-x-6 mt-4 mb-2 border-b-2 pb-1'>
        <motion.li
          whileHover={{
            y: -3,
            scale: 1.1,
            transition: {
              duration: 0.2
            }
          }}
          whileTap={{
            scale: 0.9
          }}
          onClick={() => { handleEducation() }} className={`cursor-pointer ${education && 'underline-offset-4 underline text-blue-600'}`}>Education</motion.li>
        <motion.li
          whileHover={{
            y: -3,
            scale: 1.1,
            transition: {
              duration: 0.2
            }
          }}
          whileTap={{
            scale: 0.9
          }}
          onClick={() => { handleachivements() }} className={`cursor-pointer ${achivements && 'underline-offset-4 underline text-blue-600'}`}>Achivements</motion.li>
        <motion.li
          whileHover={{
            y: -3,
            scale: 1.1,
            transition: {
              duration: 0.2
            }
          }}
          whileTap={{
            scale: 0.9
          }}
          onClick={() => { handleSkills() }} className={`cursor-pointer ${skills && 'underline-offset-4 underline text-blue-600'}`}>Skills</motion.li>
      </ul>
      {education && <motion.div
        variants={aboutVariants}
        initial="hidden"
        animate="visible"
      >
        <ul
          className='list-disc space-y-4 pt-2 lg:mt-3'>
          <motion.div
            variants={innerAboutVariants}
            className='flex items-center'>
            <li className='text-blue-600'><strong>10 </strong><sup> th</sup> :</li><span className='ml-2 text-xs md:text-sm text-slate-900'>From WBBSE(2019) with 65%.</span></motion.div>
          <motion.div
            variants={innerAboutVariants}
            className='flex'>
            <li className='text-blue-600'><strong>12 </strong><sup> th</sup> :</li><span className='ml-2 text-xs md:text-sm text-slate-900'>From WBCHSE(2021) with 70.8%.</span></motion.div>
          <motion.div
            variants={innerAboutVariants}
            className='flex'>
            <li className='text-blue-600'><strong>Graduation</strong>&nbsp;:</li><span className='ml-2 text-xs md:text-sm text-slate-900'>Persuing Batchelor Of Technology(2021-25) from Swami Vivekananda University</span></motion.div>
        </ul>
      </motion.div>}
      {achivements && <motion.div
        variants={aboutVariants}
        initial="hidden"
        animate="visible">
        <ul className='list-disc space-y-4 pt-2 lg:mt-3'>
          <motion.li
            variants={innerAboutVariants} className='text-blue-600'><strong> Finalist of Smart India Hackathon 2022.</strong></motion.li>
        </ul>
      </motion.div>}
      {skills && <motion.div
        variants={aboutVariants}
        initial="hidden"
        animate="visible">
        <ul className='list-disc space-y-4 pt-2 lg:mt-3'>
          <motion.li
            variants={innerAboutVariants}
            className='text-blue-600'><strong>Web Development</strong></motion.li>
          <motion.li
            variants={innerAboutVariants}
            className='text-blue-600'><strong>Web Designing</strong></motion.li>
        </ul>
      </motion.div>}
    </div>
  </motion.section>
  )
}

export default About