import React from 'react'
import '../../App.css'
import Projects from '../Projects';
import Hero from '../Hero'
import Footer from '../Footer';
import About from '../About'

function Home () {
    return (
        <>
          <Hero/>
          <About />
          <Projects />
          <Footer />
        </>
      );
}

export default Home;
