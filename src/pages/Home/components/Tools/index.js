import React from 'react';
import './index.css';
import ToolsSelector from './components/ToolsSelector/index'
import ToolsDisplay from './components/ToolsDisplay/index'

class ToolsView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: "",
      search: "",
    }
  }

  onSelectorClick = event => {
    if (this.state.selected === event.target.innerHTML) {
      this.setState({selected: ""});
    }
    else {
      this.setState({selected: event.target.innerHTML});
    }
  }

  render() {
    return (
      <div className="p-3 tools text-center">
        {this.state.selected}
        <h2 className="mb-5">Some tools I have used</h2>
        <ToolsSelector onSelectorClick={this.onSelectorClick}/>
        <ToolsDisplay/>

      </div>
    );
  }
}

export default ToolsView;
