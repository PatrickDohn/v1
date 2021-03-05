import React from 'react'
import './projectCard.css'
import KettleImg from '../../images/ProjectTwo.png'
import MediThanks from '../../images/Medi-thanks.png'
import WebAssetIcon from '@material-ui/icons/WebAsset';

function ProjectFour() {
  return (
  <div className="background">
    <div className="background-image">
      <div className="stuff">
      <div className="card-content">
        <div className="project-title">
          <p>General Assembly 2020 Hackathon Winner</p>
          <h2>MediThanks</h2>
          <p>Virtual thanks you board</p>
        </div>
        <div className="project-desciption">
          <p>A web app for frontline medical workers to receive appreciation for their work Through a digital forum for public 'thank you cards' (People can sign up and post appreciation for specific hospitals or in general so that they can feel seen and understand their impact)</p>
        </div>
        <div className="project-card-links">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
            <a href="https://github.com/PB-J/frontline-frontend">
            <i className="devicon-github-plain dev"></i>
            </a>
            <a href="https://pb-j.github.io/frontline-frontend/#/">
            <WebAssetIcon className='web-icon' />
            </a>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectFour


{/* <div className="projectCard">
<section className="img-animation-section">
  <div className="wrapper">
    <div className="card">
      <img className="cardImage" alt="project" src={KettleImg} />
    </div>
  </div>
</section>
<div>
  <h1>More card stuff</h1>
  <p>adfkadlg adfknsdgsv dsjkgnsfad jkdaf df df asfn</p>
</div>
</div> */}
