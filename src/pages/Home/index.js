import React from 'react';
import Particle from './components/Particle/index'
import IntroPane from './components/IntroPane/index'
import AboutView from './components/About/index'

import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import "./index.css";

class HomePage extends React.PureComponent {

  render () {
    return(
      <ParallaxProvider>
        <div className="home p-5">
          <Particle/>

          <IntroPane/>
          <AboutView/>
        </div>
      </ParallaxProvider>
    );
  }
}

export default HomePage;
