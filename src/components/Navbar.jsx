import { Link } from 'react-router-dom'
import "../style/Navbar.css";
import { ShineBorder } from "../components/ui/shine-border";


const Navbar = () => {
  return (
    <div className="relative  w-full overflow-hidden">
      <nav className="navbar">
        <ShineBorder shineColor={["#f0f", "#c0f", "#0ff"]}/>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;