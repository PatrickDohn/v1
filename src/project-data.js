import React from 'react';
import KettleImg from './images/Kettle.png';
import MediThanks from './images/Medi-thanks.png';
import ResGenImg from './images/Res-Gen.png';

const data = {
  projectOne: {
    heading: '',
    title: 'Kettle',
    projectImg: KettleImg,
    subtitle: 'Social media app',
    tags: ['React', 'Javascript', 'Express', 'MongoDB'],
    description:
      'This application is a social media platform inspired by Twitter. The idea is that users can come here to share their ideas. Each user can view the posts of other users in the homepage feed or on their wall.',
    liveUrl: 'https://github.com/C2C-NeedABr/kettle-client',
    githubUrl: 'https://c2c-needabr.github.io/kettle-client/#/',
  },
  projectTwo: {
    heading: 'General Assembly 2020 Hackathon Winner',
    projectImg: MediThanks,
    title: 'Medithanks',
    subtitle: 'Virtual thanks you board',
    tags: ['React', 'Javascript', 'Express', 'MongoDB'],
    description:
      "A web app for frontline medical workers to receive appreciation for their work Through a digital forum for public 'thank you cards' (People can sign up and post appreciation for specific hospitals or in general so that they can feel seen and understand their impact)",
    liveUrl: 'https://medithanks.co/#/',
    githubUrl: 'https://pb-j.github.io/frontline-frontend/#/',
  },
  projectThree: {
    heading: '',
    projectImg: ResGenImg,
    title: 'ResGenie',
    subtitle: 'Resume builder.',
    tags: ['React', 'Javascript'],
    description:
      'Resume building application for software developers. Built using React, the app transforms JSON into a downloadable PDF.',
    liveUrl: 'https://res-gen.netlify.app/#/',
    githubUrl: 'https://github.com/starter-code/res-gen',
  },
};

export default data;
