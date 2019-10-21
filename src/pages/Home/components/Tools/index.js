import React from 'react';
import './index.css';
import ToolsSelector from './components/ToolsSelector/index'
import ToolsDisplay from './components/ToolsDisplay/index'
import { selectedContext } from './selectedContext'

class ToolsView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selected: "Back-end",
      search: "",
    }
  }

  onSelectorClick = event => {
    if (this.state.selected === event.target.innerHTML) {
      this.setState({ selected: "" });
    }
    else {
      this.setState({ selected: event.target.innerHTML });
    }
  }

  render() {
    return (
      <div id="tools-section" className="p-3 tools text-center">
        <h2 className="mb-5">Some tools I have used</h2>
        <selectedContext.Provider value={{ selected: this.state.selected, updateSelected: this.onSelectorClick }}>
          <ToolsSelector />
          <ToolsDisplay selected={this.state.selected} />
        </selectedContext.Provider>
      </div>
    );
  }
}

export default ToolsView;
