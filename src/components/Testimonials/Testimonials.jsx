import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpeg'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import user_5 from '../../assets/user-5.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForword = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}% )`;
    }

    const slideBackword = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}% )`;
    }
    return (
        <div className='testimonials'>
            <img src={next_icon} className='next-btn' onClick={slideForword} alt="" />
            <img src={back_icon} className='back-btn' onClick={slideBackword} alt="" />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Pradyumna Vishwakarma</h3>
                                    <span>Upavan E Library</span>
                                </div>
                            </div>
                            <p>The peaceful atmosphere at Upavan E Library helps me concentrate and immerse myself in my studies. It's the perfect place for learners and readers alike.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Aman Yadav</h3>
                                    <span>Upavan E Library</span>
                                </div>
                            </div>
                            <p>Upavan E Library provides an ideal environment for studying. The quiet space allows me to focus better and improve my learning experience.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Chaman Yadav</h3>
                                    <span>Upavan E Library</span>
                                </div>
                            </div>
                            <p>The serene surroundings of Upavan E Library have significantly enhanced my productivity. It's a great place to concentrate and grow intellectually.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_5} alt="" />
                                <div>
                                    <h3>Narayan Mishra</h3>
                                    <span>Upavan E Library</span>
                                </div>
                            </div>
                            <p>Spending time at Upavan E Library has been a wonderful experience. The peaceful setting makes it the perfect place to read, learn, and reflect.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Prabhakar Kumar</h3>
                                    <span>Upavan E Library</span>
                                </div>
                            </div>
                            <p>Visiting Upavan E Library has been a delightful experience. Its serene environment provides an ideal space for reading, learning, and contemplation.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials