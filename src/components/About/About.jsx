import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'
import { motion } from "framer-motion"


const About = ({ setPlayState }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className='about'>
            <div className="about-left">
                <img src={about_img} className='about-img' />
                <img src={play_icon} className='play-icon' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
            <h3>About Upavan E Library</h3>
<h2>Creating a Peaceful Learning Environment</h2>
<p>
  Upavan E Library is dedicated to providing a quiet and comfortable space for readers, researchers, and learners. Our well-maintained environment fosters concentration and intellectual growth, making it the ideal place to immerse yourself in books and knowledge.  
  Whether you are a student, a professional, or an avid reader, our library offers the perfect atmosphere to focus, reflect, and explore the world of literature.
</p>

          </div>
        </motion.div >
    )
}

export default About