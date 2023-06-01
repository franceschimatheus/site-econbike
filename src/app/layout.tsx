import { ReactNode } from 'react'
import './globals.css'

import { Inter, Quicksand } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
})

export const metadata = {
  title: 'E-CON BIKE',
  description: 'Kit para conversão de bicicletas convencionais em e-bikes',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${quicksand.variable} font-sans text-gray-50`}
      >
        <main className="flex max-h-screen flex-col overflow-y-scroll bg-opacity-90 bg-[url(../assets/constellation.svg)]">
          {children}
        </main>
      </body>
    </html>
  )
}
