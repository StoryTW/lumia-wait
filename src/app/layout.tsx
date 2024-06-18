import type { Metadata, Viewport } from 'next'
import { Chakra_Petch } from 'next/font/google'
import { ReactNode } from 'react'
import '@/assets/styles/index.scss'
import { Header } from '@/layouts/Header/Header'

const chakraPetch = Chakra_Petch({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
    title: 'Lumia',
    description: 'Lumia',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            <body className={chakraPetch.className}>
                <Header />
                {children}
            </body>
        </html>
    )
}
