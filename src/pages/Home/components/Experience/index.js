import React from 'react';
import './index.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class ExperienceView extends React.PureComponent {

  render() {
    return (
      <div className="experience-section pt-5 text-center">
        <h2 className="mb-5">My Previous Experience</h2>
        <VerticalTimeline>
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
