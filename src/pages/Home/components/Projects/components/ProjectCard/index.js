import React from 'react';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function ProjectCard(props) {
  const { image, title, github, url, children } = props;

  return (
    <div className="col-md-6 col-lg-4 p-3">
      <div className="project-card">
        <div className={`${image} project-image`} style={{ height: "250px" }} />
        <div className="project-text p-3">
          <h3 className="mt-3">{title}</h3>
          <hr className="project-divider" />
          <div className="pl-2 pr-2">
            <div className="p-0 ml-0 mr-0 mb-3">
              {children}
            </div>
            <div className="row">
              <div className="col-4 text-right">
                <a href={github} rel="noopener noreferrer" target="_blank" className="project-gh"><FontAwesomeIcon icon={faGithubSquare} size="2x" /></a>
              </div>
              <div className="col-6 text-left">
                <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-block project-link">Visit me!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
