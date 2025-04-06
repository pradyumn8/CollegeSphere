import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Vidoplayer from './components/Vidoplayer/Vidoplayer'

function App() {
  const [playState, setPlayState] = useState(false)

  return (
  <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      {/* <Title subTitle='Our Services' title='What We Offer'/>
      <Programs/> */}
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallary' title='Reading Areas'/>
      <Campus/>
      <Title subTitle="Visitor's Feedback" title='What Students Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <Vidoplayer playState={playState} setPlayState={setPlayState}/>
  </div>
  )
}

export default App
