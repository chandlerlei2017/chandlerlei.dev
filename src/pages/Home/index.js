import React from 'react';
import Particle from './components/Particle/index'
import IntroPane from './components/IntroPane/index'
import AboutView from './components/About/index'
import ExperienceView from './components/Experience/index'
import ProjectsView from './components/Projects/index'
import ToolsView from './components/Tools/index'

import "./index.css";

class HomePage extends React.PureComponent {

  render () {
    return(
      <>
        <div className="intro p-3">
          <Particle/>
          <IntroPane/>
          <AboutView/>
        </div>
        <ToolsView/>
        <ExperienceView/>
        <ProjectsView/>
      </>
    );
  }
}

export default HomePage;
