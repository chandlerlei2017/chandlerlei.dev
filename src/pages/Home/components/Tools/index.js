import React from 'react';
import './index.css';
import ToolsSelector from './components/ToolsSelector/index'
import ToolsDisplay from './components/ToolsDisplay/index'

class ToolsView extends React.PureComponent {

  render() {
    return (
      <div className="p-3 tools text-center">
        <h2 className="mb-5">Some tools I have used</h2>
        {/* <ToolsSelector/> */}
        <ToolsDisplay/>

      </div>
    );
  }
}

export default ToolsView;
