import React from 'react'
import './Campus.css'
import gallary_1 from '../../assets/gallery-1.png'
import gallary_2 from '../../assets/gallery-2.png'
import gallary_3 from '../../assets/gallery-3.png'
import gallary_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import { motion } from "framer-motion"


const Campus = () => {
  return (
    <div className='campus'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }} className="gallary">
        <img src={gallary_1} alt="" />
        <img src={gallary_2} alt="" />
        <img src={gallary_3} alt="" />
        <img src={gallary_4} alt="" />
      </motion.div  >
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus