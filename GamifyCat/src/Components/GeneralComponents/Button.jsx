import React from 'react';
import arrow from "../../../public/arrow.svg";
import { cn } from '../../TwMerge';


function Button({ width, text1, marginTop, height, bottom, backgroundColor, color, marginRight, className, imgSrc = arrow }) {
  return (
    <button className={cn('group btn-container relative overflow-hidden md:text-xl text-base rounded-full w-60 h-10 font-bold bg-greenColor flex flex-col items-center justify-center text-white font-jakarta md:mr-9',className)} style={{ height, marginTop, backgroundColor, marginRight}}>
      <span className='flex flex-row items-center group-hover:-translate-y-[110%] duration-500 transition-transform ease-[cubic-bezier(0.08, 0.82, 0.17, 1)]' style={{color}}>
        {text1} <img src={imgSrc} className='md:w-9 w-6 md:ml-1 md:mt-1' />
      </span>
      <span className='flex flex-row items-center group-hover:-translate-y-[110%] duration-500 transition-transform ease-[cubic-bezier(0.08, 0.82, 0.17, 1)] absolute -bottom-9 opacity-80' style={{bottom, color}}>
        {text1} <img src={imgSrc} className='md:w-9 w-6 md:ml-1 md:mt-1' />
      </span>
    </button>
  );
}

export default Button;
