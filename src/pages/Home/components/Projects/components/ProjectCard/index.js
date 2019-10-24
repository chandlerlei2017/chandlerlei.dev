import React from 'react';
import './index.css'

class ProjectCard extends React.PureComponent {

  render() {
    return(
        <div className="col-md-4 p-3">
          <div className={`rounded ${this.props.image} project-card`} style={{background: "", height: "250px"}}>
            <div className="project-text">

            </div>
          </div>
        </div>
    );
  }
}

export default ProjectCard;
