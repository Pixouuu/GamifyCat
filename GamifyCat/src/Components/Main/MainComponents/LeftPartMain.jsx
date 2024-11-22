import React from 'react'
import Cartridge1 from '../../../../public/CartRidge/CartRidge_1.webp'
import Cartridge4 from '../../../../public/CartRidge/CartRidge_4.webp'
import Cartridge6 from '../../../../public/CartRidge/CartRidge_6.webp'
import { motion } from "framer-motion"

function LeftPartMain() {
  return (
    <div className='md:h-screen  w-[80%] md:w-full flex flex-row md:flex-col items-center justify-center'>
          <motion.div initial={{x: 600, y: 200}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge6} alt="Product Image" className='md:w-72 w-48  cart3 mt-32 hover:w-80 transition-all duration-400 opacity-90 ml-7 hover:opacity-100'/>
          </motion.div>
          <motion.div initial={{x: 600, y: 50}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge4} alt="Product Image" className='md:visible invisible md:w-72 w-48 cart2 hover:w-80 transition-all duration-400 opacity-90 hover:opacity-100'/>
          </motion.div>
          <motion.div initial={{x: 600, y: -150}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge1} alt="Product Image" className='md:w-48 w-24 cart1 hover:w-52 transition-all duration-400 opacity-90 hover:opacity-100 mt-5'/>
          </motion.div>
        </div>
  )
}

export default LeftPartMain