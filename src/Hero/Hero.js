import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import HeroImage1 from '../images/Hero/barter-preppers.jpg';
import HeroImage2 from '../images/Hero/barter-kings.jpg';
import HeroImage3 from '../images/Hero/barter-goods.jpg';
import classes from './Hero.module.css';

const Hero = props => {
  return (<Auxiliary>
    <div className={classes.Hero}>
      <img src={HeroImage1} />
      <img src={HeroImage2} />
      <img src={HeroImage3} />
    </div>
  </Auxiliary>);
};

export default Hero; 