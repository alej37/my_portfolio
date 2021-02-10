import React, { Component } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from 'emailjs-com';


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
  }
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jm7r9di', 'template_27izlai', e.target, 'user_6UNY0TL4EAxQRD7ErWx6G')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
  }


  render() {
    return (
      <div id="contact" className="contact">
        <h1>Contact</h1>
        <div className="contact-box">
          <div className="contact-text">
            <ul>
              <li><a href="https://github.com/alej37" target="blank"><FaGithub size="3em" style={{ color: 'white' }} /></a>github.com/alej37</li>
              <li><a href="https://www.linkedin.com/in/alejandro-calzadilla-1437b152/" target="blank"><FaLinkedin size="3em" style={{ color: 'white' }} /></a>linkedin.com/in/alejandro-calzadilla-1437b152</li>
              <li><HiOutlineMail size="3em" />alejandrocalzadilla@gmail.com</li>
            </ul>
          </div>
          <div className="form">
            <form action="" onSubmit={this.sendEmail}>
              <input
                type="text"
                name="firstName"
                placeholder='First name'
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder='Last name'
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange}
              />
              <textarea
                name="message"
                id="" cols="30" rows="8"
                placeholder='Message'
                value={this.state.message}
                onChange={this.handleChange} >
              </textarea>
              <button className="btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
        <p>This website was built with React <img src="https://cdn.svgporn.com/logos/react.svg" alt="React Icon" /> </p>

      </div>
    )
  }
}

export default Contact;