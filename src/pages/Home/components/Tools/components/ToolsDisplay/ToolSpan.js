import React from 'react';
import './index.css';
import { selectedContext } from '../../selectedContext'

function ToolSpan(props) {
  return(
    <selectedContext.Consumer>
      {({selected}) => (
        <span className="ml-4 mr-4 mb-3">{props.children}</span>
      )}
    </selectedContext.Consumer>
  );
}

export default ToolSpan;
