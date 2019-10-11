import React from 'react';
import './index.css'
import avatarImage from '../../images/avatar.jpg';

function Avatar(props) {
  return (
    <div className="image-cropper" style={props.styles}>
      <img src={avatarImage} alt="avatar" className="profile-pic" />
    </div>
  );
}

export default Avatar;
