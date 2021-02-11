import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class Intro extends Component {
  render() {
    return (
      <div id="home" className="intro">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello!')
              .pauseFor(1000)
              .deleteAll(10)
            typewriter.typeString('I am a <span style= "color: #84abe9">Web Developer</span> <br>')
              .pauseFor(1000)
            // .deleteAll(10)
            typewriter.typeString(' and a <span style= "color: #84abe9">Freelance Cellist</span>')
              .pauseFor(1000)
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