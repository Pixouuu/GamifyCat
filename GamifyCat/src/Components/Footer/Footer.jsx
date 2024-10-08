import React from 'react'
import './footer.css'
import Badge from '../../../public/logo/clutchbadge.svg'
import ClutchReview from '../../../public/logo/clutchreview.svg'
import GoogleReview from '../../../public/logo/googlereview.svg'
import Linkedin from '../../../public/logo/linkedin.svg'
import Google from '../../../public/logo/googleicon_white.svg'
import ClutchIcon from '../../../public/logo/clutchicon_white.svg'
import { motion } from 'framer-motion'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (

            // Left Part
 
    <div className='bg-black h-[450px] w-full ' id='footer-div'>
        <div className='h-[86%] w-full  flex flex-row'>
            <div className='flex-1 h-full text-white font-jakarta font-bold'>
                <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='text-8xl mt-12 ml-24'>Let's talk</motion.h1>
                <motion.h3 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.2}} viewport={{once: true}} className='text-xl ml-24 mt-1 h3 cursor-pointer inline-block'>hello@gamifycat.io
                  <div className='bg-greenColor h-[2px] w-[195px] h3-div'></div>
                </motion.h3>
                <motion.p initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}} className='text-light ml-24 opacity-50 mt-28'>CANADA</motion.p>
                <motion.h3 initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true}} className='mt-6 text-xl ml-24 h3 cursor-pointer'>108 Waterfront CT SW, Calgary, AB, T2P1K7
                  <div className='bg-greenColor h-[2px] w-[420px] h3-div'></div>
                </motion.h3>
            </div>

            {/* Right Part */}

            <div className='flex-1 h-full text-white font-jakarta font-bold flex flex-row text-xl items-center justify-end mt-3'>
                <div className='flex flex-col'>
                    <motion.span initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='opacity-50 text-base'>MENU</motion.span>
                        <motion.ul initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='mt-5 mb-5 inline cursor-pointer'>
                            <li className='li'>Agency
                              <div className='bg-greenColor h-[2px]  w-[80px] li-div '></div>
                            </li>
                            <li className='li'>Cases
                              <div className='bg-greenColor h-[2px] w-[65px] li-div '></div>
                            </li>
                            <li className='li'>Contacts
                              <div className='bg-greenColor h-[2px] w-[95px] li-div '></div>
                            </li>
                            <li className='li'>Terms And Conditions
                              <div className='bg-greenColor h-[2px] w-[215px] li-div '></div>
                            </li>
                            <li className='li'>Privacy Policy
                              <div className='bg-greenColor h-[2px] w-[140px] li-div '></div>
                            </li>
                        </motion.ul>
                    <motion.span initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='opacity-50 text-base'>LINKS</motion.span>
                    <motion.div initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='flex flex-row gap-5 mt-10'>
                        <img src={Linkedin} alt="" className='hover:opacity-80 transition-opacity cursor-pointer'/>
                        <img src={ClutchIcon} alt="" className='hover:opacity-80 transition-opacity cursor-pointer'/>
                        <img src={Google} alt="" className='hover:opacity-80 transition-opacity cursor-pointer'/>
                    </motion.div>
                </div>
                   <motion.div initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='flex flex-col gap-6 justify-end mr-40 ml-10 mt-16'>
                     <img src={Badge} alt="" className='h-[120px] hover:opacity-80 transition-opacity cursor-pointer'/>
                     <img src={ClutchReview} alt="" className='hover:opacity-80 transition-opacity cursor-pointer'/>
                     <img src={GoogleReview} alt="" className='hover:opacity-80 transition-opacity cursor-pointer'/>
                   </motion.div>
            </div>
        </div>

            {/* Bottom Part */}

        <motion.div initial={{opacity: 0, width: 0}} whileInView={{width: '86.5%', opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='bg-white h-[1px] opacity-10 ml-24'></motion.div>
        <motion.h1 initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='text-greenColor ml-24 text-lg mt-3 font-bold'>&copy; {currentYear} GamifyCat</motion.h1>
    </div> 
  )
}

export default Footer
