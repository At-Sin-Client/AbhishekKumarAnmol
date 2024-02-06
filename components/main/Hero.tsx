import React from 'react'
import HeroContents from '../sub/HeroContents';
import HeroContentss from '../sub/HeroContentss';

const Hero = () => {
  return (
    
    <div className='relative flex flex-col h-full w-full" id="about-me"'>
      <div className="opacity-75 bg-white z-[-1] absolute"></div>
        {/* <video 
        autoPlay 
        muted 
        loop 
        className=' absolute top-[80px] left-0 z-[1] h-full w-full aspect-auto min-w-full min-h-full object-cover brightness-50 opacity-50'>
            <source src='/something.webm' type='video/webm'/>
        </video> */}
        <HeroContentss/>
        
    </div>
  )
}

export default Hero;