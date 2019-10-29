import React from 'react';
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function Ellipses(props) {
  return (
    <span><FontAwesomeIcon id={`${props.id}-1`} icon={faCircle} /> <FontAwesomeIcon id={`${props.id}-2`} icon={faCircle} /> <FontAwesomeIcon id={`${props.id}-3`} icon={faCircle} /></span>
  );
}

export default Ellipses;
