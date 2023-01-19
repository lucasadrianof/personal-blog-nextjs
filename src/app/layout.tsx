import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Header from './components/Header'
import './globals.css'

config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-cover bg-no-repeat bg-home overflow-hidden h-screen max-h-screen w-full">
        <Header />
        {children}
      </body>
    </html>
  )
}
