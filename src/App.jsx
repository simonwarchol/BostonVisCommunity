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
import Vis from './components/Vis/Vis'
import Description from './components/Description/Description'

const Redirect = ({ url }) => {

  window.location.href = url;
  return null;
};

const App = () => {

  return (
    <>
      <Navbar />
      <main>
        <About />
        <Vis />
        <Description />
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

export default App;