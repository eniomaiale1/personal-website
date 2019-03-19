import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Social extends Component {
  render() {
    return (
      <div>
      <Iframe url="https://www.linkedin.com/in/enio-maiale-64215032/"
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

export default Social;
