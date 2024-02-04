import Image from 'next/image'
import Hero from '@/components/main/Hero'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className='h-full w-full relative'>
      <div className="flex flex-col h-[850px]">
      <h1 className='text-slate-400'>Home Portfolio</h1>
      <Hero/>
      </div>
      
    </main>
  )
}
