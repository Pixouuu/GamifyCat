import React from 'react'
import arrow from '../../../../public/arrow.svg'
import { motion } from 'framer-motion'
import Button from '../../GeneralComponents/Button'


function BottomPartProject() {
  return (
    <div className=' w-full h-[1000px] flex items-center flex-col font-jakarta text-white font-bold'>
        <div className='relative'>
            <iframe src="https://player.vimeo.com/video/989084405?background=1&autoplay=1&loop=1&muted=1&controls=0" className='w-[1000px] h-[670px] pointer-events-none'></iframe> 
            <button className='text-white absolute bottom-7 left-7 border border-white py-3 px-6 rounded-full text-xl font-jakarta font-bold'>App Design</button>
            <button className='text-white absolute bottom-7 left-52 border border-white py-3 px-6 rounded-full text-xl font-jakarta font-bold'>AR</button>
            <button className='text-white absolute bottom-7 left-[305px] border border-white py-3 px-6 rounded-full text-xl font-jakarta font-bold'>UX/UI</button>
            <button className='absolute bottom-6 right-8 border border-white py-3 px-3 rounded-full hover:bg-greenColor hover:border-greenColor transition-all'>
                <img src={arrow} alt="arrow" className='w-8' />
            </button>
        </div>
        
        <div className='w-[1000px] h-[200px] '>
            <motion.h1 initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='text-6xl mt-5 hover:text-greenColor duration-500 cursor-pointer'>Dartmouth College</motion.h1>
            <motion.p initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='opacity-80 mt-5 text-lg'>Developed an AR app for the Hood Art Museum at Dartmouth College, allowing visitors to access detailed <br/> information about exhibits by pointing their smartphones at the artwork. </motion.p>
        </div>

        <Button width={"290px"} height={"70px"} text1={"See all case studies"} marginTop={"10px"} bottom={"-30px"}/>
     </div>
  )
}

export default BottomPartProject