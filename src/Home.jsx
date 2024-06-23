import React from 'react';
import  web from "../src/images/img1.png";
import Common from './Common';

const Home = () => {
  return (
    <>
    <Common
     name='Grow your business with' 
     imgsrc={web} 
     visit='/service' 
     btname="Get Started"
    />
    </>
  );
};

export default Home;
