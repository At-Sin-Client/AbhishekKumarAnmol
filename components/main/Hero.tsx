import React from 'react'
import HeroContents from '../sub/HeroContents';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video 
        autoPlay 
        muted 
        loop 
        className=' absolute top-[-340px] left-0 z-[1] h-full w-full aspect-auto top-[0] min-w-full min-h-full object-cover brightness-50'>
            <source src='/something.webm' type='video/webm'/>
        </video>
        <HeroContents/>
    </div>
  )
}

export default Hero;