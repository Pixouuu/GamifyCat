import React from 'react'
import arrowGreen from "../../../../public/arrowGreen.svg"
import Button from '../../GeneralComponents/Button'


function LeftPartTrust() {
  return (
    <div className='w-1/2 h-full text-dark font-jakarta flex flex-col justify-center items-center'>
            <h1 className='text-[90px] leading-none mb-10 mr-36 font-bold'>We're <br /> trustworthy</h1>
            <p className='text-xl font-semibold'>Trusted by over 100 advertising agencies, companies, media digital <br/> magazines and brands</p>
            
            <Button width={"180px"} text1={"About us"} backgroundColor={"#142C16"} color={"#5DC863"} imgSrc={arrowGreen} marginTop={"60px"} marginRight={"470px"}/>
           
        </div>
  )
}

export default LeftPartTrust