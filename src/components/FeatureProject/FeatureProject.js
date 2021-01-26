import React from 'react';
import './featureproject.css';
import ProjectImg from '../../images/Res-Gen.png'
import WebAssetIcon from '@material-ui/icons/WebAsset';

function FeatureProject() {
  return (
    <div className='feat-project-container' id='feature-project'>
      <h1>Featured Project</h1>
    <div className='content-container'>
      <div className='project-image'>
        <img className="feat-project-img" alt="project" src={ProjectImg}/>
        </div>
        <section className="project-summary">
          <div className="info-container">
            <p>Resume building application for software developers. Built using React, the app transforms JSON into a downloadable PDF.</p>
          </div>
          <div className="project-link">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
            <a href="https://github.com/starter-code/res-gen">
            <i className="devicon-github-plain dev"></i>
            </a>
            <a href="https://res-gen.netlify.app/#/">
            <WebAssetIcon className='feat-web-icon' />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeatureProject;
