import React from "react";
import { useEffect, useState } from "react";

// import components
import Skills from "../components/Skills.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import TypingText from "@/components/TypingText.jsx";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars/index.jsx";
import { AuroraText } from "@/components/ui/aurora-text";


//import styles
import "../style/TypingText.css"

// import images
import planetImg from "../assets/images/planet.png"
import profileImg from "../assets/images/profileImg.png"
import satelliteWhite from "../assets/images/satellite-white.png"
import satellitePink from "../assets/images/satellite-pink.png"


  function HomePage() {
  
    const [showIntro, setShowIntro] = useState(false);

      const [hovered, setHovered] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowIntro(true);
      }, 2000); 
      return () => clearTimeout(timeout);
    }, []);

  return (
    <div className="all-content">
      <div className="planet-container">
        <img src={planetImg} alt="Planet" className="planet" />

      </div>
      <div className="main-content">
        <Navbar />
        <div id="home" className="section">
        <ShootingStars
          className="absolute inset-0 pointer-events-none z-0"
          starColor="#f0f"
          trailColor="#f0f"
          minSpeed={15}
          maxSpeed={35}
          minDelay={800}
          maxDelay={3000}
        /> 

          {/* Content Overlay */}
          <div className="section-content relative z-10 flex flex-col items-center justify-center text-white text-center px-4">         
            <div className={`intro transition-all duration-1000 ease-out transform ${showIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="brand-2">DKG Development</p>
              <h1>Hi there! I'm <AuroraText>Louis McHugh</AuroraText></h1>
            </div>
            <span className="glow-line"></span>
            <div className="flex flex-col items-center gap-8">
              <h5>
                <span className="typing-cursor">
                  <TypingText texts={["I'm an Aspiring Front End Developer", "I Love React & Tailwind", "Let's Build Something Awesome!"]} />
                </span>
              </h5>
              <h6 className="location">📍Rotterdam, Netherlands.</h6>
              <button
                className="contact-btn"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Let's Connect<img src={hovered ? satellitePink : satelliteWhite} alt="" className="satellite-img"/>
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="section">
          <div className="section-content">
            <h3>About me...</h3>
            <div className="about-info">
              <img src={profileImg} alt="" className="profile-img"/>
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
            </div>
            <Skills />

          </div>
        </div>

        {/* Work Section */}
        <div id="work" className="section">
          <div className="section-content">
            <Projects />
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="section">
          <div className="section-content">
            <Contact />
          </div>
        </div>
        <span className="break-line">
          <span></span>
        </span>
        <footer>
          <p>© Louis McHugh 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
