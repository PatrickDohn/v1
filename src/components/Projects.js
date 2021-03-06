import React from 'react';
import './projects.css';
import ProjectOne from './Projects/ProjectOne';
import projectData from '../project-data';

function Projects() {
  const projectOne = projectData.projectOne;
  const projectTwo = projectData.projectTwo;

  return (
    <div className="project-container" id="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <ProjectOne data={projectOne} />
        <ProjectOne data={projectTwo} />
      </div>
    </div>
  );
}

export default Projects;
