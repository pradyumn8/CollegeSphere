import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src={next_icon} className='next-btn' alt="" />
        <img src={back_icon} className='back-btn' alt="" />
        <div className="slider">
        <ul>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                    <h3>William Jackson</h3>
                    <span>CollegeSpare, USA</span>
                </div>
            </div>
            <p>Choosing to pursue my degree at CollegeSphare was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
        </div>
    </li>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                    <h3>Emma Thompson</h3>
                    <span>CollegeSpare, USA</span>
                </div>
            </div>
            <p>The opportunities provided by CollegeSpare, USA were life-changing. I gained practical skills that prepared me for my career, and the friendships I made will last a lifetime.</p>
        </div>
    </li>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                    <h3>Michael Lee</h3>
                    <span>CollegeSpare, USA</span>
                </div>
            </div>
            <p>CollegeSpare’s focus on innovation and technology allowed me to gain hands-on experience that has been invaluable in my field. I felt inspired every day.</p>
        </div>
    </li>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                    <h3>Olivia Garcia</h3>
                    <span>CollegeSpare, USA, Australia</span>
                </div>
            </div>
            <p>At CollegeSpare, I discovered a passion for learning that I never knew I had. The professors and staff were incredibly supportive, helping me succeed every step of the way.</p>
        </div>
    </li>
</ul>

        </div>
    </div>
  )
}

export default Testimonials