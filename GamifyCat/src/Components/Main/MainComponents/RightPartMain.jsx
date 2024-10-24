import React from 'react'
import Cartridge2 from '../../../../public/CartRidge/CartRidge_2.webp'
import Cartridge3 from '../../../../public/CartRidge/CartRidge_3.webp'

import Cartridge5 from '../../../../public/CartRidge/CartRidge_5.webp'
import { motion } from "framer-motion"

function RightPartMain() {
  return (
     <div className='h-screen w-2/5 flex flex-col justify-center'>
            <motion.div initial={{x: -600, y: 200}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
              <img src={Cartridge3} alt="Product Image" className='w-[270px] cart4 mt-32 hover:w-72 transition-all duration-400 opacity-90 hover:opacity-100'/>
            </motion.div>
            <motion.div initial={{x: -600, y: 50}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
              <img src={Cartridge5} alt="Product Image" className='w-72 cart5 mt-10 hover:w-80 transition-all duration-400 opacity-90 hover:opacity-100'/>
            </motion.div>
            <motion.div initial={{x: -600, y: -150}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
              <img src={Cartridge2} alt="Product Image" className='w-72 cart6 hover:w-80 transition-all duration-400 opacity-90 hover:opacity-100'/>
            </motion.div>
        </div>
  )
}

export default RightPartMain