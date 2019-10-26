import React from 'react';
import './index.css'
import AnimatedBubble from '../../../../../../shared/AnimatedBubble/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import ScrollMagic from 'scrollmagic'

class AnimationContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    let pin1 = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: 0,
    })
      .setPin("#trigger1")
      .addTo(this.controller);

    let pin2 = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: 0,
    })
      .setPin("#trigger2")
      .addTo(this.controller);

    let pin3 = new ScrollMagic.Scene({
      triggerElement: "#trigger4",
      duration: 0,
    })
      .setPin("#trigger3")
      .addTo(this.controller);

    let pin4 = new ScrollMagic.Scene({
      triggerElement: "#trigger5",
      duration: 0,
    })
      .setPin("#trigger4")
      .addTo(this.controller);

    let pin5 = new ScrollMagic.Scene({
      triggerElement: "#trigger6",
      duration: 0,
    })
      .setPin("#trigger5")
      .addTo(this.controller);

    let pin6 = new ScrollMagic.Scene({
      triggerElement: "#trigger7",
      duration: 0,
    })
      .setPin("#trigger6")
      .addTo(this.controller);

    let pin7 = new ScrollMagic.Scene({
      triggerElement: "#trigger8",
      duration: 0,
    })
      .setPin("#trigger7")
      .addTo(this.controller);

    new ScrollMagic.Scene({
      triggerElement: "#trigger9",
      duration: 10,
    })
      .on("leave", event => {
        if (event.scrollDirection === "REVERSE") {
          pin1.setPin("#trigger1");
          pin2.setPin("#trigger2");
          pin3.setPin("#trigger3");
          pin4.setPin("#trigger4");
          pin5.setPin("#trigger5");
          pin6.setPin("#trigger6");
          pin7.setPin("#trigger7");
        }
        else {
          pin1.removePin();
          pin2.removePin();
          pin3.removePin();
          pin4.removePin();
          pin5.removePin();
          pin6.removePin();
          pin7.removePin();
        }
      })
      .addTo(this.controller);
  }

  render() {
    return (
      <>
        <div id="trigger1">
          <AnimatedBubble id="bubble1" trigger="#trigger1" controller={this.controller}>
            Hi, I'm Chandler! 👋
          </AnimatedBubble>
        </div>
        <div id="trigger2">
          <AnimatedBubble id="bubble2" trigger="#trigger2" controller={this.controller} pin="#trigger1" fade="bubble1">
            Thanks for visiting my website!
          </AnimatedBubble>
        </div>
        <div id="trigger3">
          <AnimatedBubble id="bubble3" trigger="#trigger3" controller={this.controller} pin="#trigger2" fade="bubble2">
            I am currently in 3rd year, studying Computer Engineering at the University of Waterloo
          </AnimatedBubble>
        </div>
        <div id="trigger4">
          <AnimatedBubble id="bubble4" trigger="#trigger4" controller={this.controller} pin="#trigger3" fade="bubble3">
            <p> Some quick facts about me: </p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} As you likely guessed, I'm named after Chandler Bing from "Friends"</p>
            <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I was born in Stockholm, Sweden<span></span>
          </AnimatedBubble>
        </div>
        <div id="trigger5">
          <AnimatedBubble id="bubble5" trigger="#trigger5" controller={this.controller} pin="#trigger4" fade="bubble4">
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I eat hotdogs and fries without any toppings </p>
            <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I don't think pineapples belong on pizza, sorry (not sorry) 💁
          </AnimatedBubble>
        </div>
        <div id="trigger6">
          <AnimatedBubble id="bubble6" trigger="#trigger6" controller={this.controller} pin="#trigger5" fade="bubble5">
            Great! Now you know a bit about me.
          </AnimatedBubble>
        </div>
        <div id="trigger7">
          <AnimatedBubble id="bubble7" trigger="#trigger7" controller={this.controller} pin="#trigger6" fade="bubble6">
            And hopefully you don't hate me for my hawaiian pizza comment 😅
          </AnimatedBubble>
        </div>
        <div id="trigger8">
          <AnimatedBubble id="bubble8" trigger="#trigger8" controller={this.controller} pin="#trigger7" fade="bubble7" showImage={true}>
            Anyway, Here's a bit more about what I do...
          </AnimatedBubble>
        </div>
        <div id="trigger9" className="mb-4" />
      </>
    );
  }
}

export default AnimationContainer;
