import React from 'react'
import './projectCard.css'
import KettleImg from '../../images/ProjectTwo.png'
import WebAssetIcon from '@material-ui/icons/WebAsset';

function ProjectThree() {
  return (
    <div className="card-container">
      <div className="card-img">
        <img alt="project" src={KettleImg} />
      </div>
      <div className="card-content">
        <div className="project-title">
          <h2>Kettle</h2>
          <p>Social media app</p>
        </div>
        <div className="project-desciption">
          <p>This application is a social media platform inspired by Twitter. The idea is that users can come here to share their ideas. Each user can view the posts of other users in the homepage feed or on their wall.</p>
        </div>
        <div className="project-card-links">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
            <a href="https://github.com/C2C-NeedABr/kettle-client">
            <i className="devicon-github-plain dev"></i>
            </a>
            <a href="https://c2c-needabr.github.io/kettle-client/#/">
            <WebAssetIcon className='web-icon' />
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectThree
