"use client"
import { createContext } from 'react';
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/app/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const HeroContentss = () => {
  return (
    <motion.div
    initial='hidden' 
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        
        <motion.div
        variants={slideInFromLeft(0.8)}
        className='w-full h-full flex justify-center items-center'
        >
          <Image
           src="/main.png" 
           alt="Potrait"
           height={700}
           width={700}
           />

        </motion.div>
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[15px] px-[17px] border border-[#7042f88b] opacity-[0.9] '>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'></SparklesIcon>
                <h1 className="Welcome-text text-[13px]">Hey there!</h1>
            </motion.div>
        
        <motion.div
        variants={slideInFromRight(0.5)}
        className='flex flex-col gap-8 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'
        ><span>Experiencing<span className='text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> story writing </span>
        and <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>film making</span></span>
        </motion.div>
        <motion.p
        variants={slideInFromRight(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'>
          THis is something that you can read if you can read
        
        </motion.p>
        <motion.a
        variants={slideInFromRight(1)}
        className='button-primary py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          Learn More!
        </motion.a>
        </div>
    </motion.div>
    
  )
}

export default HeroContentss