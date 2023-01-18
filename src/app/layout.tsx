import Header from './components/Header'
import './globals.css'

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
