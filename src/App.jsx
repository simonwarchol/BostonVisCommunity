import { useContext } from 'react'
import About from './components/About/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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

const Redirect = ({url}) => {
  window.location.href = url;
  return null;
};

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={(
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
          )} />
          <Route path='/slack' element={<Redirect url={'https://join.slack.com/t/boston-vis/shared_invite/zt-2s4vkbvg5-OCFX~flb61l_6YevGkTNNA'}  />} />
          <Route path='/rsvp' element={<Redirect url={'https://forms.gle/BGPeSUtmgoHgha2c9'}  />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;