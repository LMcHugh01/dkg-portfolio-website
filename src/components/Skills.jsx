import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/Skills.css";

import htmlLogo from "../assets/skill-icons/html-icon.png";
import cssLogo from "../assets/skill-icons/css-icon.png";
import jsLogo from "../assets/skill-icons/javascript-icon.png";
import reactLogo from "../assets/skill-icons/react-icon.png";
import tailwindLogo from "../assets/skill-icons/tailwind-icon.png";
import nodeJSLogo from "../assets/skill-icons/nodeJS-icon.png";
import expressLogo from "../assets/skill-icons/express-icon.png";
import mongoDBLogo from "../assets/skill-icons/mongoDB-icon.png";
import gitLogo from "../assets/skill-icons/git-icon.png";
import figmaLogo from "../assets/skill-icons/figma-icon.png";
import shopifyLogo from "../assets/skill-icons/shopify-icon.png";


import frontendIcon from "../assets/skill-icons/frontend-icon.png";
import backendIcon from "../assets/skill-icons/backend-icon.png";
import toolsIcon from "../assets/skill-icons/tools-icon.png";

const skillsData = {
  "Front-end": [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JavaScript", img: jsLogo },
    { name: "React", img: reactLogo },
    { name: "Tailwind CSS", img: tailwindLogo },
  ],
  "Back-end": [
    { name: "Node.js", img: nodeJSLogo },
    { name: "Express", img: expressLogo },
    { name: "MongoDB", img: mongoDBLogo },
  ],
  Tools: [
    { name: "Git", img: gitLogo },
    { name: "Figma", img: figmaLogo },
    { name: "Shopify", img: shopifyLogo },
  ],
};

const tabs = [
  { key: "Front-end", img: frontendIcon },
  { key: "Back-end", img: backendIcon },
  { key: "Tools", img: toolsIcon },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Front-end");

  return (
    <div className="skills-section">
      <h2 className="skills-heading">What I Bring to the Table</h2>

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
                <img src={skill.img} alt={skill.name} className="skill-icon" />
                <span>{skill.name}</span>
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
            <img src={tab.img} alt={tab.key} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

