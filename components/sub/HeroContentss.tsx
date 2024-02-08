"use client"
import { createContext } from 'react';
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/app/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const HeroContentss = () => {

  const openPDFInNewTab = () => {
    // Replace 'pdf-url' with the actual URL of your PDF file
    const pdfUrl = '/ABHISHEK%20KUMAR%20ANMOL0.pdf';
    window.open(pdfUrl, '_blank');
  };
  return (
    <motion.div
    initial='hidden' 
    animate='visible'
    className='flex flex-col md:flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        
        
        <div className='h-auto w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[15px] px-[17px] border border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#7d51ff] mr-[10px] h-5 w-5'></SparklesIcon>
                <h1 className="Welcome-text text-base">Hey there!</h1>
            </motion.div>
        
        <motion.div
        variants={slideInFromLeft(1)}
        className='flex flex-col gap-8 mt-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        ><span>Experiencing<span className='text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> story writing </span>
        and <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>film making</span></span>
        </motion.div>
        <motion.p
        variants={slideInFromLeft(1.6)}
        className='text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 my-5 max-w-[600px]'>
          Author of "AN ECHO OF SILENCE" and 
            "THE NATIONAL FLAME
              OF DECADES"
        
        </motion.p>
        <motion.a
        variants={slideInFromLeft(2)}
        className='button-primary py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        onClick={openPDFInNewTab}
        >
          RESUME
        </motion.a>
        </div>
        -----------------
        <motion.div
        variants={slideInFromLeft(1.6)}
        className='w-full h-auto flex justify-center items-center'
        animate={{ y: [-5, 5, -5], x: [-3, 3, -3], transition: { duration: 2, repeat: Infinity } }}
        // style={{ position: 'absolute' }}
        >
          <Image
           src="/fossilsinsky.png" 
           alt="Potrait"
           height={500}
           width={500}
          //  className="w-full object-contain"
           />

        </motion.div>
    </motion.div>
    
  )
}

export default HeroContentss