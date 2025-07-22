import React from 'react';
import { getHomeMessage } from './home';

function HomeView() {
  return <h1>{getHomeMessage()}</h1>;
}

export default HomeView;