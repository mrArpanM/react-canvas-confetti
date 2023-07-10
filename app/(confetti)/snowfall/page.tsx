"use client"

import { useState } from 'react'
import { SnowfallConfettiCanvas } from '@/components/SnowfallConfetti'

export default function SnowfallPage() {
  const [snowfall, setSnowfall] = useState(false)
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <button 
        onClick={()=>{setSnowfall(!snowfall)}}
        className='bg-slate-950 rounded-md w-fit px-4 py-3 text-xl font-sans font-bold'>
          Snowfall {snowfall? "Inactive":"Activate"}
      </button>
      <SnowfallConfettiCanvas fire={snowfall}/>
    </main>
  )
}
