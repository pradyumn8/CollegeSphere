import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>We provide quality education to build a better world.</h1>
        <p>Our innovative curriculum equips students with the knowledge, skills, and hands-on experiences essential for success in the ever-evolving field of education.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero