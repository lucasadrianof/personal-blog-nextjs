export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <main>
        <div className="bg-[#111111] mx-auto px-5 lg:container lg:rounded-2xl md:px-10 lg:px-20">
          {children}
        </div>
      </main>
    </div>
  )
}
