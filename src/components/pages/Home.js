import React from 'react'
import '../../App.css'
import Projects from '../Projects';
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer';
import About from '../About/About'
import FeatureProject from '../FeatureProject/FeatureProject'

function Home () {
    return (
        <>
          <Hero/>
          <About />
          <FeatureProject />
          <Projects />
          <Footer />
        </>
      );
}

export default Home;
