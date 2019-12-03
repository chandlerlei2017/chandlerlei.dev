import React from 'react';
import Particle from './components/Particle/index'
import IntroPane from './components/IntroPane/index'
import AboutView from './components/About/index'
import ExperienceView from './components/Experience/index'
import ProjectsView from './components/Projects/index'
import ToolsView from './components/Tools/index'
import ContactView from './components/Contact/index'
import ReactGA from 'react-ga';
import "./index.css";
import { isMobile } from 'react-device-detect';

class HomePage extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview("/");
  }

  render() {
    return (
      <>
        <div className="intro p-3">
          {!isMobile && <Particle />}
          <IntroPane />
          <AboutView />
        </div>

        <ToolsView />
        <ExperienceView />
        <ProjectsView />
        <ContactView />
      </>
    );
  }
}

export default HomePage;
