import React from 'react'

function OverlayNoise() {
  return (
    <div className='blur-[0.5px] bg-[url("../../src/assets/noise.gif")] bg-repeat opacity-[0.05] h-full w-full z-[5] absolute pointer-events-none '></div>
  )
}

export default OverlayNoise