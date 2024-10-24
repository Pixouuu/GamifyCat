import React from 'react'
import { motion } from 'framer-motion'
import AnimationBase from '../../GeneralComponents/AnimationBase'

function TopPartProject() {
  return (
    <div className='w-full flex flex-row justify-between  h-72 items-center'>
        <AnimationBase>
          <h2 className='text-white text-8xl font-bold font-jakarta ml-32 mt-10'>
              <b className='text-greenColor'>Successful</b>
              <br />
              projects
          </h2>
        </AnimationBase>
         <motion.p initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white font-medium leading-[155%] text-right text-xl mt-10 mr-32 opacity-80'>Explore our diverse cases, featuring immersive <br></br> mini-games, animated gamification, and <br></br> interactive quizzes.</motion.p>
      </div>
  )
}

export default TopPartProject