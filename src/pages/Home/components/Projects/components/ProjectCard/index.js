import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

class ProjectCard extends React.PureComponent {

  render() {
    return (
      <div className="col-md-6 col-lg-4 p-3">
        <div className="project-card">
          <div className={`${this.props.image} project-image`} style={{ height: "250px" }} />
          <div className="project-text p-3">
            <h3 className="mt-3">{this.props.title}</h3>
            <hr className="project-divider" />
            <div className="pl-2 pr-2">
              <div className="p-0 ml-0 mr-0 mb-3">
                {this.props.children}
              </div>
              <div className="row">
                <div className="col-4 text-right">
                  <a href={this.props.github} rel="noopener noreferrer" target="_blank" className="project-gh"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
                </div>
                <div className="col-6 text-left">
                  <a href={this.props.url} rel="noopener noreferrer" target="_blank" className="btn btn-block project-link">Visit me!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
