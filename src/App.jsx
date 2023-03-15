import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Skills from "./components/Skills"
import { Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <div >
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>

      {/* <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
     <Resume/> */}
    </div>
  )
}

export default App
