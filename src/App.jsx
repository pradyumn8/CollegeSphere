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

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='Our Program' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallary' title='Campus View'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Students Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
    </div>
  </div>
  )
}

export default App
