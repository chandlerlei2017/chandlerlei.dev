import React from 'react';
import Particle from './components/Particle/index'
import IntroPane from './components/IntroPane/index'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import "./index.css";

class HomePage extends React.PureComponent {

  render () {
    return(
      <ParallaxProvider>
        <div className="home p-5">
          <Particle/>

          {/* <Parallax y={[2, -20]} > */}
            <IntroPane/>
            <div style={{"height": "5000px"}}/>
          {/* </Parallax> */}
        </div>
      </ParallaxProvider>
    );
  }
}

export default HomePage;
