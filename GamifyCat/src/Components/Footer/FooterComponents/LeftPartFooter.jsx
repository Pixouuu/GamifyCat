import React from 'react'
import { motion } from 'framer-motion'
import HoverLinks from '../../GeneralComponents/HoverLinks'

function LeftPartFooter() {
  return (
    <div className='flex-1 h-full text-white font-jakarta font-bold'>
                <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='text-8xl mt-12 ml-24'>Let's talk</motion.h1>
                <motion.h3 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.2}} viewport={{once: true}} className='text-xl ml-24 mt-1 cursor-pointer inline-block li-header'>hello@gamifycat.io
                  <HoverLinks width={"195px"} />
                </motion.h3>
                <motion.p initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}} className='text-light ml-24 opacity-50 mt-28'>CANADA</motion.p>
                <motion.h3 initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}} className='mt-6 text-xl ml-24 li-header cursor-pointer inline-block'>108 Waterfront CT SW, Calgary, AB, T2P1K7
                  <HoverLinks width={"420px"} />
                </motion.h3>
            </div>
  )
}

export default LeftPartFooter