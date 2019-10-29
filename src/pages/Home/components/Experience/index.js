import React from 'react';
import './index.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Avatar from "../../../../shared/Avatar";
import secretMission from "../../../../images/secret-mission.png"
import lendingLoop from "../../../../images/lending-loop.png"
import bmo from "../../../../images/bmo.png"
import bdc from "../../../../images/bdc.png"
import stem from "../../../../images/stem.png"

class ExperienceView extends React.PureComponent {

  render() {
    return (
      <div className="experience-section pt-5">
        <div className="text-center">
          <h2 className="mb-5">My Previous Experience</h2>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={secretMission} />}
            date="Sept 2019 - Present"
            className="transition-3d-hover"
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={lendingLoop} />}
            date="Jan 2019 - Apr 2019"
            className="transition-3d-hover"
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={bdc} />}
            date="Mar 2019"
            className="transition-3d-hover"
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={bmo} />}
            date="May 2018 - Aug 2018"
            className="transition-3d-hover"
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={stem} />}
            date="Feb 2017"
            className="transition-3d-hover"
          >
            test
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperienceView;
