import React from 'react';
import './index.css'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./components/TimelineElement"
import secretMission from "../../../../images/secret-mission.png"
import lendingLoop from "../../../../images/lending-loop.png"
import bmo from "../../../../images/bmo.png"
import bdc from "../../../../images/bdc.png"
import stem from "../../../../images/stem.png"

const data = [
  { image: secretMission, date: "Sept 2019 - Present", company: "Secret Mission Software", title: "Software Developer Internship" },
  { image: lendingLoop, date: "Jan 2019 - Apr 2019", company: "Lending Loop", title: "Software Developer Internship" },
  { image: bdc, date: "Mar 2019", company: "Business Development Bank of Canada", title: "BDC Hackathon" },
  { image: bmo, date: "May 2018 - Aug 2018", company: "BMO Financial Group", title: "Infrastructure Engineer Internship" },
  { image: stem, date: "Feb 2017", company: "Stem Fellowship", title: "Big Data Challenge" },
]

class ExperienceView extends React.PureComponent {

  render() {
    return (
      <div className="experience-section pt-5">
        <div className="text-center">
          <h2 className="mb-5">My Previous Experience</h2>
        </div>
        <VerticalTimeline>
          {
            data.map(
              element => {
                return (<TimelineElement key={element.date} data={element} />);
              }
            )
          }
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperienceView;
