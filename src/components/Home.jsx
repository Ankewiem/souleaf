import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Steps from './Steps';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Steps />
    </div>
  );
}

export default Home;
