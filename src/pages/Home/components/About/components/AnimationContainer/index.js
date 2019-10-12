import React from 'react';
import './index.css'
import AnimatedBubble from '../../../../../../shared/AnimatedBubble/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import ScrollMagic from 'scrollmagic'

class AnimationContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.controller = new ScrollMagic.Controller();
    this.handleScroll = this.handleScroll.bind(this)

    this.state= {
      firstBubble: "",
      secondBubble: "",
    }
  }

  handleScroll(name, message) {
    this.setState({
      [name]: message
    });
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#bubble1",
      duration: 400,
    })
    .setPin("#bubble1")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("firstBubble","Hi, I'm Chandler!");
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("firstBubble","");
      }
    });

    new ScrollMagic.Scene({
      triggerElement: "#bubble2",
      duration: 400,
    })
    .setPin("#bubble1")
    .setPin("#bubble2")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("secondBubble","Thanks for visiting my website!");
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("secondBubble","");
      }
    });
  }

  render() {
    return(
      <>
        <AnimatedBubble id="bubble1">{this.state.firstBubble}</AnimatedBubble>
        <AnimatedBubble id="bubble2">{this.state.secondBubble}</AnimatedBubble>
        <AnimatedBubble id="animate-2"/>
        <AnimatedBubble id="animate-2"/>
        <AnimatedBubble id="animate-2"/>
      </>
    );
  }
}

export default AnimationContainer;
