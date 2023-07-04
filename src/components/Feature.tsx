import { FC } from 'react'

interface FeatureProps {

}

const Feature: FC<FeatureProps> = ({ }) => {
  return (

    <div className='h-full min-h-screen bg-sky-950 text-white flex flex-col items-center justify-center '>

      <div className='m-7 md:w-4/5 md:mx-auto'>
        <img src="/connect.png" alt="connect img" className='h-20 mb-4' />
        <p className='text-5xl md:text-6xl'>Why Nitc-Connect?</p>
      </div>
      <div className='h-full px-5 flex justify-center items-center w-full md:mx-auto flex-wrap md:max-w-[80rem]'>
        <div className='m-3 w-full md:m-6 md:w-[30rem]'>
          <p className='text-xl font-semibold text-blue-500 md:text-3xl'>Exclusive Deals</p>
          <p className=''>Find fantastic bargains on products and tickets available only for NIT Calicut students.</p>
        </div>
        <div className='m-3 w-full md:m-6 md:w-[30rem]'>
          <p className='text-xl font-semibold text-blue-500 md:text-3xl'>Trustworthy Sellers</p>
          <p className=''>All sellers are verified NIT Calicut students ensuring safety and authenticity.</p>
        </div>
        <div className='m-3 w-full md:m-6 md:w-[30rem]'>
          <p className='text-xl font-semibold text-blue-500 md:text-3xl'>Diverse Offerings</p>
          <p className=''>Discover a wide array of products and event tickets exclusively for NIT Calicut community.</p>
        </div>
        <div className='m-3 w-full md:m-6 md:w-[30rem]'>
          <p className='text-xl font-semibold text-blue-500 md:text-3xl'>Instant Updates</p>
          <p className=''>Stay in the loop with real-time updates on orders and event ticket purchases.</p>
        </div>
      </div>
    </div>
  )
}

export default Feature