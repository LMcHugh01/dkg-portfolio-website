import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Projects.css";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png";
import NeighbrImg from "../assets/project-screenshots/Neighbr.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";
import fleaRdamImg from "../assets/project-screenshots/fleaRdam.png";

import {FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {RiSupabaseFill} from "react-icons/ri";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { SiStripe } from "react-icons/si";

const projectData = {
    fleaRdam: {
      name: "fleaRdam",
      img: fleaRdamImg,
      projectType: "Client Project",
      description:
        "fleaRdam is Rotterdam's first urban flea market. This full-stack website handles everything from event listings and ticket purchases to stall applications and vendor payments. Built with Next.js 15 and Sanity CMS, it features a complete stall application flow with admin review, Stripe payments, and automated emails via Resend.",
      languages: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind", icon: <RiTailwindCssFill /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Sanity", icon: <SiSanity /> },
        { name: "Stripe", icon: <SiStripe /> },
      ],
      startYear: 2025,
      endYear: "Present",
      link: "https://fleardam.com",
    },
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
