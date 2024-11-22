import React from 'react'
import './Main.css'
import LeftPartMain from './MainComponents/LeftPartMain'
import MiddlePartMain from './MainComponents/MiddlePartMain'
import RightPartMain from './MainComponents/RightPartMain'

function Main() {
  return (
      <div className='w-full h-full relative flex flex-col md:flex-row gap-24'>     
        {/* Gradient Background */}
        <div className='gradient-background md:w-screen md:h-screen h-full w-full backdrop-blur-xl absolute top-0 left-0'></div>
      
        <LeftPartMain />
        <MiddlePartMain />
        <RightPartMain />
      </div>
  );
}

export default Main;
