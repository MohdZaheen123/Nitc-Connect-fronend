'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { useSession } from "next-auth/react"
import { cn } from '@/lib/utils'



const Navar = () => {
  const { data: session } = useSession()

  const [navState, setNavState] = useState(false)

  const handleclick = () => {
    const nav = document.getElementById('navbar');
    if (navState) {
      if (nav) {
        nav.style.left = '-100%';
        setNavState(false)
      }
    }
    else {
      if (nav) {
        nav.style.left = '0rem';
        setNavState(true)
      }
    }

  }

  return (

    <div className='fixed z-30 top-0 inset-x-0 bg-black flex justify-between items-center py-3'>
      <div className='h-full flex  items-center max-w-7xl gap-2 container text-white'>

        <Link href='/' onClick={navState ? handleclick : () => { }}  >
          <p className='font-semibold text-xl'>NitcConnect</p>
        </Link>

        <div id='navbar' className='gap-8 md:gap-3 flex md:flex-row flex-col justify-end  items-center absolute top-16 left-[-100%] md:static bg-black w-full transition-all duration-500 ease-out'>
          <Link onClick={handleclick} href='/products' className='font-semibold mt-5 md:mt-0'>Products</Link>
          <Link onClick={handleclick} href='/tickets' className='font-semibold'>Tickets</Link>
          <Link onClick={handleclick} href='/listing' className='font-semibold'>Listing</Link>
          <Link onClick={handleclick} href='/docs' className='font-semibold'>Docs</Link>
          <Link onClick={handleclick} href='/about' className='font-semibold'>About</Link>
          {session ? <Link onClick={handleclick} href='/signin'><img src={session.user?.image!} className='rounded-full h-8 mb-5 md:mb-0' alt="profile image" /></Link> : <Link onClick={handleclick} href='/signin' className={cn(buttonVariants(), 'mb-5 md:mb-0')}>Sign In</Link>}
        </div>
      </div>
      <button className='block md:hidden text-white' onClick={handleclick}> <img className='filter invert h-10' src="/menu.png" alt="menu" /></button>
    </div>
  )
}

export default Navar