"use client"

import { useState } from 'react'
import { FireworksConfettiCanvas } from '@/components/FireworkConfetti'

export default function FireworksPage() {
  const [fireworks, setFireworks] = useState(false)
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <button 
        onClick={()=>{setFireworks(!fireworks)}}
        className='bg-slate-950 rounded-md w-fit px-4 py-3 text-xl font-sans font-bold'>
          Fireworks {fireworks? "Inactive":"Activate"}
      </button>
      <FireworksConfettiCanvas fire={fireworks}/>
    </main>
  )
}
