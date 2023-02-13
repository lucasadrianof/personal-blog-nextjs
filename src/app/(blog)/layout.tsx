'use client';

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/(blog)/globals.css'
import 'aos/dist/aos.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import AOS from 'aos'
import { useEffect } from 'react';

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <html lang="en">
      <head />
      <body className="bg-center-center bg-cover bg-fixed bg-no-repeat bg-home flex flex-col h-screen max-h-screen w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
