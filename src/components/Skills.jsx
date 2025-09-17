import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import '../style/Skills.css'

const skillsData = {
  "Front-end": [
    { name: "HTML", img: "/src/assets/skill-icons/html-icon.png" },
    { name: "CSS", img: "/src/assets/skill-icons/css-icon.png" },
    { name: "JavaScript", img: "/src/assets/skill-icons/javascript-icon.png" },
    { name: "React", img: "/src/assets/skill-icons/react-icon.png" },
    { name: "Tailwind CSS", img: "/src/assets/skill-icons/tailwind-icon.png" },
  ],
  "Back-end": [
    { name: "Node.js", img: "/src/assets/skill-icons/nodeJS-icon.png" },
    { name: "Express", img: "/src/assets/skill-icons/express-icon.png" },
    { name: "MongoDB", img: "/src/assets/skill-icons/mongoDB-icon.png" },
  ],
  Tools: [
    { name: "Git", img: "/src/assets/skill-icons/git-icon.png" },
    { name: "Figma", img: "/src/assets/skill-icons/figma-icon.png" },
    { name: "Shopify", img: "/src/assets/skill-icons/shopify-icon.png" },
  ],
};


const tabs = [
  { key: "Front-end", img: "/src/assets/skill-icons/frontend-icon.png" },
  { key: "Back-end", img: "/src/assets/skill-icons/backend-icon.png" },
  { key: "Tools", img: "/src/assets/skill-icons/tolls-icon.png" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Front-end");

  return (
    <div className="skills-section">
      <h2 className="skills-heading">What I Bring to the Table</h2>

      {/* Skills */}
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

