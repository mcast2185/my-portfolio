import React from 'react';
import AOS from "aos";

import PierTwo from "../../static/assets/images/abstract.jpg";
import GPR from "../../static/assets/images/thumbnailGpr.png";
import Capstone from "../../static/assets/images/thumbnailCap.png";
import Chat from "../../static/assets/images/thumbnailChat.png";
import X from "../../static/assets/images/notWorking.png";

import "aos/dist/aos.css";


const Projects = () => {
  return (
    <React.StrictMode>
      <div className='projects-container /projects'>
        <div className='projects-body'>
          <h2 data-aos="fade-up" > Projects </h2>
            <img className='image-pier' src={PierTwo}/>
          <div className='projects-link-section'>
            <div className='project-link-wrapper'>
              <img className='image-gpr' src={GPR}/>
              <h3><a href="https://gprconstruction.netlify.app/">GPR website</a></h3>
              <br/>
              <a className='git' href="https://github.com/mcast2185/GPR-Construction">/Git</a>
            </div>
            <div className='project-link-wrapper'>
              <img className='image-capstone' src={Capstone}/>
              <h3><a href="https://capstonefrontendpage.herokuapp.com/">Capstone blog website</a></h3>
              <br/>
              <a className='git' href="https://github.com/mcast2185/CapStone-Project/tree/main">/Git</a>
            </div>
            <div className='project-link-wrapper'>
              <img className='image-x' src={X}/>
              <h3><a href="/">Bottega website</a></h3>
              <br/>
            </div>
            <div className='project-link-wrapper'>
              <img className='image-chat' src={Chat}/>
              <h3><a href="https://myopenchat.netlify.app/">Chat app</a></h3>
              <br/>
              <a className='git' href="https://github.com/mcast2185/openChat">/Git</a>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
};

export default Projects;