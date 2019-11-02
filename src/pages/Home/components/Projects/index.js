import React from 'react';
import './index.css'
import ProjectCard from './components/ProjectCard/index'
import { projectData } from '../../../../shared/data'

function ProjectsView() {
  return (
    <div align="center" className="project-section pt-5 pb-5">
      <h2 className="mb-5">My Past Work</h2>
      <div className="col-md-12 col-xxl-8">
        <div className="row" style={{ margin: "0" }}>
          {projectData.map(project => {
            return (
              <ProjectCard key={project.image} title={project.title} image={project.image} github={project.github} url={project.url}>
                {project.description}
              </ProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsView;
