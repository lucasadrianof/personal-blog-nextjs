import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/(blog)/globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-cover bg-no-repeat bg-center bg-home h-full max-h-full w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
