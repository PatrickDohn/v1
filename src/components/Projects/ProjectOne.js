import React from 'react'
import './projectCardLef.css'
import KettleImg from '../../images/ProjectTwo.png'
import WebAssetIcon from '@material-ui/icons/WebAsset';

function ProjectOne({ data }) {
console.log('data', data)

  return (
    <div className="card-one-container">
      <div className="card-img-left">
        <img alt="project" src={KettleImg} />
      </div>
      <div className="card-content-left">
        <div className="project-title-left">
          <p>{data.heading}</p>
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
        <div className="project-desciption-left">
          <p>{data.description}</p>
        </div>
        <div className="project-card-links-left">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
            <a href={data.liveUrl}>
            <i className="devicon-github-plain dev"></i>
            </a>
            <a href={data.githubUrl}>
            <WebAssetIcon className='web-icon-left' />
            </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectOne
