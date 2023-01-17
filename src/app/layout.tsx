import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-hidden max-h-screen">
        {children}
      </body>
    </html>
  )
}
