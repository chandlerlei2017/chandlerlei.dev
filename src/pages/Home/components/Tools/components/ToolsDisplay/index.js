import React from 'react';
import './index.css';
import ToolSpan from './ToolSpan'

class ToolsDisplay extends React.PureComponent {
  render() {
    return(
      <div className="row">
        <div className="col-12 offset-sm-1 col-sm-8 offset-sm-2 d-flex flex-wrap">
          <ToolSpan>Python</ToolSpan>
          <ToolSpan>JavaScript</ToolSpan>
          <ToolSpan>Ruby</ToolSpan>
          <ToolSpan>C</ToolSpan>
          <ToolSpan>C++</ToolSpan>
          <ToolSpan>Java</ToolSpan>
          <ToolSpan>GraphQL</ToolSpan>
          <ToolSpan>SQL</ToolSpan>
          <ToolSpan>SOQL</ToolSpan>
          <ToolSpan>HTML</ToolSpan>
          <ToolSpan>CSS</ToolSpan>

          <ToolSpan>React</ToolSpan>
          <ToolSpan>Redux</ToolSpan>
          <ToolSpan>React Native</ToolSpan>
          <ToolSpan>Django</ToolSpan>
          <ToolSpan>Bootstrap</ToolSpan>
          <ToolSpan>Ruby on Rails</ToolSpan>
          <ToolSpan>JQuery</ToolSpan>

          <ToolSpan>RSpec</ToolSpan>
          <ToolSpan>Jest</ToolSpan>
          <ToolSpan>unittest</ToolSpan>

          <ToolSpan>Anime.js</ToolSpan>
          <ToolSpan>ScrollMagic</ToolSpan>
          <ToolSpan>Chart.js</ToolSpan>

          <ToolSpan>Google Places API</ToolSpan>
          <ToolSpan>Spotify Web API</ToolSpan>
          <ToolSpan>Google Gmail API</ToolSpan>

          <ToolSpan>PostgreSQL</ToolSpan>
          <ToolSpan>MySQL</ToolSpan>
          <ToolSpan>Graphene</ToolSpan>
          <ToolSpan>Apollo</ToolSpan>

          <ToolSpan>Linux</ToolSpan>
          <ToolSpan>Git</ToolSpan>
          <ToolSpan>SVN</ToolSpan>
          <ToolSpan>CircleCI</ToolSpan>
          <ToolSpan>Postman</ToolSpan>

          <ToolSpan>Salesforce</ToolSpan>
          <ToolSpan>Heroku</ToolSpan>
          <ToolSpan>Netlify</ToolSpan>
        </div>
      </div>
    )
  }
}

export default ToolsDisplay;
