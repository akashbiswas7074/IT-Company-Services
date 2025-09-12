import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechFlow Solutions - Professional IT Services & Digital Solutions',
  description: 'Leading IT company providing web development, mobile apps, digital marketing, and cutting-edge technology solutions. Transform your business with our expert team.',
  keywords: 'IT services, web development, mobile apps, digital marketing, software solutions, technology consulting',
  authors: [{ name: 'TechFlow Solutions' }],
  robots: 'index, follow',
  openGraph: {
    title: 'TechFlow Solutions - Professional IT Services',
    description: 'Leading IT company providing comprehensive digital solutions',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
