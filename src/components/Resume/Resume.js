import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div>
      <Iframe url="/images/Resume.pdf"
        width="94vw"
        height="100vh"
        id="myResume"
        className="resume-iframe"
        display="initial"
        position="relative"
        allowFullScreen/>
      </div>
    );
  }
}

export default Resume;
