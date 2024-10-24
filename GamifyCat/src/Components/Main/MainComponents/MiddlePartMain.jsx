import React from 'react'
import { motion } from "framer-motion"
import Button from '../../GeneralComponents/Button'

function MiddlePartMain() {
  return (
    <div className='h-screen w-[65%] flex flex-col justify-center'>
            <div className='flex flex-col font-bold font-jakarta text-[150px] leading-none w-full h-92'>
                <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='title'>Gamified</motion.h1>
                <motion.h1 initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white text-right'>Digital</motion.h1>
                <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-white ml-16'>Products</motion.h1>
            </div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: true}} className='text-xl text-white font-jakarta flex flex-col justify-center items-center w-full h-64 mt-5'>
                <p>Web Design & Development gamified products like mini-games, interactive</p>
                <p>landings and puzzles for advertising agencies and brands</p>
                <Button width={"190px"} text1={"Our cases"} marginTop={"40px"}/> 
            </motion.div>
        </div>
  )
}

export default MiddlePartMain