import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Projects.css";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png";
import RecipeXImg from "../assets/project-screenshots/RecipeX.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";

import reactLogo from "../assets/skill-icons/black/react-icon.png";
import tailwindLogo from "../assets/skill-icons/black/tailwind-icon.png";

const projectData = {
  ReelRatings: {
    name: "ReelRatings",
    img: ReelRatingsImg,
    projectType: "Personal Project",
    languages: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
  },
  RecipeX: {
    name: "RecipeX",
    img: RecipeXImg,
    projectType: "Personal Project",
    languages: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
  },
  "Drunk Games": {
    name: "Drunk Games",
    img: DrunkGamesImg,
    projectType: "Personal Project",
    languages: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
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
                      <img
                        src={lang.logo}
                        alt={lang.name}
                        className="projectCard-language-logo"
                      />
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
