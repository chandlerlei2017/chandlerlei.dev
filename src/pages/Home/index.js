import React from 'react';
import Particles from 'react-particles-js';
import "./index.css";

const particleParams = {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  // "interactivity": {
  //   "detect_on": "canvas",
  //   "events": {
  //     "onhover": {
  //       "enable": true,
  //       "mode": "bubble"
  //     },
  //     "resize": true
  //   },
  //   "modes": {
  //     "grab": {
  //       "distance": 400,
  //       "line_linked": {
  //         "opacity": 1
  //       }
  //     },
  //     "bubble": {
  //       "distance": 100,
  //       "size": 2,
  //       "duration": 3,
  //       "opacity": 1,
  //       "speed": 3
  //     },
  //     "repulse": {
  //       "distance": 200,
  //       "duration": 0.4
  //     },
  //     "push": {
  //       "particles_nb": 4
  //     },
  //     "remove": {
  //       "particles_nb": 2
  //     }
  //   }
  // },
  "retina_detect": true
};

class HomePage extends React.PureComponent {

  render () {
    return(
      <Particles  params={particleParams}/>
    );
  }
}

export default HomePage;
