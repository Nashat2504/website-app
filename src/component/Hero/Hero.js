import React from 'react'
import "../Hero/Hero.css"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <div className='hero-hand-icon'>
                <p className='p'></p>
                
            </div>
        
            
        </div>
        
        <div className='hero-right'>
            <img src={hero_image} alt=''/>
        </div>
    </div> 
  )
}

export default Hero
