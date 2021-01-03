import React from 'react';
import './about.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className='about-container' id='about'>
      <section className='about-summary'>
        <p className='about-summary-heading'>
          About
        </p>
        <p className='about-summary-text'>
        Developer focused on finding innovative ways to efficiently develop, design, and optimize web applications. I'm a hard-working, quick learning individual who strives in pushing myself and learning new things.
        </p>
      </section>
      <h2>Technologies</h2>
      <div className='about-links'>

        <div className='about-link-wrapper'>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-atom-original dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-bootstrap-plain dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-css3-plain dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-django-plain dev"></i>
          </div>


          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-git-plain dev"></i>
          </div>


          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-github-plain dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-grunt-plain dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-heroku-original dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-handlebars-plain dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-javascript-plain dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-jquery-plain-wordmark dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-mongodb-plain-wordmark dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-nodejs-plain dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-postgresql-plain-wordmark dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-python-plain-wordmark dev"></i>
          </div>

          <div className='about-link-items'>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
          <i className="devicon-react-original-wordmark dev"></i>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
