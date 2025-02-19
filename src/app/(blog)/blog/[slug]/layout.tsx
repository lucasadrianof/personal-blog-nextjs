export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>
        <div
          className='mx-auto bg-gray-950 px-5 lg:container md:px-10 lg:rounded-2xl lg:px-20'
          data-aos='fade'
          data-aos-duration={300}
        >
          {children}
        </div>
      </main>
    </div>
  )
}
