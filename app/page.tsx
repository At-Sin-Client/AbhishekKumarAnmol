import Image from 'next/image'
import Hero from '@/components/main/Hero'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className='h-full w-full'>
      <div className="flex flex-col  gap-20">
      <Hero/>
      </div>
      
    </main>
  )
}
