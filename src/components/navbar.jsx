import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleCLick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   this.setState({
  //     scrollPos: document.body.getBoundingClientRect().top,
  //     show: document.body.getBoundingClientRect().top > this.state.scrollPos
  //   });
  //   if (window.innerWidth < 960) {
  //     this.setState({
  //       show: true
  //     })
  //   }
  // }




  render() {
    return (
      <nav className="navbarItems" >
        <div className="menu-icon" onClick={this.handleCLick}>
          {this.state.clicked ? <FaTimes className="MobileIcon" /> : <FaBars className="MobileIcon" />}
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <Link
            className="nav-links"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Home
          </Link>
          <Link
            className="nav-links"
            activeClass="active"
            to="tech"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Tech Stack
          </Link>
          <Link
            className="nav-links"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            About
          </Link>
          <Link
            className="nav-links"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Projects
          </Link>
          <Link
            className="nav-links"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={20}
            duration={500}
            delay={0}
            // isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Contact
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
