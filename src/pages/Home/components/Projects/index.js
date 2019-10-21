import React from 'react';
import './index.css'
import ProjectCard from './components/ProjectCard/index'

class ProjectsView extends React.PureComponent {
  render() {
    return(
      <div align="center" className="project-section">
        <h2 className="mb-5">My Past Work</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    );
  }
}

export default ProjectsView;
