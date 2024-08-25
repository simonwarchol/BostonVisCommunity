import { useContext } from 'react'
import About from './components/About/About'
import Events from './components/Events/Events'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Calendar from './components/Calendar/Calendar'
import Participants from './components/Participants/Participants'

const App = () => {

  return (
    <>
      <Navbar />

      <main>
        <About />
        <Events />
        <Calendar />
        <Participants />
        <Contact />
      </main>
      <Background />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
