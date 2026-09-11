import React from "react";
import "../style/Contact.css";

import githubLogo from "../assets/contact-icons/github-logo.png";
import linkedInLogo from "../assets/contact-icons/LinkedIn-logo.png";
import facebookLogo from "../assets/contact-icons/facebook.png";
import instagramLogo from "../assets/contact-icons/instagram.png";
import whatsappLogo from "../assets/contact-icons/whatsapp.png";

const EMAIL = "dkgwebdevelopment@gmail.com";
const PHONE_DISPLAY = "+31 6 18 93 29 65";
const PHONE_TEL = "+31618932965";

function Contact() {
  return (
    <div className="contact-section" data-drift="0.04">
      <h2 className="contact-heading">Get in touch</h2>
      <p className="contact-subtext">
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="contact-row">
        <div className="contact-links-col">
          <a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a>
          <span className="contact-phone">{PHONE_DISPLAY}</span>
        </div>

        <div className="contact-icons">
          <a
            href="https://github.com/LMcHugh01"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-btn"
          >
            <img src={githubLogo} alt="GitHub" />
          </a>

          <a
            href="https://linkedin.com/in/louis-mchugh-270984261"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-btn"
          >
            <img src={linkedInLogo} alt="LinkedIn" />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-btn"
          >
            <img src={facebookLogo} alt="Facebook" />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-btn"
          >
            <img src={instagramLogo} alt="Instagram" />
          </a>

          <a
            href="https://wa.me/31618932965"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-btn"
          >
            <img src={whatsappLogo} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;