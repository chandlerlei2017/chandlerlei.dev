import React from 'react';
import './index.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Avatar from "../../../../shared/Avatar";
import secretMission from "../../../../images/secret-mission.png"
import lendingLoop from "../../../../images/lending-loop.png"
import bmo from "../../../../images/bmo.png"

class ExperienceView extends React.PureComponent {

  render() {
    // const styles = {
    //   height: "60px",
    //   width: "60px",
    //   position: "absolute",
    //   right: 0,
    // }

    return (
      <div className="experience-section pt-5 text-center">
        <h2 className="mb-5">My Previous Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={secretMission} />}
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={lendingLoop} />}
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<Avatar className="responsive-image" image={bmo} />}
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
          >
            test
          </VerticalTimelineElement>
          <VerticalTimelineElement
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperienceView;
