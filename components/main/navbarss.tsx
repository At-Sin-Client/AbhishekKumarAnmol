import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const Navbars = () => {
  return (
    <div className='w-full fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50'>
      <div className='max-w-screen-xl mx-auto px-6 lg:px-10 h-[100px] flex items-center justify-between'>
        <a href="#about-me" className='flex items-center space-x-2'>
          <Image
            src="/logoaka.png"
            alt="Logo"
            height={60}
            width={60}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className='text-xl text-[#ff545d] font-semibold font-serif'>ABHISHEK KR ANMOL</span>
        </a>
        <div className='flex items-center space-x-5 md:space-x-10'>
          <div className="hidden md:flex items-center space-x-5">
            <a href="#about-me" className='cursor-pointer hover:underline'>ABOUT</a>
            <a href="#skills" className='cursor-pointer hover:underline'>CERTIFICATES</a>
            <a href="#projects" className='cursor-pointer hover:underline'>PROJECTS</a>
          </div>
          <div className='flex items-center space-x-2'>
            {Socials.map((social) => (
              <Image
                className='hover:scale-[1.5] shadow-white'
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
