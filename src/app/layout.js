import { Inter } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hey there, I\'m George 👋',
  description: 'A portfolio web page made by George Cadel-Munoz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-screen-lg m-auto"} >
        <NavBar />
        {children}
        </body>
    </html>
  )
}
