import React from 'react';
import './index.css'
import Avatar from '../../../../shared/Avatar/index'
import AnimationContainer from './components/AnimationContainer/index'


class AboutView extends React.PureComponent {

  render() {
    const styles = {
      height: "56px",
      width: "56px",
      position: "absolute",
      bottom: "0",
      right: "0",
      marginBottom: "0.5rem",
    }

    return (
      <div className="row mt-5">
        <div className="col-2 col-sm-1 offset-sm-2" align="right">
          <Avatar styles={styles} />
        </div>
        <div className="col-10 col-sm-6">
          <AnimationContainer/>
          {/* <div style={{height: "2000px"}}/> */}
        </div>
      </div>
    );
  }
}

export default AboutView;