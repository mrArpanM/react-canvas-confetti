"use client"

import { useEffect, useState } from 'react'
import CannonConfettiCanvas from '@/components/CannonConfetti'

export default function CannonPage() {
  const [cannon, setCannon] = useState(false)
  useEffect(() => {
    if (cannon == true){
      setCannon(false)
    }
  },[cannon]);
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <button 
        onClick={()=>{setCannon(!cannon)}}
        className='bg-slate-950 rounded-md w-fit px-4 py-3 text-xl font-sans font-bold'>
         Fire Confetti
      </button>
      <CannonConfettiCanvas fire={cannon}/>
    </main>
  )
}
