import { Link } from 'react-router-dom'
import "../style/Navbar.css";
import logo from "../assets/DKGLogo.png"
import githubLogo from "../assets/github-logo.png"
import linkedInLogo from "../assets/linkedIn-logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="socialMedia-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className='social-link'>
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className='social-link'>
          <img src={linkedInLogo} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;