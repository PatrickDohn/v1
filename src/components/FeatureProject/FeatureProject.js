import React from 'react';
import './featureproject.css';
import ProjectImg from '../../images/Res-Gen.png';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import GitHubIcon from '@material-ui/icons/GitHub';
import projectData from '../../project-data';

function FeatureProject() {
  const data = projectData.projectThree;
  const tagItems = data.tags.map((tag) => <li className="tags">{tag}</li>);

  return (
    <div className="feat-project-container" id="feature-project">
      <h1>Featured Project</h1>
      <div className="content-container">
        <div className="project-image">
          <img
            className="feat-project-img"
            alt="project"
            src={data.projectImg}
          />
        </div>
        <section className="project-summary">
          <div className="feat-title">{data.title}</div>
          <div className="info-container">
            <p>{data.description}</p>
            <div className="feat-project-tags">{tagItems}</div>
          </div>
          <div className="project-link">
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
            />
            <a href={data.githubUrl}>
              <GitHubIcon className="feat-web-icon" />
            </a>
            <a href={data.liveUrl}>
              <WebAssetIcon className="feat-web-icon" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeatureProject;
