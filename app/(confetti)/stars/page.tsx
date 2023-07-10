"use client"

import { useEffect, useState } from 'react'
import { StarsConfettiCanvas } from '@/components/StarsConfetti'

export default function StarsPage() {
  const [stars, setStars] = useState(false)
  useEffect(() => {
    if (stars == true){
      setStars(false)
    }
  },[stars]);
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <button 
        onClick={()=>{setStars(!stars)}}
        className='bg-slate-950 rounded-md w-fit px-4 py-3 text-xl font-sans font-bold'>
          Blast
      </button>
      <StarsConfettiCanvas fire={stars}/>
    </main>
  )
}