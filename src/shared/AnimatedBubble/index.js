import React from 'react';
import './index.css'
import Bubble from './components/Bubble/index'
import anime from 'animejs/lib/anime.es.js'
import ScrollMagic from 'scrollmagic'

class AnimatedBubble extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(name, message) {
    this.setState({
      [name]: message
    });
  }

  componentDidMount() {
    // this.animate();

    new ScrollMagic.Scene({
      triggerElement: this.props.trigger,
      duration: 500,
    })
    .setPin(`#${this.props.id}`)
    .addTo(this.props.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("message",this.props.children);
        if (this.props.fade) {
          anime({
            targets: this.props.fade,
            opacity: [100, 0],
            duration: 0,
            easing: 'easeInOutExpo'
          });
        }
      }
      else {
        anime({
          targets: `#${this.props.id}`,
          opacity: [100, 0],
          duration: 0,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("message","");
        if (this.props.fade) {
          anime({
            targets: this.props.fade,
            opacity: [0, 100],
            duration: 0,
            easing: 'easeInOutExpo'
          });
        }
      }
      else {
        anime({
          targets: `#${this.props.id}`,
          opacity: [0, 100],
          duration: 0,
          easing: 'easeInOutExpo'
        });
      }
    });

    if(this.props.pin) {
      new ScrollMagic.Scene({
        triggerElement: this.props.trigger,
        duration: 0,
      })
      .setPin(this.props.pin)
      .addTo(this.props.controller);
    }
  }

  render() {
    return(
      <Bubble id={this.props.id} showImage={this.props.showImage}>{this.state.message}</Bubble>
    );
  }
}

export default AnimatedBubble;
