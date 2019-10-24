import React from 'react';
import './index.css'
import ProjectCard from './components/ProjectCard/index'

class ProjectsView extends React.PureComponent {
  render() {
    return(
      <div align="center" className="project-section">
        <h2 className="mb-5">My Past Work</h2>
        <div className="col-md-12 col-xxl-8">
          <div className="row" style={{margin: "0"}}>
            <ProjectCard image="spotify-plays"/>
            <ProjectCard image="uwsublet"/>
            <ProjectCard image="personal-website"/>
            <ProjectCard image="hardware"/>
            <ProjectCard image=""/>
            <ProjectCard iamge=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsView;
