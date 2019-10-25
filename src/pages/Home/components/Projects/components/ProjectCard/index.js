import React from 'react';
import './index.css'

class ProjectCard extends React.PureComponent {

  render() {
    return(
        <div className="col-md-4 p-3">
          <div className="project-card">
            <div className={`${this.props.image} project-image`} style={{height: "250px"}}/>
            <div className="project-text p-3">
                <h3 className="mt-3">{this.props.title}</h3>
                <hr className="project-divider"/>
                <div className="pl-2 pr-2">
                  {this.props.children}
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ProjectCard;
