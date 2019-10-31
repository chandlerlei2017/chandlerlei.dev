import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Avatar from "../../../../../../shared/Avatar";
import Tag from "./Tag"
import "./index.css";

function TimelineElement(props) {
  const { data } = props

  return (
    <VerticalTimelineElement
      icon={<Avatar className="responsive-image" image={data.image} />}
      date={data.date}
      className="transition-3d-hover timelineElement"
    >
      <h5>{`${data.company} - ${data.title}`}</h5>
      <div className="d-flex flex-wrap mt-3">
        {
          data.keywords && data.keywords.map(keyword => {
            return <Tag key={keyword}>{keyword}</Tag>
          })
        }
      </div>
    </VerticalTimelineElement>
  )
}

export default TimelineElement;
