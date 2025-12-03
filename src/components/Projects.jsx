import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Projects.css";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png";
import NeighbrImg from "../assets/project-screenshots/Neighbr.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";

import {FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {RiSupabaseFill} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {SiMongodb} from "react-icons/si";

const projectData = {
  ReelRatings: {
    name: "ReelRatings",
    img: ReelRatingsImg,
    projectType: "Personal Project",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
    ],
  },
  Neighbr: {
    name: "Neighbr",
    img: NeighbrImg,
    projectType: "Personal Project",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  "DKG E-Commerce Store": {
    name: "DKG E-Commerce Store",
    img: DrunkGamesImg,
    projectType: "Client Project",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
    ],
  },
};

function Projects() {
  return (
    <div className="project-section">
      <h2 className="projects-heading">PROJECTS</h2>

      <div className="projects-grid">
        {Object.values(projectData).map((project) => (
          <Link
            key={project.name}
            to={`/project/${project.name}`}
            className="projectCard-link"
          >
            <div className="projectCard">
              <img
                src={project.img}
                alt={project.name}
                className="projectCard-screenshot"
              />
              <div className="projectCard-content">
                <h3 className="projectCard-name">{project.name}</h3>
                <p className="projectCard-type">{project.projectType}</p>
                <div className="projectCard-languages">
                  {project.languages.map((lang, index) => (
                    <div key={index} className="projectCard-language">
                      <span className="projectCard-skillIcon">{lang.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
