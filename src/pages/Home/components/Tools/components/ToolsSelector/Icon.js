import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
  position: "relative",
  float: "left",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}
function Icon(props) {
  return(
    <div className="icon-border">
      <FontAwesomeIcon icon={props.icon} size="3x" style={style}></FontAwesomeIcon>
    </div>
  );
}

export default Icon;

