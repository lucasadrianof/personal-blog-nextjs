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
      <body className="overflow-hidden max-h-screen w-full">
        <Header />
        {children}
      </body>
    </html>
  )
}
