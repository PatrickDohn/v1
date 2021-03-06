import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-title">
        <h1>Patrick Dohn</h1>
        <p>Fullstack Developer</p>
        <div className="hero-tags">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
          />
          <a href="https://github.com/PatrickDohn">
            <i className="devicon-github-plain dev-hero"></i>
          </a>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
          />

          <a href="https://www.linkedin.com/in/patrick-dohn/">
            <i className="devicon-linkedin-plain dev-hero"></i>
          </a>
        </div>
      </div>
      <div className="hero-info">
        <div className="hero-info-text">
          <h2>A little about me.</h2>
          <p>
            Im a developer focused on finding innovative ways to efficiently
            develop, design, and optimize web applications. I'm a hard-working,
            quick learning individual who strives in pushing myself and learning
            new things.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
