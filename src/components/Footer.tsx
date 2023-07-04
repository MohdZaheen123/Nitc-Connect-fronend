import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

export default function Footer() {
    return (
        <div className="h-full bg-sky-950 text-white min-h-screen">
            <div className="max-w-7xl flex flex-col mx-auto justify-center items-center">
                <div className="mt-10 pt-10 flex flex-col items-center justify-center md:w-[35rem] text-center text-blue-300">
                    <img src="/star.gif" alt="star picture" />

                    <p className="my-4 text-4xl font-extrabold ">Get Started</p>
                    <p className=" text-base">Join Nitc-Connect today and unveil an amazing online marketplace designed specifically for NIT Calicut students. Don’t miss out on exclusive deals and unique products!</p>
                    <Link href='/signin' className={cn(buttonVariants(), 'my-5')}> Sign In</Link>
                </div>
                <div className='text-center h-[15rem] pt-24 text-blue-300'>
                    <Link href='https://github.com/MohdZaheen123/Nitc-Connect-fronend'><img src="/github.svg" alt="" className='invert w-8 mx-auto my-4' /></Link>
                    <Link href='/products'>Products</Link>|
                    <Link href='/tickets'>Tickets</Link>|
                    <Link href='/about'>About</Link>
                    <p>© 2023 Nitc-Connect. All rights reserved.</p>
                </div>
            </div>
        </div>

    )
}
