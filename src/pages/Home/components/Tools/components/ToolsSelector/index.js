import React from 'react';
import './index.css';
import Icon from './Icon'
import { faCode, faDatabase, faWrench } from '@fortawesome/free-solid-svg-icons'

class ToolsSelector extends React.PureComponent {
  render() {
    return(
      <div className="d-flex justify-content-center selector">
        <Icon icon={faCode}></Icon>
        <Icon icon={faDatabase}></Icon>
        <Icon icon={faWrench}></Icon>
      </div>

    );
  }
}

export default ToolsSelector;
