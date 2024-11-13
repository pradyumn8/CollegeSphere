import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'

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
    </div>
  </div>
  )
}

export default App
