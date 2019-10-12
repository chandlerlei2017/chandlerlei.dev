import React from 'react';
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'

function Ellipses() {
  return(
    <span><FontAwesomeIcon id="circle-1" icon={faCircle}/> <FontAwesomeIcon id="circle-2" icon={faCircle}/> <FontAwesomeIcon id="circle-3" icon={faCircle}/></span>
  );
}

export default Ellipses;
