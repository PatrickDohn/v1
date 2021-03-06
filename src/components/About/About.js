import React from 'react';
import './about.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container" id="about">
      <section className="about-summary">
        <h2 className="about-summary-text">Technologies I've used.</h2>
      </section>
      <div className="about-links">
        <div className="about-link-wrapper">
          <div>
            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-react-original-wordmark dev"></i>
            </div>

            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-javascript-plain dev"></i>
            </div>

            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-nodejs-plain dev"></i>
            </div>
          </div>

          <div>
            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-css3-plain dev"></i>
            </div>

            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-django-plain dev"></i>
            </div>

            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-github-plain dev"></i>
            </div>
          </div>
          <div>
            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-python-plain-wordmark dev"></i>
            </div>

            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-mongodb-plain-wordmark dev"></i>
            </div>

            <div className="about-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-postgresql-plain-wordmark dev"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
