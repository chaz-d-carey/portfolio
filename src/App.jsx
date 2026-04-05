import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Companies from './components/sections/Companies'
import Contact from './components/sections/Contact'
import SkillsMarquee from './components/sections/Skills'

function App() {
  return (
    <div className="min-h-screen bg-eerieBlack text-paleDogwood">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Companies />
      <SkillsMarquee />
      <Contact />
    </div>
  )
}

export default App