import React from "react";
import "../style/Contact.css";

import githubLogo from "../assets/contact-icons/github-logo.png";
import linkedInLogo from "../assets/contact-icons/LinkedIn-logo.png";

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
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
      </div>
    </div>
  );
}

export default Contact;
