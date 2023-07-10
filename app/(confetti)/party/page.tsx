"use client"

import { PartyConfettiCanvas } from '@/components/PartyConfetti'
import React, { useState } from 'react'

export default function PartyPage() {
  const [party, setParty] = useState(false)
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <button 
        onClick={()=>{setParty(!party)}}
        className='bg-slate-950 rounded-md w-fit px-4 py-3 text-xl font-sans font-bold'>
          Party {party? "Inactive":"Activate"}
      </button>
      <PartyConfettiCanvas fire={party}/>
    </main>
  )
}