import React from 'react'
import Link from 'next/link'

type Confetti= {
  title: string,
  href: string,
}

const config:Confetti[] = [
  {
    title: "Stars Confetti",
    href: "/stars"
  },
  {
    title: "Party Confetti",
    href: "/party"
  },
  {
    title: "Rainfall Confetti",
    href: "/rainfall"
  },
  {
    title: "Cannon Confetti",
    href: "/cannon"
  },
  {
    title: "Snowfall Confetti",
    href: "/snowfall"
  },
  {
    title: "Fireworks Confetti",
    href: "/fireworks"
  },
]

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      {config.map((item, index)=>{
        return (
          <Link 
            href={item.href} 
            className='ring-1 ring-gray-500 rounded-md shadow-xl hover:ring-0 shadow-zinc-900 w-fit px-4 py-3 text-xl font-sans font-bold m-4'
            key={index}>
            {item.title}
          </Link>
        )
      })}
    </main>
  )
}