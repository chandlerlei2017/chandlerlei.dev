import React from 'react';
// import ReactDOM from 'react-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faSave } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

function ContactView() {
  return (
    <div className="pt-5 pb-5 contact-section">
      <div className="row col-10 offset-1 col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3 mid-section p-5 rounded text-center">
        <div className="col-lg-4 mb-3">
          <h2 className="center-div">Let's talk!</h2>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="center-div">Hit me up on one of these platforms</div>
        </div>
        <div className="col-lg-4 mb-3">
          <div className="center-div">
            <a href="https://github.com/chandlerlei2017" className="contact-icon mr-3" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/qian-chandler-l-486069137/" className="contact-icon mr-3" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a data-tip="Email: q4lei@edu.uwaterloo.ca" href="mailto:q4lei@uwaterloo.ca" className="contact-icon mr-3" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
            </a>
            <a data-tip="Peek my Résumé" href="/resume.pdf" className="contact-icon" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faSave} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
}

export default ContactView;
