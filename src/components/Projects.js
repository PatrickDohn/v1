import React from 'react';
import './projects.css';
import ProjectFour from './Projects/ProjectFour'
import projectData from '../project-data.json'

function Projects() {
  // const projectTwo = projectData.projectTwo
  // const projectOne = projectData.projectOne
  return (
    <div className='project-container' id='projects'>
      <h1>Projects</h1>
      <div className='cards__container'>
            <ProjectFour />
      </div>
    </div>
  );
}

export default Projects;
