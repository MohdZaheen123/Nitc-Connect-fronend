import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const Hero = ({ }) => {
    return (
        <div className=' h-screen min-h-screen md:justify-between md:items-center md:flex bg-blue-50 md:text-black ' >
            <div className='mx-10 z-20 absolute md:static pt-48 md:pt-40 md:m-2 md:p-10 h-full'>
                <img src="/qr.gif" className='h-40 md:h-52' alt="qr code" />
                <h1 className='text-2xl font-bold underline mb-3 text-blue-800'>Welcome to Nitc-Connect</h1>
                <p className='text-xl text-blue-500'>A real time interactive market place for students to sell products online</p>
                <p className='text-xl mb-3 text-blue-500'>Sell Tickets and products online!!</p>
                <Link href='/signin' className={buttonVariants()}>Sign in</Link>
            </div>
            <div className='h-screen w-fit md:w-[35rem] absolute z-2 md:static border-red-500'>
                <img src="/hero.jpg" alt="" className='h-full w-screen opacity-95' />
            </div>
        </div >
    )
}

export default Hero