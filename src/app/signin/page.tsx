"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button, buttonVariants } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Cookies from 'js-cookie'

export default function Component() {
    const { data: session } = useSession()
    const { toast } = useToast()


    const handlelogin = async () => {
        await signIn('google')
        toast({
            title: "Login Sucessfull",
            description: "Explore Create Buy!!",
        })
        const email = session?.user?.email
        if (session) {
            console.log("hello everyone from handle login")
            Cookies.set('email', email!)
        }

    }

    if (session) {
        return <div className="flex flex-col bg-black text-white h-screen absolute top-0 inset-0 pt-12  items-center justify-center">
            <p className="text-3xl font-semibold text-center">Welcome Back {session?.user?.name}!!</p>
            <p className="mb-10">Signed in as {session?.user?.email}</p>
            <p className="text-center">Sell your products and tickets online through Nitc-connect</p>
            <p className="text-center">Get started by clicking the button below to showcase your products or ticket</p>
            <img src="/profile.gif" alt="image" />
            <div>
                <Link href='/create/product' className={cn(buttonVariants(), 'm-2')}>Sell Product</Link>
                <Link href='/create/ticket' className={cn(buttonVariants(), 'm-2')}>Sell Tickets</Link>
                <Button className={cn(buttonVariants(), 'm-2')} onClick={() => { signOut(), { callbackUrl: `${window.location.origin}` } }}>Sign Out</Button>
            </div>
        </div>
    }
    return <div className="h-screen flex items-center justify-center absolute top-0 inset-0">
        <div className="flex-1 w-full bg-black h-screen">
            <img src="/signin.jpg" alt="nature picture" className="h-full absolute inset-0 top-0 md:static w-full md:w-fit" />
        </div>
        <div className="md:flex-1 md:bg-black h-screen text-white flex justify-center items-center flex-col z-10 w-full">

            <img src="/@.gif" className="h-24" alt="" />
            <p className="text-3xl underline underline-offset-4 font-bold">Create an account</p>
            <p className="text-base">Continue with google create your account</p>
            <p className="text-base mb-1">Please use NITC mail id to access the website</p>
            <Button className="rounded flex bg-black md:bg-gray-800" onClick={handlelogin}><img src="/google.png" alt="google logo" className="h-6 mx-1" /> Google</Button>
        </div>
    </div>
}