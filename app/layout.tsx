import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'Vida Util - Consultores y Asesores Patrimoniales',
  description: 'Consultores y Asesores Patrimoniales. Servicios de dictaminación, pensiones y contabilidad.',
  generator: 'v0.app',
  icons: {
    icon: '/vidautillogo.png',
    apple: '/vidautillogo.png',
    shortcut: '/vidautillogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
