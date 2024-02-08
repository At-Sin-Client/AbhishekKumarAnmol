import Image from 'next/image'
import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import DataAch from '@/components/main/achievementsdata'
import About from '@/components/main/about'
import About2 from '@/components/main/about2'
import Footer from '@/components/main/footer'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className='h-full w-full'>
      <div className=" thisq flex flex-col gap-20 w-full">
    {/* <main className='h-full w-full relative'>
      <div className="flex flex-col h-[850px]">
 */}
      <Hero/>
      <DataAch/>
      <Skills/>
      <About/>
      <Footer/>
      </div>
      
    </main>
  )
}
