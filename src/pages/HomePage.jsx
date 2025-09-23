import React from "react";
import { useEffect, useState } from "react";


import Skills from "../components/Skills.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Skills2 from "@/components/Skills2.jsx";
import TypingText from "@/components/TypingText.jsx";

import "../style/TypingText.css"

import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars/index.jsx";
import { AuroraText } from "@/components/ui/aurora-text";



  function HomePage() {
  
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowIntro(true);
      }, 1500); 
      return () => clearTimeout(timeout);
    }, []);

  return (
    <div className="main-content">
      <Navbar />
      <div id="home" className="section relative w-full h-screen bg-transparent overflow-hidden">
        {/* Shooting Stars Background */}
        <ShootingStars
          className="absolute inset-0 pointer-events-none z-0"
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1200}
          maxDelay={4200}
        />
        {/* Content Overlay */}
        <div className="section-content relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className={`intro transition-all duration-1000 ease-out transform ${showIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="brand-2">DKG Development</p>
            <h1>Hi there! I'm <AuroraText>Louis McHugh</AuroraText>.</h1>
          </div>
          <span className="glow-line"></span>
          <h5 className="mt-4">
            <span className="typing-cursor">
              <TypingText texts={["I'm an Aspiring Front End Developer", "I Love React & Tailwind", "Let's Build Something Awesome!"]} />
            </span>
          </h5>
          <h6>📍Rotterdam, Netherlands.</h6>
          <button
            className="btn mt-4"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch ⌯⌲
          </button>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="section">
        <div className="section-content">
          <h5>More about me...</h5>
          <h3>
            Meet <AuroraText>Louis</AuroraText>,
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

      {/* Work Section */}
      <div id="work" className="section">
        <div className="section-content">
          <Projects />
        </div>
      </div>

      {/* Contact Section */}
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
