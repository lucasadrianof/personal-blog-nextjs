export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>
        <div className="bg-gray-950 mx-auto px-5 lg:container lg:rounded-2xl md:px-10 lg:px-20">
          {children}
        </div>
      </main>
    </div>
  )
}
