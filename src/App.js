import { useRef } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'

function App() {
  let projectsRef = useRef(null)

  return (
    <div className="App">
      <Header projectsRef={projectsRef}/>
      <Projects ref={projectsRef} />
      <Footer />
    </div>
  )
}

export default App
