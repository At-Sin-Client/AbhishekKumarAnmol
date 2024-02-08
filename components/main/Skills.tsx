import { transform } from 'next/dist/build/swc'
import React from 'react'
import Carousel from './carousel'
import { Frontend_skill } from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'

const Skills = () => {
  return (
    <section
        id="skills"
        className='flex flex-col items-center justify-center gap-20 h-full w-full relative overflow-hidden py-20 bg-white bg-opacity-10 rounded-lg'
        style={{transform: "scale(0.9"}}    
    >
        {/* <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Frontend_skill.map((image,index)=> (
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                />
            ))}
        </div> */}
            <h1 className=' font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl decoration-2 text-[#ff545d] ' id='certificates'>CERTIFICATES</h1>
              <Carousel/>
    </section>
  )
}

export default Skills