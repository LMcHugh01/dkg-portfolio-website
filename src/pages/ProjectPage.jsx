import React from "react";
import { useParams, Link } from "react-router-dom";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png";
import RecipeXImg from "../assets/project-screenshots/RecipeX.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";

const projectData = {
  ReelRatings: {
    name: "ReelRatings",
    img: ReelRatingsImg,
    description: "A movie review website where users can rate and discover films.",
  },
  RecipeX: {
    name: "RecipeX",
    img: RecipeXImg,
    description: "A recipe book app to save, browse, and share delicious recipes.",
  },
  "Drunk Games": {
    name: "Drunk Games",
    img: DrunkGamesImg,
    description: "An e-commerce store selling creative drinking games.",
  },
};

function ProjectPage() {
  const { projectName } = useParams();
  const project = projectData[projectName];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-page">
      <h1>{project.name}</h1>
      <img src={project.img} alt={project.name} className="project-page-img" />
      <p>{project.description}</p>

      <Link to="/" className="back-link">← Back to Projects</Link>
    </div>
  );
}

export default ProjectPage;
