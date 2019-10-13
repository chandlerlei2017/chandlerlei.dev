import React from 'react';
import Particle from './components/Particle/index'
import IntroPane from './components/IntroPane/index'
import AboutView from './components/About/index'

import "./index.css";

class HomePage extends React.PureComponent {

  render () {
    return(
      <div className="home p-5">
        <Particle/>

        <IntroPane/>
        <AboutView/>
      </div>
    );
  }
}

export default HomePage;
