import React from 'react'
import './footer.css'
import { motion } from 'framer-motion'

import LeftPartFooter from './FooterComponents/LeftPartFooter'
import RightPartFooter from './FooterComponents/RightPartFooter';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (

            
 
    <div className='bg-black h-[450px] w-full ' id='footer-div'>
        <div className='h-[86%] w-full  flex flex-row'>
            <LeftPartFooter />
            <RightPartFooter />
        </div>

            {/* Bottom Part */}

        <motion.div initial={{opacity: 0, width: 0}} whileInView={{width: '86.5%', opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='bg-white h-[1px] opacity-10 ml-24'></motion.div>
        <motion.h1 initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='text-greenColor ml-24 text-lg mt-3 font-bold'>&copy; {currentYear} GamifyCat</motion.h1>
    </div> 
  )
}

export default Footer
