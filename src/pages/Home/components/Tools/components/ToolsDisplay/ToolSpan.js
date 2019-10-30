import React from 'react';
import './index.css';
import { selectedContext } from '../../selectedContext'
import { toolsMap } from '../../../../../../shared/data'

function ToolSpan(props) {
  return (
    <selectedContext.Consumer>
      {({ selected }) => (
        <span className={`ml-4 mr-4 mb-3 tool-span ${!selected || toolsMap[selected].includes(props.children) ? "" : "faint"}`}>{props.children}</span>
      )}
    </selectedContext.Consumer>
  );
}

export default ToolSpan;
