import React from 'react';
import './index.css'
import Avatar from '../../../../shared/Avatar/index'
import Ellipses from '../../../Ellipses/index'

function Bubble(props) {
  const styles = {
    height: "56px",
    width: "56px",
    position: "relative",
  }

  return (
    <div id={props.id} className="hidden row">
      <div className="col-3 col-sm-1 offset-sm-2">
        <Avatar id="avatar" styles={styles} imageHidden={props.showImage !== true && props.children !== ""}/>
      </div>
      <div className="col-9 col-sm-7">
        <div className="bubble pt-3 pb-3 pl-4 pr-4 mb-2">
          <h5>{props.children === "" ? <Ellipses/> : props.children}</h5>
        </div>
      </div>
    </div>
  );
}

export default Bubble;
