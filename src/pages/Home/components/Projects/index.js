import React from 'react';
import './index.css'
import ProjectCard from './components/ProjectCard/index'

const projectData = [
  {
    image: "spotify-tracks",
    title: "Spotify Tracks",
    github: "https://github.com/chandlerlei2017/Spotify-Plays",
    url: "spotify-tracks.com",
    description: "Some description"
  },
  {
    image: "uwsublet",
    title: "UWSublet",
    github: "https://github.com/chandlerlei2017/sublet",
    url: "",
    description: ""
  },
  {
    image: "personal-website",
    title: "chandlerlei.dev",
    github: "https://github.com/chandlerlei2017/chandlerlei.dev",
    url: "chandlerlei.dev",
    description: "Some description"
  },
  {
    image: "hardware",
    title: "Bike Safe",
    github: "",
    url: "",
    description: "Some description"
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
    return(
      <div align="center" className="project-section">
        <h2 className="mb-5">My Past Work</h2>
        <div className="col-md-12 col-xxl-8">
          <div className="row" style={{margin: "0"}}>
            {projectData.map(project => {
              return (
                <ProjectCard key={project.image} image={project.image}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsView;
