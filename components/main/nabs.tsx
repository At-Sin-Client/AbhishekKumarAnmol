// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Socials } from '@/constants';

// const Nabs = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
//       <div className='max-w-screen-xl mx-auto px-6 lg:px-10 h-[100px] flex items-center justify-between'>
//         <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
//           <Image
//             src="/logoaka.png"
//             alt="Logo"
//             height={60}
//             width={60}
//             className="cursor-pointer hover:animate-slowspin"
//           />
//           <span className='text-xl text-[#ff545d] font-semibold font-serif'>&nbsp;&nbsp;ABHISHEK KR ANMOL</span>
//         </a>
//         <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
//           <div className={`flex items-center md:hidden ${isOpen ? 'flex-col space-y-2' : 'hidden'}`}>
//             <a href="#about-me" className='cursor-pointer hover:underline'>ABOUT</a>
//             <a href="#skills" className='cursor-pointer hover:underline'>CERTIFICATES</a>
//             <a href="#projects" className='cursor-pointer hover:underline'>PROJECTS</a>
//           </div>
//           <div className={`flex items-center justify-between border w-full h-auto border-[#7042f861] bg-[#000000c3] text-sky-500 md:flex md:space-x-5 mr-[15px] px-[20px] py-[10px] rounded-full font-semibold ${isOpen ? 'hidden' : 'md:block'}`} onClick={() => setIsOpen(!isOpen)}>
//             <span>Menu</span>
//           </div>
//         </div>
//         <div className='flex flex-row gap-5'>
//           {Socials.map((social) => (
//             <Image
//               className='hover:scale-[1.5] shadow-white'
//               src={social.src}
//               alt={social.name}
//               key={social.name}
//               width={24}
//               height={24}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nabs;

"use client"

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Socials } from '@/constants';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
//       <div className='max-w-screen-xl mx-auto px-6 lg:px-10 h-[100px] flex items-center justify-between'>
//         <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
//           <Image
//             src="/logoaka.png"
//             alt="Logo"
//             height={60}
//             width={60}
//             className="cursor-pointer hover:animate-slowspin"
//           />
//           <span className='text-xl text-[#ff545d] font-semibold font-serif'>&nbsp;&nbsp;ABHISHEK KR ANMOL</span>
//         </a>
//         <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
//           <div className='hidden md:flex items-center space-x-5'>
//             <a href="#about-me" className='cursor-pointer hover:underline'>ABOUT</a>
//             <a href="#skills" className='cursor-pointer hover:underline'>CERTIFICATES</a>
//             <a href="#projects" className='cursor-pointer hover:underline'>PROJECTS</a>
//           </div>
//           <div className={`flex flex-row items-center justify-between border w-full h-auto border-[#7042f861] bg-[#000000c3] text-sky-500 md:hidden ${isOpen ? 'space-x-5' : ''}`} onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <>
//                 <a href="#about-me" className='cursor-pointer hover:underline'>ABOUT</a>
//                 <a href="#skills" className='cursor-pointer hover:underline'>CERTIFICATES</a>
//                 <a href="#projects" className='cursor-pointer hover:underline'>PROJECTS</a>
//               </>
//             ) : (
//               <span>Menu</span>
//             )}
//           </div>
//         </div>
//         <div className='hidden md:flex flex-row gap-5'>
//           {Socials.map((social) => (
//             <Image
//               className='hover:scale-[1.5] shadow-white'
//               src={social.src}
//               alt={social.name}
//               key={social.name}
//               width={24}
//               height={24}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const Nabs: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function socialLinks(url: String) : any  {
    const SocialUrl : any = url;
    window.open(SocialUrl, '_blank');
  }

  return (
    <div  className='w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='max-w-screen-xl mx-auto px-6 lg:px-10 h-[100px] flex flex-row items-center justify-between'>
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center justify-between '>
          <Image
            src="/logoaka.png"
            alt="Logo"
            height={60}
            width={60}
            className="cursor-pointer hover:animate-slowspin"
          />
          {/* {text-xl} */}
          {!isMenuOpen && <span className=' text-base md:text-xl lg:text-2xl xl:text-3xl text-[#ff545d] font-semibold font-serif'>&nbsp;&nbsp;ABHISHEK KR ANMOL</span>}
        </a>
        {/* <div className={` md:flex w-[200px] md:items-center top-[100%] right-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-10  md:flex-row items-center justify-between border w-full h-auto border-[#7042f861] bg-[#000000c3] text-sky-500 mr-[15px] px-[20px] py-[10px] rounded-full font-semibold">
            <a href="#about-me" className='cursor-pointer hover:underline'>ABOUT</a>
            <a href="#skills" className='cursor-pointer hover:underline'>CERTIFICATES</a>
            <a href="#projects" className='cursor-pointer hover:underline'>PROJECTS</a>
          </div>
        </div> */}
        {/* md:absolute */}
        <div className={` fixed md:static md:flex  md:items-center top-[100%] right-0 md:right-auto md:mr-0 mt-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="text-sm md:text-base lg:text-lg xl:text-xl flex flex-col gap-10 md:flex-row items-center 
            justify-between border  h-auto border-[#ebe9f1d7] bg-[#000000c3] text-sky-500 mr-[15px] px-[20px] py-[10px] rounded-[1.5rem] border-y-indigo-500 font-semibold">
                <a href="#achievements" className='cursor-pointer hover:underline'>ACHIEVEMENTS</a>
                <a href="#skills" className='cursor-pointer hover:underline'>CERTIFICATES</a>
                <a href="#about" className='cursor-pointer hover:underline'>ABOUT</a>
            </div>
        </div>

        <div className={'xl:flex flex flex-row gap-5 '}>
          {Socials.map((social) => (
            <Image
              onClick={() => socialLinks(social.url)}
              className={'md:flex hidden hover:scale-[1.5]'}
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
        <button
          className={"block md:hidden focus:outline-none"}
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg className=" text-sky-500 'h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 7h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 7h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nabs;
