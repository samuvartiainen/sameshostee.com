import { useRef } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { useMediaQuery } from "react-responsive";
import { Banner } from './components/Banner'

function App() {
  let projectsRef = useRef(null)
  
  const isMobile = useMediaQuery({
    maxWidth: 768
  });

  const isTablet = useMediaQuery({
    maxWidth: 1280
  });

  const isDesktop = useMediaQuery({
    minWidth: 1280
  });

  let device = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'

  return (
    <div className="App">
      <Header projectsRef={projectsRef}/>
      <Banner />
      <Projects ref={projectsRef} device={device} />
      <Footer />
    </div>
  )
}

export default App
