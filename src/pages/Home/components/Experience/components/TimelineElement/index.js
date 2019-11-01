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
      <h5 className="mb-3">{`${data.company} - ${data.title}`}</h5>
      <div className="row">
        {
          data.points && data.points.map(point => {
            return (
              <>
                <div className="col-1 text-right pr-0">⚫</div>
                <div className="col-11"><p className="mt-0 mb-3">{point}</p></div>
              </>
            );
          })
        }
      </div>
      <div className="d-flex flex-wrap">
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
