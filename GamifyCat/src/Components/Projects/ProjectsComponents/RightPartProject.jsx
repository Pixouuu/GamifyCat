import React from 'react'
import BgPaper from '../../../../public/bgpaper.webp'
import Cartridge1 from '../../../../public/CartRidge/CartRidge_1.webp'
import Case from '../../../../public/casesquare.webp'
import arrow from "../../../../public/arrow.svg"
import { motion } from "framer-motion"


function RightPartProject() {
  return (
    <div className=' w-[750px] h-[750px] rounded-xl mt-20'>
          <div className='w-full h-full rounded-[30px] flex justify-center items-center bg-emerald-800 relative cursor-pointer'>
              <img src={BgPaper} className='absolute rounded-[30px] mix-blend-multiply pointer-events-none' />
              <img src={Cartridge1} alt="img" className='relative w-80 hover:w-[330px] transition-all duration-400' />
              <img src={Case} className='top-0 left-0 absolute pointer-events-none' />
              <button className='text-white absolute bottom-7 left-5 border border-white py-3 px-6 rounded-full text-xl font-jakarta font-bold'>Game Design</button>
              <button className='text-white absolute bottom-7 left-15 border border-white py-3 px-6 rounded-full text-xl font-jakarta font-bold'>Web Design & Development</button>
              <button className='absolute bottom-6 right-8 border border-white py-3 px-3 rounded-full hover:bg-greenColor hover:border-greenColor transition-all'>
                <img src={arrow} alt="arrow" className='w-8' />
              </button>
          </div>
            <motion.h1 initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='font-jakarta text-white text-6xl font-semibold mt-5 hover:text-greenColor duration-500 cursor-pointer'>Asus ZenBook 14</motion.h1>
            <motion.p initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='font-jakarta text-white text-xl mt-5 opacity-80'>Developed an animated landing page and a Unity pixel adventure game for the Asus ZenBook 14. The game featured tasks that rewarded users with promo codes, boosting engagement and sales.</motion.p>
        </div>
  )
}

export default RightPartProject