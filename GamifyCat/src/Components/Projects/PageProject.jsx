import React from 'react'
import TopPartProject from './ProjectsComponents/TopPartProject'
import LeftPartProject from './ProjectsComponents/LeftPartProject'
import RightPartProject from './ProjectsComponents/RightPartProject'
import BottomPartProject from './ProjectsComponents/BottomPartProject'

function PageProject() {
  return (

    <div className='bg-black w-screen h-[2420px] ' id='project-div'>
        <TopPartProject />

        <div className=' w-full h-[1100px] flex flex-row items-start justify-evenly mt-10'>
          <LeftPartProject />
          <RightPartProject />
        </div>

        <BottomPartProject />
    </div>
  )
}

export default PageProject