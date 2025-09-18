import React from "react";
import Skills from "../components/Skills.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx"

function HomePage() {
  return (
    <div className="main-content">
      <Navbar />
      <div id="home" className="section">
        <div className="section-content">
          <p className="brand-2">DKG Development</p>
          <h1>
            Transforming Ideas into{" "}
            <span className="brand">Responsive Web Experiences</span>
          </h1>
          <span className="glow-line"></span>
          <h5 className="quick-intro">
            Hi! I'm <span className="name">Louis McHugh</span>, an aspiring Front End
            Developer based in the Netherlands with a passion for code.
          </h5>
          <button
            className="btn"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch ⌯⌲
          </button>
        </div>
      </div>

      <div id="about" className="section">
        <div className="section-content">
          <h5>More about me...</h5>
          <h3>
            Meet <span className="name">Louis</span>,
          </h3>
          <p>
            I’m a passionate and detail-oriented web developer with a focus on
            creating responsive, user-friendly digital experiences. My journey
            into tech started with curiosity and quickly grew into a love for
            building functional and visually appealing websites. With a
            background that combines creativity and problem-solving, I enjoy
            turning complex ideas into seamless solutions. Outside of coding, I’m
            constantly exploring new tools and technologies to grow my skills and
            stay ahead in this ever-evolving field.
          </p>
          <Skills />
        </div>
      </div>

      <div id="work" className="section">
        <div className="section-content">
          <Projects />
        </div>
      </div>

      <div id="contact" className="section">
        <div className="section-content">
          <h1>Contact Section</h1>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
