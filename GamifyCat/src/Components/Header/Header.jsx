import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../../../public/logo/logo.svg';
import { useLenis } from 'lenis/react';
import MenuHeader from './HeaderComponents/MenuHeader';
import Button from '../GeneralComponents/Button';

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
        <header className='fixed top-0 left-0 w-full h-24 flex flex-row z-[3]'>
            <div className='flex flex-row flex-1 items-center'>
                <a href='#' className='flex flex-row items-center containerLeft'>
                    <img src={logo} alt="Logo" className='md:w-12 w-8 md:ml-6 ml-4 logo transition-colors '/>
                    <h1 className='font-jakarta font-bold text-white md:text-2xl text-base ml-3 duration-300' style={{ opacity: isScrolling ? 0 : 1 }} onScrollCapture={handleScroll}>GamifyCat</h1>
                </a>
            </div>
            
            <div className='flex-1 justify-end flex flex-row items-center'> 
                <Button text1={"Discuss Project"} className={"md:w-[265px] w-36 md:h-14 h-9 text-xs"} />
                <div id='menu-button' className='w-14 h-14 flex flex-col justify-center items-center md:mr-6 mr-3 cursor-pointer hover:opacity-70 transition-opacity z-40' onClick={handleMenu}>
                    <div className={`bar bar1 ${isOpen ? 'open' : ''}`} style={{ backgroundColor: isOpen ? '#5DC863' : 'white' }}></div>
                    <div className={`bar bar2 ${isOpen ? 'open' : ''}`} style={{ backgroundColor: isOpen ? '#5DC863' : 'white' }}></div>
                </div>
            </div>

            {/* Menu */}
            
              <MenuHeader isOpen={isOpen} />
            
        </header>
    );
}

export default Header;
