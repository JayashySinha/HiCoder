import React from 'react';
import '../App.css';
import { Button } from './Button';
import './News.css';

function News() {
  return (
    <div className='news-container'>
       <p>NEWS</p>
      <h1>#COVID19 Demands more full stack developers.</h1>
      <h1 className="updates">& Industry Updates</h1>
    </div>
  );
}

export default News;
