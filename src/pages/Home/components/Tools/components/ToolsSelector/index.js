import React from 'react';
import './index.css';

function ToolsSelector(props) {
  return(
    <div className="d-flex justify-content-center selector mb-3">
      <span className="selector-link ml-3 mr-3" onClick={props.onSelectorClick}>Front-end</span>
      <span className="selector-link ml-3 mr-3" onClick={props.onSelectorClick}>Back-end</span>
      <span className="selector-link ml-3 mr-3" onClick={props.onSelectorClick}>Other</span>
    </div>
  );
}

export default ToolsSelector;
