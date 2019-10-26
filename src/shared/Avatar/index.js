import React from 'react';
import './index.css'
import avatarImage from '../../images/avatar.jpg';

function Avatar(props) {
  return (
    <div id={props.id} className={`image-cropper${props.imageHidden === true ? " imageHidden" : ""}${props.className ? " " + props.className : ""}`} style={props.styles}>
      <img src={props.image ? props.image : avatarImage} alt="avatar" className="profile-pic" />
    </div>
  );
}

export default Avatar;
