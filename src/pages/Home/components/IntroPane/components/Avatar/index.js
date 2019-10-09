import React from 'react';
import './index.css'
import avatarImage from '../../../../../../images/avatar.jpg';

function Avatar() {
  return(
    <div className="image-cropper">
      <img src={avatarImage} alt="avatar" class="profile-pic"/>
    </div>
  );
}

export default Avatar;
