import React from 'react'
import Cartridge1 from '../../../../public/CartRidge/CartRidge_1.webp'
import Cartridge4 from '../../../../public/CartRidge/CartRidge_4.webp'
import Cartridge6 from '../../../../public/CartRidge/CartRidge_6.webp'
import { motion } from "framer-motion"

function LeftPartMain() {
  return (
    <div className='h-screen w-2/5 flex flex-col justify-center'>
          <motion.div initial={{x: 600, y: 200}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge6} alt="Product Image" className='w-72 cart3 mt-32 hover:w-80 transition-all duration-400 opacity-90 hover:opacity-100'/>
          </motion.div>
          <motion.div initial={{x: 600, y: 50}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge4} alt="Product Image" className='w-72 cart2 hover:w-80 transition-all duration-400 opacity-90 hover:opacity-100'/>
          </motion.div>
          <motion.div initial={{x: 600, y: -150}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge1} alt="Product Image" className='w-48 cart1 hover:w-52 transition-all duration-400 opacity-90 hover:opacity-100'/>
          </motion.div>
        </div>
  )
}

export default LeftPartMain