import React from 'react';
import './featureproject.css';
import { Link } from 'react-router-dom';
import ProjectImg from '../../images/Res-Gen.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';

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
            <p>Application built with React. It transforms JSON into a downloadable PDF. Bundled with WebPack</p>
          </div>
          <div className="project-link">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
            <a href="https://github.com/starter-code/res-gen">
            <i className="devicon-github-plain dev"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeatureProject;
