import React from 'react';
import './index.css';
import { selectedContext } from '../../selectedContext'

function ToolsSelector(props) {
  return(
    <div className="d-flex justify-content-center selector mb-3">
      <selectedContext.Consumer>
         {({ updateSelected }) => (
           <>
            <span className="selector-link ml-3 mr-3" onClick={updateSelected}>Front-end</span>
            <span className="selector-link ml-3 mr-3" onClick={updateSelected}>Back-end</span>
            <span className="selector-link ml-3 mr-3" onClick={updateSelected}>Other</span>
          </>
         )}
      </selectedContext.Consumer>
    </div>
  );
}

export default ToolsSelector;
