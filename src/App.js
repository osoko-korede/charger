import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section />
      <SectionTwo/>
      <SectionThree />
    </div>
  )
}

export default App