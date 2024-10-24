import React from 'react'
import './Main.css'
import LeftPartMain from './MainComponents/LeftPartMain'
import MiddlePartMain from './MainComponents/MiddlePartMain'
import RightPartMain from './MainComponents/RightPartMain'


function Main() {
  return (
    <>
        {/* Gradient Background  */}

      <div className='gradient-background w-screen h-screen backdrop-blur-xl absolute'></div>

       <div className='w-screen h-screen relative flex flex-row' id='main-div'>
            <LeftPartMain />
            <MiddlePartMain />
            <RightPartMain />
       </div>
    </>
  )
}

export default Main
