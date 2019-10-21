import React from 'react';
import './index.css'
import Avatar from '../../../../shared/Avatar/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import anime from 'animejs/lib/anime.es.js'
import { Link } from 'react-scroll'

class IntroPane extends React.PureComponent {
  componentDidMount() {
    var tl = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 1000,
    });

    tl
      .add({
        targets: '.image-cropper',
        opacity: [0, 100],
      }, 200)
      .add({
        targets: '.animate',
        opacity: [0, 100],
      }, 400) // relative offset
      .add({
        targets: '.animate2',
        opacity: [0, 100],
      }, 600); // absolute offset
  }


  render() {
    return (
      <div className="mt-5" align="center" style={{ position: "relative" }}>
        <Avatar styles={{ height: "150px", width: "150px" }} />
        <h1 className="mt-5 animate">Chandler Lei - Developer</h1>
        <h2 className="mt-5 mb-5 animate2">
          <FontAwesomeIcon icon={faMusic} />
          {} Starry, starry night - Paint your palette blue and grey {}
          <FontAwesomeIcon icon={faMusic} />
        </h2>
        <Link to="tools-section" mdooth={true} duration={1500}>
          <FontAwesomeIcon icon={faAngleDown} size="4x" />
        </Link>
      </div>
    );
  }
}

export default IntroPane;
