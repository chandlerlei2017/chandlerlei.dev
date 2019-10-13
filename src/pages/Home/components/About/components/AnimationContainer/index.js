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
  }

  render() {
    return(
      <>
      <div id="trigger1">
        <AnimatedBubble id="bubble1" trigger="#trigger1" controller={this.controller}>
          Hi, I'm Chandler!
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
          <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I was born in Stockholm, Sweden</p>
          <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I eat hotdogs and fries without any toppings </p>
          <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I don't think pineapples belong on pizza, sorry (not sorry)
        </AnimatedBubble>
      </div>
      <div id="trigger5">
        <AnimatedBubble id="bubble5" trigger="#trigger5" controller={this.controller} pin="#trigger4" fade="bubble4">
          Great! Now you know a bit about me.
        </AnimatedBubble>
      </div>
      <div id="trigger6">
        <AnimatedBubble id="bubble6" trigger="#trigger6" controller={this.controller} pin="#trigger5" fade="bubble5">
          And hopefully you don't hate me for my hawaiian pizza comment 😅
        </AnimatedBubble>
      </div>
      <div id="trigger7">
        <AnimatedBubble id="bubble7" trigger="#trigger7" controller={this.controller} pin="#trigger6" fade="bubble6" showImage={true}>
          Anyway, Here's a bit more about what I do...
        </AnimatedBubble>
      </div>
      <div style={{height: "1000px"}}/>
      </>
    );
  }
}

export default AnimationContainer;
