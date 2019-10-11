import React from 'react';
import './index.css'
import Bubble from './components/Bubble/index'
import Avatar from '../../../../shared/Avatar/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

class AboutView extends React.PureComponent {
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
      <div className="row mt-5">
        <div className="col-sm-1 offset-sm-2" align="right">
          <Avatar styles={styles} />
        </div>
        <div className="col-sm-7">
          <Bubble>Hey, I'm Chandler! </Bubble>
          <Bubble>Thanks for visiting my website!</Bubble>
          <Bubble>I am currently in 3rd year, studying Computer Engineering at the University of Waterloo</Bubble>
          <Bubble>
            <p>Some quick facts about me:</p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} As you likely guessed, I'm named after Chandler Bing from "Friends"</p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I was born in Stockholm, Sweden</p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I eat hotdogs and fries without any toppings </p>
            <p> <FontAwesomeIcon icon={faLongArrowAltRight} />{' '} I don't think pineapples belong on pizza, sorry (not sorry)</p>
          </Bubble>
          <Bubble>
            <p>Great! Now you know a bit about me.</p>
            <p>Hopefully you don't hate me for my hawaiian pizza comment</p>
          </Bubble>
          <Bubble>
            Here's why you should hire me! (If you are an employer or recruiter)
          </Bubble>
        </div>
      </div>
    );
  }
}

export default AboutView;