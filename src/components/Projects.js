import React from 'react';
import './projects.css';
import ProjectCard from './Projects/ProjectCard';
import projectData from '../project-data';

function Projects() {
  const projectOne = projectData.projectOne;
  const projectTwo = projectData.projectTwo;

  return (
    <div className="project-container" id="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <ProjectCard data={projectOne} />
        <ProjectCard data={projectTwo} />
      </div>
    </div>
  );
}

export default Projects;
