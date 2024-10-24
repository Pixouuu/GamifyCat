import React from 'react'
import arrow from '../../../../public/arrow.svg'
import { motion } from 'framer-motion'

function LeftPartProject() {
  return (
     <div className=' w-[750px] h-[750px] relative cursor-pointer'>
            <iframe src='https://player.vimeo.com/video/988471491?background=1&autoplay=1&loop=1&muted=1&controls=0' className='w-full h-full rounded-[30px] pointer-events-none'></iframe>
            <button className='text-white absolute bottom-7 left-5 border border-white py-3 px-6 rounded-full text-xl font-jakarta font-bold'>Animation</button>
            <button className='text-white absolute bottom-7 left-48 border border-white py-3 px-6 rounded-full text-xl font-jakarta font-bold'>Web Design & Development</button>
            <button className='absolute bottom-6 right-8 border border-white py-3 px-3 rounded-full hover:bg-greenColor hover:border-greenColor transition-all'>
              <img src={arrow} alt="arrow" className='w-8' />
            </button>
              <motion.h1 initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='font-jakarta text-white text-6xl font-semibold mt-5 hover:text-greenColor duration-500 cursor-pointer'>Samsung S21 Ultra</motion.h1>
              <motion.p initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='font-jakarta text-white text-xl mt-5 opacity-80'>Collaborative advertising campaign for the new Samsung S21 Ultra smartphone on the Forbes business magazine platform, the Samsung brand increased smartphone sales and received many positive mentions on social media.</motion.p>
        </div>
  )
}

export default LeftPartProject