import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Executive Holdings',
  description: 'Executive Holdings acts as a unified site hub housing Executive Studios, Executive Audio Visual, and Lux by Executive. It presents a collaborative front, effortlessly showcasing the interplay and collective offerings of these individual yet harmonized entities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
