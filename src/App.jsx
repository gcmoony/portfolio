import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Navigation from "./components/Navigation/Navigation"
import Contact from "./components/Contact/Contact"
import Certifications from "./components/Certifications/Certifications"

function App() {
  return (
    <div className='App'>
      <meta
        name='description'
        content={"The developer portfolio of George Cadel-Munoz"}
      />
      <title>GCMunoz - Software Developer</title>
      <Navigation />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  )
}

export default App
