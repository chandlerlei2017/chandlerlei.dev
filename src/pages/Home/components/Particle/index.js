import React from 'react';
import Particles from 'react-particles-js';
import './index.css'
import { particleParams } from "../../../../shared/data"

function Particle() {
  return <Particles className="particles" params={particleParams} />
}

export default Particle;