import React from 'react';
import './index.css'
import Avatar from '../../../../shared/Avatar/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import anime from 'animejs/lib/anime.es.js'
import { Link } from 'react-scroll'

class IntroPane extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timeline = anime.timeline({
      easing: 'easeInOutExpo',
      duration: 1000,
      autoplay: false,
    });
  }

  componentDidMount() {
    this.timeline
      .add({
        targets: '.image-cropper',
        opacity: [0, 100],
      }, 200)
      .add({
        targets: '.animate',
        opacity: [0, 100],
      }, 400)
      .add({
        targets: '.animate2',
        opacity: [0, 100],
      }, 600);

    anime({
      targets: '.music-icon-1',
      rotate: [15, -15],
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 400,
      delay: 100,
    });

    anime({
      targets: '.music-icon-2',
      rotate: [-15, 15],
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 400,
      delay: 100,
    });

    anime({
      targets: '.arrow-icon',
      translateY: 25,
      direction: 'alternate',
      loop: true,
      easing: 'cubicBezier(.5, .05, .1, .3)',
      duration: 600,
      delay: 200,
    })
  }

  render() {
    return (
      <div className="intro-pane">
        <div className="intro-content text-center">
          <Avatar onLoad={() => this.timeline.play} styles={{ height: "150px", width: "150px" }} />
          <h1 className="mt-5 animate">Chandler Lei - Developer</h1>
          <h2 className="mt-5 mb-5 animate2">
            <FontAwesomeIcon className="music-icon-1" icon={faMusic} />
            {} Starry, starry night - Paint your palette blue and grey {}
            <FontAwesomeIcon className="music-icon-2" icon={faMusic} />
          </h2>
          <Link to="tools-section" smooth={true} duration={1500}>
            <FontAwesomeIcon className="arrow-icon" icon={faAngleDown} size="4x" />
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroPane;
