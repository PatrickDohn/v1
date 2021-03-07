import React from 'react';
import './technologies.css';

function Technologies() {
  return (
    <div className="tech-container" id="technologies">
      <section className="tech-summary">
        <h1 className="tech-summary-text">Technologies I've used.</h1>
      </section>
      <div className="tech-links">
        <div className="tech-link-wrapper">
          <div>
            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-react-original-wordmark dev"></i>
            </div>

            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-javascript-plain dev"></i>
            </div>

            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-nodejs-plain dev"></i>
            </div>
          </div>

          <div>
            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-css3-plain dev"></i>
            </div>

            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-django-plain dev"></i>
            </div>

            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-github-plain dev"></i>
            </div>
          </div>
          <div>
            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-python-plain-wordmark dev"></i>
            </div>

            <div className="tech-link-items">
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
              <i className="devicon-mongodb-plain-wordmark dev"></i>
            </div>

            <div className="tech-link-items">
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

export default Technologies;
