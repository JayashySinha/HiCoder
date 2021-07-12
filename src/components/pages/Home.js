import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import News from '../News';
import Footer from '../Footer';
import Toolbar from '../Toolbar';


function Home() {
  return (
    <>
      
      <HeroSection />
      <News/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
