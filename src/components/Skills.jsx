import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/Skills.css";

import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {BiLogoFigma} from "react-icons/bi";
import {FaShopify} from "react-icons/fa";
import {RiSupabaseFill} from "react-icons/ri";


import frontendIcon from "../assets/skill-icons/tab-markers/frontend-icon.png";
import backendIcon from "../assets/skill-icons/tab-markers/backend-icon.png";
import toolsIcon from "../assets/skill-icons/tab-markers/tools-icon.png";

const skillsData = {
  "Front-end": [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  ],
  "Back-end": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <BiLogoFigma /> },
    { name: "Shopify", icon: <FaShopify /> },
    { name: "Supabase", icon: <RiSupabaseFill /> },
  ],
};

const tabs = [
  { key: "Front-end", icon: frontendIcon },
  { key: "Back-end", icon: backendIcon },
  { key: "Tools", icon: toolsIcon },
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
             <img src={tab.icon} alt={tab.name} className="skill-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

