import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Navigation from "./components/Navigation/Navigation"
library.add(fab, far, fas)

function App() {
  return (
    <div className='App'>
      <Navigation />
      <About />
      <Projects />
    </div>
  )
}

export default App
