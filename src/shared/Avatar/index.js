import React from 'react';
import './index.css'
import avatarImage from '../../images/avatar.jpg';

function Avatar(props) {
  return (
    <div id={props.id} className={`image-cropper card-shadow ${props.imageHidden === true ? "imageHidden" : ""}`} style={props.styles}>
      <img src={avatarImage} alt="avatar" className="profile-pic" />
    </div>
  );
}

export default Avatar;
