import React from 'react';
import LeftPartTrust from './TrustComponents/LeftPartTrust';
import Carrousel from './Carrousel/Carrousel';

function Trust() {
  return (
    <div className='bg-green-600 w-full h-[950px] flex'>
      <LeftPartTrust />
      <div className='w-1/2 h-full flex justify-center items-center'>
        <Carrousel />
      </div>
    </div>
  );
}

export default Trust;
