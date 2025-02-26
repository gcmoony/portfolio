import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Navigation from "./components/Navigation/Navigation"
import Contact from "./components/Contact/Contact"
import Certifications from "./components/Certifications/Certifications"

function App() {
  return (
    <div className='App'>
      <Navigation />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
