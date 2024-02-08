import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants';

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
       <div className='max-w-screen-xl mx-auto px-6 lg:px-10 h-[100px] flex items-center justify-between'>
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center '>
                <Image
                 src="/logoaka.png"
                 alt="Logo"
                 height={60}
                 width={60}
                 className="cursor-pointer hover:animate-slowspin"/>
                {/* text-[#f2bf4b] text-[#deeaab] */}
               <span className='text-xl text-[#ff545d] font-semibold font-serif'>&nbsp;&nbsp;ABHISHEK KR ANMOL</span>
            </a>
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className="flex items-center justify-between border w-full h-auto border-[#7042f861] bg-[#000000c3] text-sky-500 mr-[15px] px-[20px] py-[10px] rounded-full font-semibold">
                <a href="#about-me" className='cursor-pointer hover:underline'>ABOUT</a>
                <a href="#skills" className='cursor-pointer hover:underline'>CERTIFICATES</a>
                <a href="#projects" className='cursor-pointer hover:underline'>PROJECTS</a>
                </div>
            </div>
            <div className='flex flex-row gap-5'>
                {Socials.map((social)=>(
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
  );
};

export default Navbar