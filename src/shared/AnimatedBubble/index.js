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
    const fadeOutTime = 0.7;
    const fadeInTime = 0.3;
    new ScrollMagic.Scene({
      triggerElement: this.props.trigger,
      duration: 600,
    })
    .setPin(`#${this.props.id}`)
    .addTo(this.props.controller)
    .on("progress", (event) => {
      // Fade in ellipses
      let bubble = document.getElementById(this.props.id);
      if (this.props.fade) var bubbleFade = document.getElementById(this.props.fade);

      if (event.progress < fadeOutTime) {
        if (this.state.message !== "") this.setState({"message": ""})
      }

      if (event.progress < fadeInTime) {
        bubble.style.opacity = event.progress/fadeInTime
      }
      else if (event.progress > fadeOutTime) {
        bubble.style.opacity = (event.progress - fadeOutTime)/fadeInTime;
        if (bubbleFade) bubbleFade.style.opacity = (1-event.progress)/fadeInTime;

        if (this.state.message === "") {
          this.setState({"message": this.props.children});
          bubble.style.opacity = 0;
        }
      }
      else if(bubble.style.opacity !== 1){
        bubble.style.opacity = 1
        if (bubbleFade) bubbleFade.style.opacity = 1;
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
