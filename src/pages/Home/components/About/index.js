import React from 'react';
import './index.css'
import Bubble from './components/Bubble/index'
import Avatar from '../../../../shared/Avatar/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import ScrollMagic from 'scrollmagic'
import anime from 'animejs/lib/anime.es.js'
import Ellipses from '../../../../shared/Ellipses/index'


class AboutView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
    this.state = {
      firstBubble: <Ellipses/>
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.addAnimation = this.addAnimation.bind(this)
    this.timeline = anime.timeline({
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 300,
      direction: 'alternate',
      loop: true,
    });
  }

  handleScroll(name, message) {
    this.setState({
      [name]: message
    });
  }
  addAnimation() {
    this.timeline
    .add({
      targets: '#circle-1',
      // opacity: [0, 100],
      translateY: -10
    }, 100)
    .add({
      targets: '#circle-2',
      // opacity: [0, 100],
      translateY: -10
    }, 200) // relative offset
    .add({
      targets: '#circle-3',
      // opacity: [0, 100],
      translateY: -10
    }, 300); // absolute offset
  }

  componentDidMount() {
    this.addAnimation();
    new ScrollMagic.Scene({
      triggerElement: "#animate-1",
      duration: 400,
    })
    .setPin("#animate-1")
    .addTo(this.controller)
    .on("leave", (event) => {
      if (event.scrollDirection === "FORWARD") {
        this.handleScroll("firstBubble","Hi, I'm Chandler!");
      }
    })
    .on("enter", (event) => {
      if (event.scrollDirection === "REVERSE") {
        this.handleScroll("firstBubble",<Ellipses/>);
        this.addAnimation();
      }
    });


  }

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
      <>
      <div id="animate-0"></div>
      <div className="row mt-5">
        <div className="col-2 col-sm-1 offset-sm-2" align="right">
          <Avatar styles={styles} />
        </div>
        <div className="col-10 col-sm-6">
          <Bubble id="animate-1">{this.state.firstBubble}</Bubble>
          <Bubble>Thanks for visiting my website!</Bubble>
          <Bubble>I am currently in 3rd year, studying Computer Engineering at the University of Waterloo</Bubble>
          <Bubble>
            <p>Some quick facts about me:</p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} As you likely guessed, I'm named after Chandler Bing from "Friends"</p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I was born in Stockholm, Sweden</p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I eat hotdogs and fries without any toppings </p>
            <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I don't think pineapples belong on pizza, sorry (not sorry)
          </Bubble>
          <Bubble>
            Great! Now you know a bit about me.
          </Bubble>
          <Bubble>And hopefully you don't hate me for my hawaiian pizza comment 😅 </Bubble>
          <Bubble>Anyway, Here's a bit more about what I do...</Bubble>
        </div>
      </div>
      </>
    );
  }
}

export default AboutView;