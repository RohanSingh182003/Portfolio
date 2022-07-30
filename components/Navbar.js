import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }
    const navItem = {
        hover:{
            scale: 1.1,
            y: -3
        },
        tap: {
            scale: 0.8
        }
    }
    return (
        <>
            <motion.nav 
            initial={{
                opacity: 0,
                y: -100
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.2,
                    delay: 1,
                    type: 'spring',
                    stiffness: 250
                }
            }}
            className='flex justify-between md:justify-around px-6 md:px-0 items-center sticky top-0 bg-white z-10 py-2 border-b'>
                <h3 className='text-lg'><span className='text-blue-600 text-2xl'> R</span>OHAN</h3>
                <div className='hidden md:block'>
                    <ul className='flex space-x-4 md:space-x-6'>
                        <motion.li
                        variants={navItem}
                        whileTap="tap"
                        whileHover="hover"
                        className='cursor-pointer'>Home</motion.li>
                        <motion.li
                        variants={navItem}
                        whileTap="tap"
                        whileHover="hover"
                        className='cursor-pointer'>About</motion.li>
                        <motion.li
                        variants={navItem}
                        whileTap="tap"
                        whileHover="hover"
                        className='cursor-pointer'>Portfolio</motion.li>
                        <motion.li
                        variants={navItem}
                        whileTap="tap"
                        whileHover="hover"
                        className='cursor-pointer'>Contact</motion.li>
                    </ul>
                </div>
                <div className='md:hidden'>
                    <AiOutlineMenu onClick={showSidebar} />
                </div>
               {sidebar && <motion.div
               initial={{
                opacity: 0
               }}
               animate={{
                opacity: 1,
                transition: {
                    duration: 0.5
                }
               }}
               className='w-36 h-[100vh] bg-[#ffffffde] absolute top-0 right-0 px-4'>
                    <GrClose onClick={showSidebar} className='ml-auto mt-4 bg-white mr-2'/>
                    <ul className='space-y-2 mt-6'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </motion.div>}
            </motion.nav>
        </>
    )
}

export default Navbar