import React from 'react';
import './projects.css';
import ProjectOne from './Projects/ProjectOne'
import ProjectTwo from './Projects/ProjectTwo'
import projectData from '../project-data.json'

function Projects() {
  const projectTwo = projectData.projectTwo
  const projectOne = projectData.projectOne
  return (
    <div className='project-container' id='projects'>
      <h1>Projects</h1>
      <div className='cards__container'>
            <ProjectOne data={projectOne}/>
            <ProjectOne data={projectTwo}/>


      </div>
    </div>
  );
}

export default Projects;
