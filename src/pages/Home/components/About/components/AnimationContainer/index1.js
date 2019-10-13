import React from 'react';
import './index.css'
import Bubble from '../../../../../../shared/AnimatedBubble/components/Bubble/index'
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
      bubble1: false,
      bubble2: false,
      bubble3: false,
    }
  }

  handleScroll(name, message) {
    this.setState({
      [name]: message
    });
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: 0,
      triggerHook: 0.7,
    })
    .setPin("#completed")
    .addTo(this.controller)

    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: 300,
      triggerHook: 0.7,
    })
    .setPin("#trigger1")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("bubble1",true);
      }
      anime({
        targets: '#trigger1',
        opacity: [100, 0],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("bubble1",false);
      }
      anime({
        targets: '#trigger1',
        opacity: [0, 100],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    });

    new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: 300,
      triggerHook: 0.7,
    })
    .setPin("#trigger2")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("bubble2",true);
      }
      anime({
        targets: '#trigger2',
        opacity: [100, 0],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("bubble2",false);
      }
      anime({
        targets: '#trigger2',
        opacity: [0, 100],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    });

    new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: 300,
      triggerHook: 0.7,
    })
    .setPin("#trigger3")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("bubble3",true);
      }
      anime({
        targets: '#trigger3',
        opacity: [100, 0],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("bubble3",false);
      }
      anime({
        targets: '#trigger3',
        opacity: [0, 100],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    });

    new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      duration: 300,
      triggerHook: 0.7,
    })
    .setPin("#trigger4")
    .addTo(this.controller)
    .on("leave", (event) => {
      anime({
        targets: '#trigger4',
        opacity: [100, 0],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    })
    .on("enter", (event) => {
      anime({
        targets: '#trigger4',
        opacity: [0, 100],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    });

    new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      duration: 300,
      triggerHook: 0.7,
    })
    .setPin("#trigger5")
    .addTo(this.controller)
    .on("leave", (event) => {
      anime({
        targets: '#trigger5',
        opacity: [100, 0],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    })
    .on("enter", (event) => {
      anime({
        targets: '#trigger5',
        opacity: [0, 100],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    });

    new ScrollMagic.Scene({
      triggerElement: "#trigger6",
      duration: 300,
      triggerHook: 0.7,
    })
    .setPin("#trigger6")
    .addTo(this.controller)
    .on("leave", (event) => {
      anime({
        targets: '#trigger6',
        opacity: [100, 0],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    })
    .on("enter", (event) => {
      anime({
        targets: '#trigger6',
        opacity: [0, 100],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    });

    new ScrollMagic.Scene({
      triggerElement: "#trigger7",
      duration: 300,
      triggerHook: 0.7,
    })
    .setPin("#trigger7")
    .addTo(this.controller)
    .on("leave", (event) => {
      anime({
        targets: '#trigger7',
        opacity: [100, 0],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    })
    .on("enter", (event) => {
      anime({
        targets: '#trigger7',
        opacity: [0, 100],
        duration: 0,
        easing: 'easeInOutExpo'
      });
    });
  }

  render() {
    return(
      <div id="animate-container">
        <div id="completed">
          <Bubble id="bubble1" hidden={!this.state.bubble1}>test1</Bubble>
          <Bubble id="bubble2" hidden={!this.state.bubble2}>test2</Bubble>
          <Bubble id="bubble3" hidden={!this.state.bubble3}>test3</Bubble>
          {/* <Bubble id="bubble4">{this.state.fourthBubble}</Bubble>
          <Bubble id="bubble5">{this.state.fifthBubble}</Bubble>
          <Bubble id="bubble6">{this.state.sixthBubble}</Bubble>
          <Bubble id="bubble7">{this.state.seventhBubble}</Bubble> */}
        </div>
        <div id="trigger1" className="empty">
          <AnimatedBubble id="bubble"/>
        </div>
        <div id="trigger2" className="empty">
          <AnimatedBubble id="bubble"/>
        </div>
        <div id="trigger3" className="empty">
          <AnimatedBubble id="bubble"/>
        </div>
        <div id="trigger4" className="empty">
          <AnimatedBubble id="bubble"/>
        </div>
        <div id="trigger5" className="empty">
          <AnimatedBubble id="bubble"/>
        </div>
        <div id="trigger6" className="empty">
          <AnimatedBubble id="bubble"/>
        </div>
        <div id="trigger7" className="empty">
          <AnimatedBubble id="bubble"/>
        </div>
      </div>
    );
  }
}


export default AnimationContainer;
