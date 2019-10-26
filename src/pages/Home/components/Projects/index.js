import React from 'react';
import './index.css'
import ProjectCard from './components/ProjectCard/index'

const projectData = [
  {
    image: "spotify-tracks",
    title: "Spotify Tracks",
    github: "https://github.com/chandlerlei2017/Spotify-Plays",
    url: "https://spotifytracks.com",
    description: "A web application that displays and visualizes data for spotify playing history"
  },
  {
    image: "uwsublet",
    title: "UWSublet",
    github: "https://github.com/chandlerlei2017/sublet",
    url: "",
    description: "A sublet marketplace built for easy filtering and organization of listings"
  },
  {
    image: "personal-website",
    title: "chandlerlei.dev",
    github: "https://github.com/chandlerlei2017/chandlerlei.dev",
    url: "https://chandlerlei.dev",
    description: "The website you are on right now! ( Yes... I'm counting this as a project )"
  },
  {
    image: "hardware",
    title: "Bike Safe",
    github: "",
    url: "",
    description: "An IOT embedded system that warns bikers of dangerous incoming objects"
  },
  {
    image: "1",
    title: "",
    github: "",
    url: "",
    description: ""
  },
  {
    image: "2",
    title: "",
    github: "",
    url: "",
    description: ""
  },
]

class ProjectsView extends React.PureComponent {
  render() {
    return (
      <div align="center" className="project-section">
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
}

export default ProjectsView;
