import React from 'react';
import './index.css'
import ToolsSelector from './components/ToolsSelector/index'

class ToolsView extends React.PureComponent {

  render() {
    return (
      <div className="p-3 tools">
        <h3>Tools Section</h3>
        <ToolsSelector/>
      </div>
    );
  }
}

export default ToolsView;
