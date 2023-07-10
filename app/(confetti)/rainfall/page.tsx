"use client"

import { useState } from 'react'
import { RainfallConfettiCanvas } from '@/components/RainfallConfetti'

export default function RainfallPage() {
  const [rainfall, setRainfall] = useState(false)
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <button 
        onClick={()=>{setRainfall(!rainfall)}}
        className='bg-slate-950 rounded-md w-fit px-4 py-3 text-xl font-sans font-bold'>
          Rainfall {rainfall? "Inactive":"Activate"}
      </button>
      <RainfallConfettiCanvas fire={rainfall}/>
    </main>
  )
}
