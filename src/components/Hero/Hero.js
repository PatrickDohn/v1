import React from 'react'
import './hero.css'

import HeroImgSrc from '../../images/img-1.jpg'

function Hero() {
    return (
        <div className="hero-container" id='home'>
            <img className="hero-background" alt="mountains" src={HeroImgSrc}/>
            <div className="hero-title">
            <h1>Patrick Dohn</h1>
            <p>Fullstack Developer</p>
            </div>

        </div>
    )
}

export default Hero
