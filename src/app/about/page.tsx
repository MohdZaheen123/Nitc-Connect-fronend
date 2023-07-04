
import Link from 'next/link'

export default function page() {
    return (
        <div className="min-h-screen h-fit bg-black text-white flex flex-col absolute top-0 inset-0 pb-10 pt-20 justify-center items-center w-full">
            <h1 className="text-2xl font-semibold font-serif">Welcome to NitcConnect!</h1>
            <img src="/about.gif" className="" alt="illustration" />
            <div className="w-[90vw] max-w-7xl">
                <p className="font-serif font-semibold text-xl py-2 underline underline-offset-4">About</p>
                <p className="text-lg py-3">NitcConnect is a revolutionary online platform designed exclusively for the students of NIT Calicut College.</p>
                <p className="text-lg py-3">We understand that students often face the challenge of sifting through numerous spam messages related to product sales and ticket offers in their college mail. NitcConnect eliminates this hassle by offering a dedicated E-commerce website tailored to the specific needs of NIT Calicut students.</p>

                <p className="font-serif font-semibold text-xl py-2 underline underline-offset-4">Hey Developers!!</p>
                <p className="text-lg py-3">Join us at NitcConnect today, let's build together, and shape the future of online shopping for NIT Calicut students. Explore our open-source project in <Link className='text-blue-600' href='https://github.com/MohdZaheen123/Nitc-Connect'>Github</Link>, enjoy the convenience, and contribute to making NitcConnect even better. Happy shopping!</p>
            </div>

        </div>
    )
}
