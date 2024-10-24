import React from 'react';
import arrow from "../../../public/arrow.svg";

function Button({ width, text1, marginTop, height, bottom, backgroundColor, color, marginRight, imgSrc = arrow }) {
  return (
    <button className='btn-container relative overflow-hidden text-xl rounded-full w-60 h-14 font-bold bg-greenColor flex flex-col items-center justify-center text-white font-jakarta mr-9' style={{ width, height, marginTop, backgroundColor, marginRight }}>
      <span className='flex flex-row items-center btn-project' style={{color}}>
        {text1} <img src={imgSrc} className='w-9 ml-1 mt-1' />
      </span>
      <span className='flex flex-row items-center btn-project absolute -bottom-9 opacity-80' style={{bottom, color}}>
        {text1} <img src={imgSrc} className='w-9 ml-1 mt-1' />
      </span>
    </button>
  );
}

export default Button;
