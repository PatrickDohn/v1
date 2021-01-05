import React from 'react';
import './projects.css';
import ProjectOne from './Projects/ProjectOne'
import ProjectTwo from './Projects/ProjectTwo'
import ProjectThree from './Projects/ProjectThree'

function Projects() {
  return (
    <div className='project-container' id='projects'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ProjectTwo />
          <ProjectOne />
        </div>
      </div>
    </div>
  );
}

export default Projects;



{/* <CardItem
src='images/img-9.jpg'
text='Over the Fence'
label='Messenger'
path='/services'
/>
<CardItem
src='images/img-2.jpg'
text='Kettle'
label='Social Media'
path='/services'
/>
</ul>
<ul className='cards__items'>
<CardItem
src='images/img-3.jpg'
text='Weather App'
label='Weather'
path='/services'
/>
<CardItem
src='images/img-4.jpg'
text='Res Genie'
label='Resume Builder'
path='/products'
/>
<CardItem
src='images/img-8.jpg'
text='Tic-tac-toe'
label='Game'
path='/sign-up'
/> */}
