// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className='lg:py-[1.25rem] py-[0.8rem] lg:px-[6.25rem] px-[1.06rem] flex flex-row items-center justify-between font-inter'>
        <img src="images/logo.svg" alt="Rxreminder logo" />
        <nav className='lg:flex hidden'>
            <ul className='text-[#6D7470] font-[500] text-[1rem] flex flex-row gap-4'>
                <a href="#">
                    <li className='hover:text-[#3D9F64] hover:font-[600]'>Home</li>
                </a>
                <a href="#how">
                    <li className='hover:text-[#3D9F64] hover:font-[600]'>How it works</li>
                </a>
                <a href="#why">
                    <li className='hover:text-[#3D9F64] hover:font-[600]'>Why Choose Us</li>
                </a>
                <a href="#faq">
                    <li className='hover:text-[#3D9F64] hover:font-[600]'>FAQs</li>
                </a>
            </ul>
        </nav>
        <a href="#"
            className="bg-[#015777] rounded-full px-[1.875rem] py-[0.94rem] text-white font-medium text-[1rem] transition-all duration-300 transform hover:scale-105 hover:bg-[#01769c]"
            >
            Join Waitlist
        </a>

    </header>
  );
};

export default Header;
