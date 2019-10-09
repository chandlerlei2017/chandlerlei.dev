import React from 'react';
import Particle from './components/Particle/index'
import IntroPane from './components/IntroPane/index'

import "./index.css";

class HomePage extends React.PureComponent {

  render () {
    return(
      <React.Fragment>
        <Particle/>
        <IntroPane/>
      </React.Fragment>
    );
  }
}

export default HomePage;
