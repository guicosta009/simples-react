import React from 'react';
import { getAboutMessage } from './about';

function About() {
  return <h1>{getAboutMessage()}</h1>;
}

export default About; 