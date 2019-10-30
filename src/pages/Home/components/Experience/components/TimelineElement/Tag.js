import React from 'react';
import "./index.css"

function Tag(props) {
  return (
    <span className="tag pl-3 pr-3 pt-2 pb-2 mr-2 mb-2 card-shadow">{props.children}</span>
  );
}

export default Tag;
