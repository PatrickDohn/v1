import React from 'react'
import './projectCardLef.css'
import KettleImg from '../../images/ProjectTwo.png'
import WebAssetIcon from '@material-ui/icons/WebAsset';

function ProjectOne() {
  return (
    <div className="card-one-container">
      <div className="card-img-left">
        <img alt="project" src={KettleImg} />
      </div>
      <div className="card-content-left">
        <div className="project-title-left">
          <h2>Kettle</h2>
          <p>Social media app</p>
        </div>
        <div className="project-desciption-left">
          <p>This application is a social media platform inspired by Twitter. The idea is that users can come here to share their ideas. Each user can view the posts of other users in the homepage feed or on their wall.</p>
        </div>
        <div className="project-card-links-left">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
            <a href="https://github.com/C2C-NeedABr/kettle-client">
            <i className="devicon-github-plain dev"></i>
            </a>
            <a href="https://c2c-needabr.github.io/kettle-client/#/">
            <WebAssetIcon className='web-icon-left' />
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectOne
