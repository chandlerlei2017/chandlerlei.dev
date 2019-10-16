import React from 'react';
import './index.css';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props) {
  return(
    <div className="icon-border">
      <FontAwesomeIcon icon={props.icon} size="3x" className="center-both"></FontAwesomeIcon>
    </div>
  );
}

export default Icon;

