import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
/*import best_seller from '../Assets/best_seller.jpeg'*/
const Hero = () => {
  return (
    <div className ='hero'>

    <div className='hero-left'>
        <h2>NEW PRODUCTS</h2>
    <div>
        <div className='hand-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p>second paragraph</p>
        <p>third paragraph</p>
        </div>
        </div>
        <div className="hero-latest-c
        btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
    <div className='hero-right'>
    {/* <img src={best_seller} alt=""/> */}
        
    </div>
    </div>
  )
}

export default Hero