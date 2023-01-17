import Header from "./components/Header"

export default function Home() {
  return (
    <div id="main" className="relative">
      <div className="w-full top-0 py-3 sm:py-5 absolute">
        <Header />
      </div>
    </div>
  )
}