import React from 'react'
import './hero.css'
import hero_image from '../assets/hero.png'
import arrow_icon from '../assets/arrow_icon.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>FRESH FLOWERS ONLY</h2>
        <div className='hero-text'>
          <p>Fresh Flower Collection</p>
        </div>
        <div className="hero-latest-btn">
          <div>Fresh Roses</div>
          <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div> 
    </div>
  )
}

export default Hero
