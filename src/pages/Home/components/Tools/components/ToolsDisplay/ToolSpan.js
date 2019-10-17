import React from 'react';
import './index.css';

function ToolSpan(props) {
  return(
    <span className="ml-4 mr-4 mb-3 tool-text">{props.children}</span>
  );
}

export default ToolSpan;
