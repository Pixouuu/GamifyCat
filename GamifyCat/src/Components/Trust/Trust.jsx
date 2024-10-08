import React from 'react';
import arrowGreen from "../../../public/arrowGreen.svg"
import Carrousel from '../Carrousel/Carrousel';

function Trust() {

  return (


           // Left Part

    <div className='bg-green-600 bg w-full h-[950px] flex flex-row justify-center items-center ' id='trust-div'>
        <div className='w-1/2 text-dark font-jakarta flex flex-col justify-center items-center'>
            <h1 className='text-[90px] leading-none mb-10 mr-36 font-bold'>We're <br /> trustworthy</h1>
            <p className='text-xl font-semibold'>Trusted by over 100 advertising agencies, companies, media digital <br/> magazines and brands</p>
            <button className='btn-container relative overflow-hidden bg-dark text-greenColor py-2 px-7 rounded-full flex flex-row items-center justify-center mt-10 mr-[470px] text-xl font-bold'>
                 <span className='flex flex-row items-center btn-project text-xl'>About us <img src={arrowGreen} className='w-9 ml-1 mt-1 '/></span>
                 <span className='flex flex-row items-center btn-project absolute -bottom-9 opacity-80'> About us <img src={arrowGreen} className='w-9 ml-1 mt-1'/></span>
            </button>
        </div>

          {/* Right Part */}

          <div className='w-1/2 h-full'>
             <Carrousel />
          </div>
    </div>
  )
}

export default Trust;
