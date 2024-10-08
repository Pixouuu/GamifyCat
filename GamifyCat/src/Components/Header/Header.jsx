import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../../../public/logo/logo.svg';
import arrow from "../../../public/arrow.svg";
import Linkedin from '../../../public/logo/linkedin-black.svg';
import Google from '../../../public/logo/googleicon.svg';
import ClutchIcon from '../../../public/logo/clutchicon.svg';
import { useLenis } from 'lenis/react';

function Header() {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();

    const handleScroll = () => {
        setIsScrolling(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !document.getElementById('menu').contains(event.target) && !document.getElementById('menu-button').contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            if (lenis) {
                lenis.stop();
            }
            document.body.style.overflow = 'hidden';
        } else {
            if (lenis) {
                lenis.start();
            }
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className='fixed top-0 left-0 w-full h-24 flex flex-row z-[3]'>
            <div className='flex flex-row flex-1 items-center'>
                <a href='#' className='flex flex-row items-center containerLeft'>
                    <img src={logo} alt="Logo" className='w-12 ml-6 logo transition-colors '/>
                    <h1 className='font-jakarta font-bold text-white text-2xl ml-3 duration-300' style={{ opacity: isScrolling ? 0 : 1 }} onScrollCapture={handleScroll}>GamifyCat</h1>
                </a>
            </div>
            <div className='flex-1 justify-end flex flex-row items-center'>
                <button className='btn-container relative overflow-hidden text-xl rounded-full w-60 h-14 font-bold bg-greenColor flex flex-col items-center justify-center text-white font-jakarta mr-9 z-50'>
                    <span className='flex flex-row items-center btn-project'> Discuss Project <img src={arrow} className='w-9 ml-1 mt-1' /></span>
                    <span className='flex flex-row items-center btn-project absolute -bottom-9 opacity-80'> Discuss Project <img src={arrow} className='w-9 ml-1 mt-1' /></span>
                </button>
                <div id='menu-button' className='w-14 h-14 flex flex-col justify-center items-center mr-6 cursor-pointer hover:opacity-70 transition-opacity z-40' onClick={handleMenu}>
                    <div className={`bar bar1 ${isOpen ? 'open' : ''}`} style={{ backgroundColor: isOpen ? '#5DC863' : 'white' }}></div>
                    <div className={`bar bar2 ${isOpen ? 'open' : ''}`} style={{ backgroundColor: isOpen ? '#5DC863' : 'white' }}></div>
                </div>
            </div>

            {/* Menu */}
            <div id='menu' className='bg-white absolute top-0 -right-[1000px] w-[940px] h-screen flex flex-row duration-500 ease-in-out' style={{ right: isOpen ? 0 : -1000 }}>
                <div className='flex-1 h-full flex flex-col items-center '>
                    <ul className='text-[80px] text-dark font-jakarta font-bold leading-tight ml-11 mt-56'>
                        <li className='li-header text-greenColor cursor-pointer'>Home
                            <div className='bg-greenColor h-[2px] w-[242px]  li-div-header '></div>
                        </li>
                        <li className='li-header hover:text-greenColor cursor-pointer'>Agency
                            <div className='bg-greenColor h-[2px] w-[300px] li-div-header '></div>
                        </li>
                        <li className='li-header hover:text-greenColor cursor-pointer'>Cases
                            <div className='bg-greenColor h-[2px] w-[245px] li-div-header '></div>
                        </li>
                        <li className='li-header hover:text-greenColor cursor-pointer'>Contacts
                            <div className='bg-greenColor h-[2px] w-[365px] li-div-header '></div>
                        </li>
                    </ul>
                    <div className='flex flex-col justify-start font-jakarta gap-1 text-dark mt-36 font-bold mr-20'>
                        <div className='li-header cursor-pointer'>
                            <p>108 Waterfront CT SW, <br /> Calgary, AB, Canada, T2P1K7</p>
                            <div className='bg-greenColor h-[2px] w-[225px] li-div-header '></div>
                        </div>
                        <div className='li-header cursor-pointer'>
                            <p>+18255583813</p>
                            <div className='bg-greenColor h-[2px] w-[115px] li-div-header '></div>
                        </div>
                        <div className='li-header cursor-pointer'>
                            <p>hello@gamifycat.io</p>
                            <div className='bg-greenColor h-[2px] w-[155px] li-div-header '></div>
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
        </div>
    );
}

export default Header;
