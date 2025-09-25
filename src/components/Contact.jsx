import React from "react";
import "../style/Contact.css";

import githubLogo from "../assets/contact-icons/github-logo.png";
import linkedInLogo from "../assets/contact-icons/LinkedIn-logo.png";
import facebookLogo from "../assets/contact-icons/facebook.png";
import instagramLogo from "../assets/contact-icons/instagram.png";
import whatsappLogo from "../assets/contact-icons/whatsapp.png";

import mountains from "../assets/images/mountains.png"

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <img src={ mountains} alt="" />
      <p className="contact-subtext">
        Feel free to reach out through any of the platforms below!
      </p>

      <div className="contact-icons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={githubLogo} alt="GitHub" className="contact-icon" />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={linkedInLogo} alt="LinkedIn" className="contact-icon" />
        </a>
        <a
          href="https://facebook.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={facebookLogo} alt="Facebook" className="contact-icon" />
        </a>
        <a
          href="https://instagram.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={instagramLogo} alt="Instagram" className="contact-icon" />
        </a>
        <a
          href="https://wahtsapp.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img src={whatsappLogo} alt="WhatsApp" className="contact-icon" />
        </a>
      </div>

      <div className="contact-reg-links">
        <p>Gmail: <a href="">dkgwebdevelopment@gmail.com</a></p>
        <p>Phone Number: <a href="">+31 6 18 93 29 65</a></p>
      </div>
    </div>
  );
}

export default Contact;
