import React from 'react';
import './projects.css';
import ProjectOne from './Projects/ProjectOne'
import ProjectTwo from './Projects/ProjectTwo'

function Projects() {
  return (
    <div className='project-container' id='projects'>
      <h1>Projects</h1>
      <div className='cards__container'>
          <div className="card-one-container">
            <ProjectOne />
          </div>
          <div className="card-two-container">
            <ProjectTwo />
          </div>
      </div>
    </div>
  );
}

export default Projects;
