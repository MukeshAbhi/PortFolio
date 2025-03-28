
import './App.css'
import { About } from './components/About'
import { Intro } from './components/Intro'
import { TopBar } from './components/TopBar'

function App() {
  

  return (
    <div className='w-full h-full relative bg-gradient-to-b from-b1 from-40% via-b2 via-20% to-b1 to-40% ...'>
        <TopBar />
        <Intro />
        <About />
    </div>
  )
}

export default App
