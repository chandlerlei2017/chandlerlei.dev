import React from 'react';
import './index.css';
import { selectedContext } from '../../selectedContext'

function ToolsSelector(props) {
  return(
    <div className="d-flex justify-content-center selector mb-3">
      <selectedContext.Consumer>
         {({ selected, updateSelected }) => (
           <>
            <span className={`selector-link ml-3 mr-3 ${selected !== "" && (selected === "Front-end" ? "selector-link-active": "faint")}`} onClick={updateSelected}>Front-end</span>
            <span className={`selector-link ml-3 mr-3 ${selected !== "" && (selected === "Back-end" ? "selector-link-active": "faint")}`} onClick={updateSelected}>Back-end</span>
            <span className={`selector-link ml-3 mr-3 ${selected !== "" && (selected === "Other" ? "selector-link-active": "faint")}`} onClick={updateSelected}>Other</span>
          </>
         )}
      </selectedContext.Consumer>
    </div>
  );
}

export default ToolsSelector;
