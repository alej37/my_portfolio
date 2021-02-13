import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <div className="project-cards">
          <Slide left big>
            <div className="image">
              <img className='image__img' src="https://source.unsplash.com/p0QUpDUX8X8" alt="stuud" />
              <a href=" https://www.stuud.app/" target="blank">
                <div className="image__overlay image__overlay--blur">
                  <div className="image__title"><a href="https://www.stuud.app/" target="blank">Stuud</a></div>
                  <p className="image__description">A web agenda for freelancers!</p>
                </div>
              </a>
            </div>
          </Slide>
          <Slide right big>
            <div className="image">
              <img className='image__img' src="https://source.unsplash.com/Jvqia3_ljfY" alt="dawg" />
              <a href="https://dawg-lewagon.herokuapp.com/" target="blank">
                <div className="image__overlay image__overlay--blur">
                  <div className="image__title"><a href="https://dawg-lewagon.herokuapp.com/" target="blank">Dawg</a></div>
                  <p className="image__description">Comedic dog rental marketplace</p>
                </div>
              </a>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default Projects;
