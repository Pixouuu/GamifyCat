import React from 'react';
import Linkedin from '../../../../public/logo/linkedin-black.svg';
import Google from '../../../../public/logo/googleicon.svg';
import ClutchIcon from '../../../../public/logo/clutchicon.svg';
import HoverLinks from '../../GeneralComponents/HoverLinks';

const MenuHeader = ({ isOpen }) => {
  return (
    <div id='menu' className='bg-white absolute top-0 -right-[1000px] w-[940px] h-screen flex flex-row duration-500 ease-in-out' style={{ right: isOpen ? 0 : -1000 }}>
      <div className='flex-1 h-full flex flex-col items-center '>
        <ul className='text-[80px] text-dark font-jakarta font-bold leading-tight ml-11 mt-56'>
          <li className='li-header text-greenColor cursor-pointer'>Home
            <HoverLinks width={"242px"} />
          </li>
          <li className='li-header hover:text-greenColor cursor-pointer'>Agency
            <HoverLinks width={"300px"} />
          </li>
          <li className='li-header hover:text-greenColor cursor-pointer'>Cases
            <HoverLinks width={"245px"} /> 
          </li>
          <li className='li-header hover:text-greenColor cursor-pointer'>Contacts
            <HoverLinks width={"365px"} />
          </li>
        </ul>

        <div className='flex flex-col justify-start font-jakarta gap-1 text-dark mt-36 font-bold mr-20'>
          <div className='li-header cursor-pointer'>
            <p>108 Waterfront CT SW, <br /> Calgary, AB, Canada, T2P1K7</p>
            <HoverLinks width={"225px"} /> 
          </div>
          <div className='li-header cursor-pointer'>
            <p>+18255583813</p>
            <HoverLinks width={"115px"} />
          </div>
          <div className='li-header cursor-pointer'>
            <p>hello@gamifycat.io</p>
            <HoverLinks width={"155px"} />
          </div>
        </div>
      </div>
      <div className='flex-1 h-full flex justify-end'>
        <div className='mr-24 mb-10 gap-5 flex flex-row justify-end items-end'>
          <img src={Linkedin} alt="" className='w-6 li-header cursor-pointer' />
          <img src={ClutchIcon} alt="" className='w-6 cursor-pointer' />
          <img src={Google} alt="" className='w-6 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
