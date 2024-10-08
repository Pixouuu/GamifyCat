import React from 'react'
import './Main.css'
import arrow from "../../../public/arrow.svg"
import Cartridge1 from '../../../public/CartRidge/CartRidge_1.webp'
import Cartridge2 from '../../../public/CartRidge/CartRidge_2.webp'
import Cartridge3 from '../../../public/CartRidge/CartRidge_3.webp'
import Cartridge4 from '../../../public/CartRidge/CartRidge_4.webp'
import Cartridge5 from '../../../public/CartRidge/CartRidge_5.webp'
import Cartridge6 from '../../../public/CartRidge/CartRidge_6.webp'
import { motion } from "framer-motion"


function Main() {
  return (
    <>
        {/* Gradient Background  */}

        <div className='gradient-background w-screen h-screen backdrop-blur-xl absolute'></div>
        <div className='w-screen h-screen relative flex flex-row' id='main-div'>


        {/* Left Part */}

        <div className='h-screen w-2/5 flex flex-col justify-center'>
          <motion.div initial={{x: 600, y: 200}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge6} alt="Product Image" className='w-72 cart3 mt-32 hover:w-80 transition-all duration-400 opacity-90 hover:opacity-100'/>
          </motion.div>
          <motion.div initial={{x: 600, y: 50}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge4} alt="Product Image" className='w-72 cart2 hover:w-80 transition-all duration-400 opacity-90 hover:opacity-100'/>
          </motion.div>
          <motion.div initial={{x: 600, y: -150}} animate={{x: 0, y: 0}} transition={{duration: 1, ease: 'easeInOut'}} className='w-full flex-1 flex justify-center items-center'>
            <img src={Cartridge1} alt="Product Image" className='w-48 cart1 hover:w-52 transition-all duration-400 opacity-90 hover:opacity-100'/>
          </motion.div>
        </div>


        {/* Middle Part */}

        <div className='h-screen w-[65%] flex flex-col justify-center'>
            <div className='flex flex-col font-bold font-jakarta text-[150px] leading-none w-full h-92'>
                <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='title'>Gamified</motion.h1>
                <motion.h1 initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white text-right'>Digital</motion.h1>
                <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white ml-16'>Products</motion.h1>
            </div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white font-jakarta flex flex-col justify-center items-center w-full h-64 mt-5'>
                <p className='text-xl'>Web Design & Development gamified products like mini-games, interactive</p>
                <p className='text-xl'>landings and puzzles for advertising agencies and brands</p>
                <button className='btn-container relative overflow-hidden text-xl rounded-full px-6 py-2 font-bold bg-greenColor flex flex-row items-center mt-10'>
                   <span className='flex flex-row items-center btn-project'>Our cases <img src={arrow} className='w-9 ml-1 mt-1'/></span>
                   <span className='flex flex-row items-center btn-project absolute -bottom-9 opacity-80'> Our cases <img src={arrow} className='w-9 ml-1 mt-1'/></span>
                </button>
                
            </motion.div>
        </div>

        {/* Right Part */}

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
      </div>
    </>
  )
}

export default Main
