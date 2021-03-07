import React from 'react';
import '../../App.css';
import Projects from '../Projects';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Technologies from '../Technologies/Technologies';
import FeatureProject from '../FeatureProject/FeatureProject';

function Home() {
  return (
    <>
      <Hero />
      <Technologies />
      <FeatureProject />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
