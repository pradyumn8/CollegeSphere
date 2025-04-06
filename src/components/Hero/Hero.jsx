import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <div className='hero'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }} className="hero-text">
        <h1>Creating a Peaceful and Inspiring Reading Environment.</h1>
        <p>We offer a quiet, comfortable space where readers can focus, learn, and immerse themselves in the world of books without distractions.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </motion.div>
    </div>
  )
}

export default Hero