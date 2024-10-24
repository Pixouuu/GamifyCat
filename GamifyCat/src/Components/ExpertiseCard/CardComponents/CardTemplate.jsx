import React from 'react'
import { motion } from 'framer-motion'


function CardTemplate({Titre, text1, text2, text3, text4, text5}) {
  return (
  

    <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='bg-white w-[790px] rounded-[30px]'>
                    <h1 className='font-jakarta font-bold text-5xl ml-16 mt-12'>{Titre}</h1>
                    <ul className='font-jakarta text-dark text-2xl ml-[85px] font-bold list-disc leading-9'>
                        <li className='mt-4 font-jakarta'>{text1}</li>
                        <li>{text2} </li>
                        <li>{text3}</li>
                        <li>{text4}</li>
                        <li>{text5}</li>
                    </ul>
      </motion.div>
   
    
  )
}

export default CardTemplate