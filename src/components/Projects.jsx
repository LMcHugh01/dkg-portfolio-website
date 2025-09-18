import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/Projects.css";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png";
import RecipeXImg from "../assets/project-screenshots/RecipeX.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";

const projectData = [
  { name: "ReelRatings", img: ReelRatingsImg, description: "Movie Website" },
  { name: "RecipeX", img: RecipeXImg, description: "Recipe book Website" },
  { name: "Drunk Games", img: DrunkGamesImg, description: "E-Commerce Store" }
];

function Projects() {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="slider">
        <button className="arrow left" onClick={prevProject}>&#10094;</button>
        
        <Link
          to={`/project/${projectData[current].name}`}
          className="project-card-link"
          style={{ textDecoration: 'none' }}
        >
          <div className="project-card">
            <img
              src={projectData[current].img}
              alt={projectData[current].name}
              className="project-screenshot"
            />
            <div className="project-content">
              <h3 className="project-name">{projectData[current].name}</h3>
              <p className="project-description">{projectData[current].description}</p>
            </div>
          </div>
        </Link>

        <button className="arrow right" onClick={nextProject}>&#10095;</button>
      </div>
    </div>
  );
}

export default Projects;
