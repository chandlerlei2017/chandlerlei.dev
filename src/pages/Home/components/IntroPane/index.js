import React from 'react';
import './index.css'
import Avatar from './components/Avatar/index'

class IntroPane extends React.PureComponent {
  render() {
    return(
      <div className="intro">
        <Avatar/>
        <h1>Chandler Lei</h1>
      </div>
    );
  }
}

export default IntroPane;
