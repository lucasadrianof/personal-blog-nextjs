import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/(blog)/globals.css'
import 'aos/dist/aos.css'

import { config } from '@fortawesome/fontawesome-svg-core'

import { AOSInit } from '@/components/AOS/AOSInit'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ViewportCorrection from '@/components/ViewportCorrection/ViewportCorrection'

config.autoAddCss = false

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex h-screen min-h-screen w-full flex-col bg-home bg-cover bg-fixed bg-center-center bg-no-repeat'>
        <AOSInit />
        <ViewportCorrection />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
