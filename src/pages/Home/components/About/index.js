import React from 'react';
import './index.css'
import laptopImage from '../../../../images/laptop.svg'

class AboutView extends React.PureComponent {
  render() {
    return(
      <div className = "text-center pt-5">
        {/* <img className="aboutImage pl-5 pr-5" src={laptopImage} alt="Laptop"/> */}
      </div>
    );
  }
}

export default AboutView;