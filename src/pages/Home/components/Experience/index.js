import React from 'react';
import './index.css'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./components/TimelineElement"
import { experienceData } from "../../../../shared/data"

function ExperienceView() {
  return (
    <div className="experience-section pt-5">
      <div className="text-center">
        <h2 className="mb-5">My Previous Experience</h2>
      </div>
      <VerticalTimeline>
        {
          experienceData.map(
            element => {
              return (<TimelineElement key={element.date} data={element} />);
            }
          )
        }
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceView;
