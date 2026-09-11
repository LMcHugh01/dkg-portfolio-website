import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/Skills.css";

// Front-end
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiAlpinedotjs } from "react-icons/si";

// Back-end & CMS
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiPhp, SiMagento } from "react-icons/si";

// Databases & APIs
import { SiMongodb } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

// Tools & Platforms
import { FaGitAlt, FaShopify } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";
import { SiVercel, SiNetlify, SiPostman, SiSanity, SiStripe, SiCanva } from "react-icons/si";

// AI-Assisted Dev (no official icons yet — using stand-ins)
import { TbRobot, TbCursorText } from "react-icons/tb";

// Tab marker icons (react-icons, no extra image assets needed)
import { LuLayoutPanelLeft, LuServer, LuDatabase, LuWrench, LuSparkles } from "react-icons/lu";

const skillsData = {
  "Front-end": [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Alpine.js", icon: <SiAlpinedotjs /> },
  ],
  "Back-end & CMS": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Magento", icon: <SiMagento /> },
    { name: "Hyvä", icon: <LuLayoutPanelLeft /> }, // no official icon — placeholder
  ],
  "Data & APIs": [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Supabase", icon: <RiSupabaseFill /> },
    { name: "REST APIs", icon: <TbApi /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <BiLogoFigma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Shopify", icon: <FaShopify /> },
    { name: "Sanity", icon: <SiSanity /> },
    { name: "Stripe", icon: <SiStripe /> },
    { name: "Canva", icon: <SiCanva /> },
  ],
  "AI-Assisted Dev": [
    { name: "Claude Code", icon: <TbRobot /> }, // no official icon — placeholder
    { name: "Cursor", icon: <TbCursorText /> },  // no official icon — placeholder
  ],
};

const tabs = [
  { key: "Front-end", icon: <LuLayoutPanelLeft /> },
  { key: "Back-end & CMS", icon: <LuServer /> },
  { key: "Data & APIs", icon: <LuDatabase /> },
  { key: "Tools", icon: <LuWrench /> },
  { key: "AI-Assisted Dev", icon: <LuSparkles /> },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Front-end");

  return (
    <div className="skills-section">
      <h2 className="skills-heading">Tech Stack</h2>

      <div className="skills-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="skills-list"
          >
            {skillsData[activeTab].map((skill) => (
              <div key={skill.name} className="skill-item">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="active-tab-name">
        <h4 className="active-name">{activeTab}</h4>
      </div>

      <div className="tabs-slider">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-marker ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="skill-icon">{tab.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;