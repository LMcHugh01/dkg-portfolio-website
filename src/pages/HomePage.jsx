import React, { useEffect, useState } from "react";

// import components
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Skills from "../components/Skills.jsx";
import DescentBackground from "../components/DescentBackground.jsx";
import Constellation from "../components/Constellation.jsx";
import TypingText from "@/components/TypingText.jsx";
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars/index.jsx";
import { AuroraText } from "@/components/ui/aurora-text";
import { useDescentEngine } from "../hooks/useDescentEngine.js";

//import styles
import "../style/TypingText.css"
import "../style/home.css"

// import images
import planetImg from "../assets/images/planet.png"
import satelliteWhite from "../assets/images/satellite-white.png"
import satellitePink from "../assets/images/satellite-pink.png"


  function HomePage() {

    const [showIntro, setShowIntro] = useState(false);

      const [hovered, setHovered] = useState(false);

    const rootRef = useDescentEngine();

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowIntro(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }, []);

  return (
    <div className="descent-root" ref={rootRef}>
      <DescentBackground />

      <div className="descent-progress">
        <span data-progress-label className="descent-progress-label">00%</span>
        <div className="descent-progress-track">
          <div data-progress-fill className="descent-progress-fill"></div>
        </div>
      </div>

      <div data-layer="planet" className="descent-planet-band">
        <div className="descent-planet-glow"></div>
        <div className="descent-planet-disc">
          <img src={planetImg} alt="Planet" />
        </div>
      </div>

      <div className="descent-content">
        <Navbar />

        {/* 1. Hero — deep space */}
        <div id="home" className="descent-hero">
          <ShootingStars
            className="absolute inset-0 pointer-events-none z-0"
            starColor="#f0f"
            trailColor="#f0f"
            minSpeed={15}
            maxSpeed={35}
            minDelay={800}
            maxDelay={3000}
          />

          <div data-drift="0.045" className="descent-hero-content flex flex-col items-center justify-center text-white text-center px-4">
            <div className={`intro transition-all duration-1000 ease-out transform ${showIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="brand-2">DKG Development</p>
              <h1>Hi there! I'm <AuroraText>Louis McHugh</AuroraText></h1>
            </div>
            <span className="glow-line"></span>
            <div className="flex flex-col items-center gap-4">
              <h5>
                <span className="typing-cursor">
                  <TypingText texts={["I'm a Front End Developer", "I Love React & Tailwind", "Let's Build Something Awesome!"]} />
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
            <div className="descent-scroll-cue">
              <span>scroll to descend</span>
              <span></span>
            </div>
          </div>
        </div>

        {/* 2. Space — stop 2 (about) */}
        <div id="about" className="descent-space-section">
          <div data-drift="0.06" className="descent-space-grid">
            <Constellation />
            <div>
              <p>
                I'm a frontend developer with a full-stack background and a habit
                of learning by building. I've run my own Shopify store, shipped a
                client project from brief to launch, and now I'm interning at
                Hyvä, building theme and CMS tooling used by Magento developers.
              </p>
              <p className="descent-space-note">
                I like reading unfamiliar codebases, figuring out what's actually
                needed, and getting things done. Currently working across React,
                Next.js, PHP, and Magento, with Claude Code and Cursor in the mix
                every day.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Clouds — transition zone / portal, skills content stop */}
        <div id="skills" className="descent-clouds-section">
          <div data-cloud-sync data-drift="0.05" className="descent-clouds-content">
              <Skills />
          </div>
        </div>

        {/* 4. Sky/peaks — emerging in-atmosphere, work content */}
        <div id="work" className="descent-peaks-section">
          <Projects />
        </div>

        {/* 5. Footer — mountain base */}
        <div id="contact" className="descent-footer-section">
          <div className="descent-footer-content">
            <Contact />
          </div>
          <div className="descent-footer-bar">
            <p>© Louis McHugh 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;