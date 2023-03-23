'use client';

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/(blog)/globals.css'
import 'aos/dist/aos.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import AOS from 'aos'
import { useEffect } from 'react';

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import useViewportCorrection from '@/hooks/useViewportCorrection';

config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useViewportCorrection()

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <html lang="en">
      <body className="flex h-screen min-h-screen w-full flex-col bg-home bg-cover bg-fixed bg-center-center bg-no-repeat">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
