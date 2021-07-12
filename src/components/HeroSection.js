import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
    <div className='hero-container'>
      <img className="title-image" src='https://hicoder.in/assets/images/slider/6.jpg' />
     
      <p>YOUR TIME, OUR EFFORTS</p>
      <h1>Pay After Job Full Stack<br/> Development Course</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          KNOW MORE
        </Button>
      </div>
      
    </div>
    <div className="next-batch">
        <h1 className="next-batch-text"> NEXT BATCH: <span>27 July</span> | <small><a href="/apply" className="next-batch-link">Apply Now</a></small></h1>
      </div>
      </div>
  );
}

export default HeroSection;
