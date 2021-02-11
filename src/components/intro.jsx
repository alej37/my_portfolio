import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Intro extends Component {
  render() {
    return (
      <div id="home" className="intro">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Welcome')
              .pauseFor(1000)
              .deleteAll(10)
            typewriter.typeString('<span style= "color: #84abe9">Web Developer</span>')
              .pauseFor(1000)
            // .deleteAll(10)
              .deleteAll(10)
            typewriter.typeString('<span style = "color: #84abe9" >Alejandro Calzadilla</span>')
              .start()
          }}
        />
      </div>
    )
  }
}

export default Intro;