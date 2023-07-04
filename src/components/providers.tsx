'use client'


import { SessionProvider } from 'next-auth/react'
import { Toaster } from "@/components/ui/toaster"
import { FC, ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}



const Providers: FC<LayoutProps> = ({ children }) => {
    return (

        <SessionProvider>
            {children}
            <Toaster />
        </SessionProvider>

    )
}

export default Providers