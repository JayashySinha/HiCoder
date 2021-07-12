import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://hicoder.in/assets/images/blog/1.jpg'
              text='College education is not enough to be relevant for the tech Industry.'
              label='06 Sep 2020'
              path='https://blog.hicoder.in/college-education-isnt-enough-to-be-relevant-for-the-tech-industry/'
            />
            <CardItem
              src='https://hicoder.in/assets/images/blog/2.jpg'
              text='IT project demand increases by 127% as offline businesses shut down.'
              label='14 Oct 2020'
              path='https://blog.hicoder.in/it-project-demand-increases-by-127-as-offline-businesses-shut-down/'
            />
            <CardItem
              src='https://hicoder.in/assets/images/blog/3.jpg'
              text='13 reasons why businesses love hiring failed entreprneurs.'
              label='17 Oct 2020'
              path='https://blog.hicoder.in/why-businesses-hire-failed-entrepreneurs/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
