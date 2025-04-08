import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

function App() {
 

  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden overflow-y-auto antialiased">
      <div className="bg-image absolute inset-0 bg-cover bg-fixed bg-center">
        <div className="relative z-10"> 
          <Navbar />
          <Hero />
        </div>
      </div>
    </main>
  )
}

export default App
