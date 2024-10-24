import React from 'react'


function OverlayNoise() {
  return (
    <div className=' blur-[0.5px] bg-[url("/public/noise.gif")] bg-repeat opacity-[0.05] h-full w-full z-[999] absolute pointer-events-none '></div>
  )
}

export default OverlayNoise