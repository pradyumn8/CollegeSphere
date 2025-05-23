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
        <h1>We provide quality education to build a better world.</h1>
        <p>Our innovative curriculum equips students with the knowledge, skills, and hands-on experiences essential for success in the ever-evolving field of education.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </motion.div>
    </div>
  )
}

export default Hero