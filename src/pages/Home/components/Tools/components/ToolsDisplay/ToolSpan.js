import React from 'react';
import './index.css';
import { selectedContext } from '../../selectedContext'

const mapDisplay = {
  "Front-end": ["React", "Redux", "React Native", "Bootstrap", "JQuery", "Anime.js", "ScrollMagic", "Chart.js", "HTML", "CSS", "JavaScript", "Apollo"],
  "Back-end": ["Python", "Ruby", "Java", "GraphQL", "SQL", "SOQL", "Django", "Ruby on Rails", "PostgreSQL", "MySQL", "Graphene"],
  "Other": ["C", "C++", "RSpec", "Jest", "unittest", "Linux", "Git", "SVN", "CircleCI", "Postman", "Salesforce", "Heroku", "Netlify", "Docker", "Vagrant"],
  "": []
}

function ToolSpan(props) {
  return (
    <selectedContext.Consumer>
      {({ selected }) => (
        <span className={`ml-4 mr-4 mb-3 tool-span ${!selected || mapDisplay[selected].includes(props.children) ? "" : "faint"}`}>{props.children}</span>
      )}
    </selectedContext.Consumer>
  );
}

export default ToolSpan;
