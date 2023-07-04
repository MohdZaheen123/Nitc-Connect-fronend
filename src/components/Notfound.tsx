import Link from 'next/link'

export default function Notfound() {
    return (
        <div className="h-screen w-full bg-black text-white absolute top-0 inset-0 flex justify-center items-center flex-col">
            <img src="/notfound.gif" className="" alt="" />
            <p className="py-2"> Please <Link className='text-blue-600' href='/signin'>Login</Link> To Continue</p>
        </div>
    )
}
