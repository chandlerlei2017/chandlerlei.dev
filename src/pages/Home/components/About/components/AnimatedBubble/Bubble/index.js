import React from 'react';
import './index.css'

function Bubble(props) {
  return (
    <div id={props.id} className="bubble pt-3 pb-3 pl-4 pr-4 mb-2">
      <h5>{props.children}</h5>
    </div>
  );
}

export default Bubble;
