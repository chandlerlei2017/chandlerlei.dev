import React from 'react';
import Particle from './components/Particle/index'
import IntroPane from './components/IntroPane/index'

import "./index.css";

class HomePage extends React.PureComponent {

  render () {
    return(
      <div className="home p-5">
        <Particle/>
        <IntroPane/>
        <div style={{"height": "5000px"}}/>
      </div>
    );
  }
}

export default HomePage;
