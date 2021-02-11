import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  handleCLick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
    if (window.innerWidth < 900) {
      this.setState({
        visible: true
      })
    }
  }


  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <nav className={this.state.visible ? "navbarItems" : "navbarItems--hidden"}>
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
