import React from 'react';
import './index.css'
import AnimatedBubble from '../../../../../../shared/AnimatedBubble/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import ScrollMagic from 'scrollmagic'
import anime from 'animejs/lib/anime.es';

class AnimationContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.controller = new ScrollMagic.Controller();
    this.handleScroll = this.handleScroll.bind(this)

    this.state= {
      firstBubble: "",
      secondBubble: "",
      thirdBubble: "",
      fourthBubble: "",
      fifthBubble: "",
      sixthBubble: "",
      seventhBubble: "",
    }
  }

  handleScroll(name, message) {
    this.setState({
      [name]: message
    });
  }

  componentDidMount() {
    // Bubble1

    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: 300,

    })
    .setPin("#bubble1")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("firstBubble","Hi, I'm Chandler!");
      }
      else {
        anime({
          targets: '#bubble1',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("firstBubble","");
      }
      else {
        anime({
          targets: '#bubble1',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    // Bubble2

    new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: 300,

    })
    .setPin("#bubble2")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("secondBubble","Thanks for visiting my website!");
        anime({
          targets: '#bubble1',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble2',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("secondBubble","");
        anime({
          targets: '#bubble1',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble2',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    let pin1 = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: 0,
    })
    .setPin("#trigger1")
    .addTo(this.controller);

    // Bubble3

    new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: 300,

    })
    .setPin("#bubble3")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("thirdBubble","I am currently in 3rd year, studying Computer Engineering at the University of Waterloo");
        anime({
          targets: '#bubble2',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble3',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("thirdBubble","");
        anime({
          targets: '#bubble2',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble3',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    let pin2 = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: 0,
    })
    .setPin("#trigger2")
    .addTo(this.controller);

    // Bubble4

    new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      duration: 300,
    })
    .setPin("#bubble4")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("fourthBubble",
        <>
          <p>Some quick facts about me:</p>
          <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} As you likely guessed, I'm named after Chandler Bing from "Friends"</p>
          <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I was born in Stockholm, Sweden</p>
          <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I eat hotdogs and fries without any toppings </p>
          <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I don't think pineapples belong on pizza, sorry (not sorry))
        </>);
        anime({
          targets: '#bubble3',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble4',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("fourthBubble","");
        anime({
          targets: '#bubble3',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble4',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    let pin3 = new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      duration: 0,
    })
    .setPin("#trigger3")
    .addTo(this.controller);

    // Bubble5

    new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      duration: 300,

    })
    .setPin("#bubble5")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("fifthBubble","Great! Now you know a bit about me.");
        anime({
          targets: '#bubble4',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble5',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("fifthBubble","");
        anime({
          targets: '#bubble4',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble5',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    let pin4 = new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      duration: 0,
    })
    .setPin("#trigger4")
    .addTo(this.controller);

    // Bubble6

    new ScrollMagic.Scene({
      triggerElement: "#trigger6",
      duration: 300,

    })
    .setPin("#bubble6")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("sixthBubble","And hopefully you don't hate me for my hawaiian pizza comment 😅");
        anime({
          targets: '#bubble5',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble6',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("sixthBubble","");
        anime({
          targets: '#bubble5',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble6',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    let pin5 = new ScrollMagic.Scene({
      triggerElement: "#trigger6",
      duration: 0,
    })
    .setPin("#trigger5")
    .addTo(this.controller);

    // Bubble7

    new ScrollMagic.Scene({
      triggerElement: "#trigger7",
      duration: 300,

    })
    .setPin("#bubble7")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("seventhBubble","Anyway, Here's a bit more about what I do...");
        anime({
          targets: '#bubble6',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble7',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("seventhBubble","");
        anime({
          targets: '#bubble6',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
      else {
        anime({
          targets: '#bubble7',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    let pin6 = new ScrollMagic.Scene({
      triggerElement: "#trigger7",
      duration: 0,
    })
    .setPin("#trigger6")
    .addTo(this.controller);

    // End Animation

    new ScrollMagic.Scene({
      triggerElement: "#trigger8",
      duration: 300,
    })
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        anime({
          targets: '#animate-container',
          opacity: [100, 0],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        anime({
          targets: '#animate-container',
          opacity: [0, 100],
          duration: 100,
          easing: 'easeInOutExpo'
        });
      }
    });

    let pin7 = new ScrollMagic.Scene({
      triggerElement: "#trigger8",
      duration: 0,
    })
    .setPin("#trigger7")
    .addTo(this.controller);
  }

  render() {
    return(
      <div id="animate-container">
        <div id="trigger1">
          <AnimatedBubble id="bubble1">{this.state.firstBubble}</AnimatedBubble>
        </div>
        <div id="trigger2">
          <AnimatedBubble id="bubble2">{this.state.secondBubble}</AnimatedBubble>
        </div>
        <div id="trigger3">
          <AnimatedBubble id="bubble3">{this.state.thirdBubble}</AnimatedBubble>
        </div>
        <div id="trigger4">
          <AnimatedBubble id="bubble4">{this.state.fourthBubble}</AnimatedBubble>
        </div>
        <div id="trigger5">
          <AnimatedBubble id="bubble5">{this.state.fifthBubble}</AnimatedBubble>
        </div>
        <div id="trigger6">
          <AnimatedBubble id="bubble6">{this.state.sixthBubble}</AnimatedBubble>
        </div>
        <div id="trigger7">
          <AnimatedBubble id="bubble7">{this.state.seventhBubble}</AnimatedBubble>
        </div>
        <div id="trigger8"></div>
      </div>
    );
  }
}

export default AnimationContainer;
