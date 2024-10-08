import React from 'react';
import { motion } from "framer-motion"
import Carrousel from '../CarrouselSecond/CarrouselSecond';

function Feelings() {
  return (
    <div className='bg-dark w-screen h-[750px] pt-16 flex flex-col'>
      <motion.h2 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-8xl font-jakarta font-bold ml-36 '>
        <span className='text-white'>Positive</span> <br />
        <span className='text-greenColor'>feelings</span>
      </motion.h2>
      
        <Carrousel />
    </div>
  );
}

export default Feelings;
