import secretMission from "../images/secret-mission.png"
import lendingLoop from "../images/lending-loop.png"
import bmo from "../images/bmo.png"
import bdc from "../images/bdc.png"
import stem from "../images/stem.png"

export const projectData = [
  {
    image: "spotify-tracks",
    title: "Spotify Tracks",
    github: "https://github.com/chandlerlei2017/Spotify-Plays",
    url: "https://spotifytracks.com",
    description: "A web application that displays and visualizes data for spotify playing history"
  },
  {
    image: "uwsublet",
    title: "UWSublet",
    github: "https://github.com/chandlerlei2017/sublet",
    url: "",
    description: "A sublet marketplace built for easy filtering and organization of listings"
  },
  {
    image: "personal-website",
    title: "chandlerlei.dev",
    github: "https://github.com/chandlerlei2017/chandlerlei.dev",
    url: "https://chandlerlei.dev",
    description: "The website you are on right now! ( Yes... I'm counting this as a project )"
  },
  {
    image: "hardware",
    title: "Bike Safe",
    github: "",
    url: "",
    description: "An IOT embedded system that warns bikers of dangerous incoming objects"
  },
  {
    image: "1",
    title: "",
    github: "",
    url: "",
    description: ""
  },
  {
    image: "2",
    title: "",
    github: "",
    url: "",
    description: ""
  },
]

export const particleParams = {
  "particles": {
    "number": {
      "value": 100,
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
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 3,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
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
  "retina_detect": true
};

export const toolsMap = {
  "Front-end": ["React", "Redux", "React Native", "Bootstrap", "JQuery", "Anime.js", "ScrollMagic", "Chart.js", "HTML", "CSS", "JavaScript", "Apollo", "Storybook"],
  "Back-end": ["Python", "Ruby", "Java", "GraphQL", "SQL", "SOQL", "Django", "Ruby on Rails", "PostgreSQL", "MySQL", "Graphene", "Flask", "cURL"],
  "Other": ["C", "C++", "RSpec", "Jest", "unittest", "Linux", "Git", "SVN", "CircleCI", "Postman", "Salesforce", "Heroku", "Netlify", "Docker", "Vagrant", "Android NDK", "Bash", "NumPy"],
  "": []
}

export const experienceData = [
  {
    image: secretMission,
    date: "Sept 2019 - Present",
    company: "Secret Mission Software",
    title: "Software Developer Internship",
    keywords: ["Django", "Graphene", "React", "React Native", "Redux", "Apollo", "Bootstrap", "Heroku"],
    points: [
    ],
  },
  {
    image: lendingLoop,
    date: "Jan 2019 - Apr 2019",
    company: "Lending Loop",
    title: "Software Developer Internship",
    keywords: ["Ruby on Rails", "RSpec", "Bootstrap", "Salesforce", "SendGrid", "Heroku"],
    points: [
      "Increased user signup completion rate 30% by solely implementing a new signup flow (forms, models, controllers)",
      "Improved database efficiency by decreasing query times 50% for specific data queries through refactoring of model relationships and data fields",
      "Enabled automated user emailing using SendGrid, exposed through an REST API endpoint",
    ],
  },
  {
    image: bdc,
    date: "Mar 2019",
    company: "Business Development Bank of Canada",
    title: "BDC Hackathon Winner",
    keywords: ["React", "Flask", "scikit-learn", "AWS", "Android NDK"],
    points: [],
  },
  {
    image: bmo,
    date: "May 2018 - Aug 2018",
    company: "BMO Financial Group",
    title: "Infrastructure Engineer Internship",
    keywords: ["Bash", "DataPower", "Bamboo", "Ansible"],
    points: [
      "Increased the functionality of the DataPower system by creating Bash scripts for certificate uploading",

    ],
  },
  {
    image: stem,
    date: "Feb 2017",
    company: "Stem Fellowship",
    title: "Big Data Challenge Winner",
    keywords: ["NumPy", "R", "JSON"],
    points: [],
  },
]
