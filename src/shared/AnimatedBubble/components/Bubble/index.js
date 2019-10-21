import React from 'react';
import './index.css'
import Avatar from '../../../../shared/Avatar/index'
import Ellipses from '../../../Ellipses/index'
import anime from 'animejs/lib/anime.es.js'

class Bubble extends React.PureComponent{
  constructor(props) {
    super(props);

    this.timeline = anime.timeline({
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 300,
      direction: 'alternate',
      loop: true,
    });
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    this.animate();
  }

  animate() {
    this.timeline
    .add({
      targets: `#${this.props.id}-1`,
      // opacity: [0, 100],
      translateY: -10
    }, 100)
    .add({
      targets: `#${this.props.id}-2`,
      // opacity: [0, 100],
      translateY: -10
    }, 200) // relative offset
    .add({
      targets: `#${this.props.id}-3`,
      // opacity: [0, 100],
      translateY: -10
    }, 300); // absolute offset
  }

  render () {
    const styles = {
      height: "56px",
      width: "56px",
      position: "absolute",
      right: 0,
    }

    return (
      <div id={this.props.id} className="hidden row">
        <div className="col-3 col-md-1 offset-md-2">
          <Avatar id="avatar" styles={styles} imageHidden={this.props.showImage !== true && this.props.children !== ""}/>
        </div>
        <div className="col-9 col-md-7">
          <div className="bubble pt-3 pb-3 pl-4 pr-4 mb-2 card-shadow">
            <h5>{this.props.children === "" ? <Ellipses id={this.props.id}/> : this.props.children}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Bubble;
