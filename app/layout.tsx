import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from "./components/Navbar";
import ClientOnly from "./components/ClientOnly"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Connect',
  description: 'Room and home rental App',
}
const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
