import React from 'react';
import Carrousel from './CarrouselSecond/CarrouselSecond';
import AnimationBase from '../GeneralComponents/AnimationBase';

function Feelings() {
  return (
    <div className='bg-dark w-screen h-[750px] pt-16 flex flex-col'>

      <AnimationBase initialX={-100} finalX={0}>
          <h2 className='text-8xl font-jakarta font-bold ml-36 '>
            <span className='text-white'>Positive</span> <br />
            <span className='text-greenColor'>feelings</span>
          </h2>
      </AnimationBase>
      
        <Carrousel />
    </div>
  );
}

export default Feelings;
