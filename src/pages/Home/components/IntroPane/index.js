import React from 'react';
import './index.css'
import Avatar from '../../../../shared/Avatar/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faAngleDown } from '@fortawesome/free-solid-svg-icons'

class IntroPane extends React.PureComponent {
  render() {
    return (
      <div className="intro" align="center" >
        <Avatar styles={{ height: "150px", width: "150px" }} />
        <h1 className="mt-5">Chandler Lei - Developer</h1>
        <h2 className="mt-5 mb-5">
          <FontAwesomeIcon icon={faMusic} />
          {} Starry, starry night - Paint your palette blue and grey {}
          <FontAwesomeIcon icon={faMusic} />
        </h2>
        <FontAwesomeIcon icon={faAngleDown} size="4x" />
      </div>
    );
  }
}

export default IntroPane;
