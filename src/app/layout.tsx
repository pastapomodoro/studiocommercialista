 import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import FooterGlow from '@/components/footer-glow'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio Veritas - Atti immobiliari, societari e successioni',
  description: 'Studio Veritas: competenza notarile in atti immobiliari, societari, successioni e donazioni. Chiarezza, riservatezza e tempi certi.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <FooterGlow />
      </body>
    </html>
  )
}
