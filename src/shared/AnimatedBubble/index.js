import React from 'react';
import './index.css'
import Bubble from './components/Bubble/index'
import anime from 'animejs/lib/anime.es.js'
import Ellipses from '../Ellipses/index'

class AnimatedBubble extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timeline = anime.timeline({
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 300,
      direction: 'alternate',
      loop: true,
    });
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

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    if (!this.props.chidren){
      this.animate();
    }
    else {
      this.timeline.pause();
    }
  }

  render() {
    return(
      <Bubble id={this.props.id} >{this.props.children ? this.props.children : <Ellipses id={this.props.id}/>}</Bubble>
    );
  }
}

export default AnimatedBubble;
