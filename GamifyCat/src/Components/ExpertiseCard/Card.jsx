import React from 'react';
import './card.css';
import { motion } from 'framer-motion';

function Card() {
  return (
    <div className='bg-light w-full h-[1000px]' id='card-div'>
        <div className='w-screen h-[240px] flex items-center'>
            <motion.h1 initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='font-jakarta font-bold text-8xl ml-32'>Expertise</motion.h1>
        </div>
        <div className='w-screen h-[720px] flex flex-col'>
            <div className='w-screen h-1/2 flex justify-center gap-10'>
                <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='bg-white w-[790px] rounded-[30px]'>
                    <h1 className='font-jakarta font-bold text-5xl ml-16 mt-12'>Design</h1>
                    <ul className='font-jakarta text-dark text-2xl ml-[85px] font-bold list-disc leading-9'>
                        <li className='mt-4 font-jakarta'>Logo, Branding, Icons</li>
                        <li>Custom Illustrations</li>
                        <li>User Experience (UX)</li>
                        <li>User Interface (UI)</li>
                        <li>Web & Product Design</li>
                    </ul>
                </motion.div>
                <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='bg-white w-[790px] rounded-[30px]'>
                    <h1 className='font-jakarta font-bold text-5xl ml-16 mt-12'>Development</h1>
                    <ul className='font-jakarta text-dark text-2xl ml-[85px] font-bold list-disc leading-9'>
                        <li className='mt-4 font-jakarta'>Js, Vue, React, Angular</li>
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>Wordpress, Webflow</li>
                        <li>Shopify, BigCommerce</li>
                    </ul>
                </motion.div>
            </div>
            <div className='w-screen h-1/2 flex justify-center gap-10 mt-10'>
                <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='bg-white w-[790px] rounded-[30px]'>
                    <h1 className='font-jakarta font-bold text-5xl ml-16 mt-12'>Marketing</h1>
                    <ul className='font-jakarta text-dark text-2xl ml-[85px] font-bold list-disc leading-9'>
                        <li className='mt-4 font-jakarta'>PPC, SEO & SMM</li>
                        <li>Content Marketing</li>
                        <li>Email Marketing</li>
                        <li>Marketing Research</li>
                        <li>Web & Game Analytics</li>
                    </ul>
                </motion.div>
                <motion.div initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}} className='bg-white w-[790px] rounded-[30px]'>
                    <h1 className='font-jakarta font-bold text-5xl ml-16 mt-12'>Gamification</h1>
                    <ul className='font-jakarta text-dark text-2xl ml-[85px] font-bold list-disc leading-9'>
                        <li className='mt-4 font-jakarta'>Interactive ADs Banners</li>
                        <li>Animated Landing Page</li>
                        <li>Gamification Web Design</li>
                        <li>Game Design & Development</li>
                        <li>HTML5 & Unity Game Development</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    </div>
  );
}

export default Card;
