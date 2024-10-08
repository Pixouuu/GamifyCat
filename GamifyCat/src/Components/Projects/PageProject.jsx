import React from 'react'
import Cartridge1 from '../../../public/CartRidge/CartRidge_1.webp'
import arrow from "../../../public/arrow.svg"
import Case from '../../../public/casesquare.webp'
import BgPaper from '../../../public/bgpaper.webp'
import { motion } from "framer-motion"

function PageProject() {
  return (

              // Top Part

    <div className='bg-black w-screen h-[2420px] ' id='project-div'>
      <div className='w-full flex flex-row justify-between  h-72 items-center'>
         <motion.h2 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white text-8xl font-bold font-jakarta ml-32 mt-10'>
            <b className='text-greenColor'>Successful</b>
            <br />
            projects
         </motion.h2>
         <motion.p initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white font-medium leading-[155%] text-right text-xl mt-10 mr-32 opacity-80'>Explore our diverse cases, featuring immersive <br></br> mini-games, animated gamification, and <br></br> interactive quizzes.</motion.p>
      </div>

              {/* Left Part */}

      <div className=' w-full h-[1100px] flex flex-row items-start justify-evenly mt-10'>
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

              {/* Right Part */}

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
      </div>

              {/* Bottom Part */}

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

        <button className='btn-container relative overflow-hidden border py-3 px-8 rounded-full bg-greenColor border-greenColor transition-all flex flex-row items-center'>
           <span className='flex flex-row items-center btn-project text-xl'>See all case studies <img src={arrow} className='w-9 ml-1 mt-1 '/></span>
           <span className='flex flex-row items-center btn-project absolute -bottom-8 opacity-80 text-xl'> See all case studies <img src={arrow} className='w-9 ml-1 mt-1'/></span>
        </button> 

     </div>
    </div>
  )
}

export default PageProject