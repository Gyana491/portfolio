import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Gyana Ranjan | Web Developer & Entrepreneur',
  description: 'Professional portfolio of Gyana Ranjan - Web Developer, Freelancer, and Entrepreneur specializing in WordPress, MERN Stack, and high-performance websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
