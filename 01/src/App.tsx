
import './App.css'
import { About } from './components/About'
import { Certi } from './components/Certi'
import { Contact } from './components/Conact'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { TopBar } from './components/TopBar'

function App() {
  

  return (
    <div className='w-full h-fit relative bg-gradient-to-b from-b1 from-40% via-b2 via-20% to-b1 to-40% ...'>
        <TopBar />
        <Intro />
        <About />
        <Projects />
        <Certi />
        <Contact/>
    </div>
  )
}

export default App
