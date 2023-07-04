
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navar'

import Providers from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nitc Connect',
  description: 'NitcConnect is an E- commerce website designed exclusively for NIT Calicut students.Find textbooks, electronics, fashion, and more at affordable prices.Say goodbye to spam messages!',
  keywords: 'NitcConnect, NIT Calicut, E-commerce, Online shopping, College students, Textbooks, Electronics, Fashion, Affordable prices'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className='max-w-[100rem] mx-auto pt-12'>
            {children}
          </div>
        </Providers >
      </body>
    </html>
  )
}







