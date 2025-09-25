import React from "react";
import { useParams } from "react-router-dom";
import "../style/ProjectPage.css";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png";
import RecipeXImg from "../assets/project-screenshots/RecipeX.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";
import BackToProjects from "../components/BackToProjects";

import reactLogo from "../assets/skill-icons/black/react-icon.png";
import tailwindLogo from "../assets/skill-icons/black/tailwind-icon.png";

const projectData = {
  ReelRatings: {
    name: "ReelRatings",
    img: ReelRatingsImg,
    projectType: "Personal Project",
    description:
      "ReelRatings is a modern web application for browsing, rating, and discovering movies. Users can explore films by genre, rate and review them, and create personalized profiles with favorites and watchlists. The platform features a sleek UI with custom branding, dynamic backgrounds, and a transparent navbar. Future plans include AI-powered recommendations, trailer previews, and social features for a more interactive experience.",
    languages: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://reelratings.netlify.app",
  },
  RecipeX: {
    name: "RecipeX",
    img: RecipeXImg,
    projectType: "Personal Project",
    description:
      "RecipeX is a personal project that serves as a modern digital recipe book where users can save, browse, and share their favorite recipes. Built with React and TailwindCSS, the app emphasizes a clean and intuitive design for quick navigation across devices. Planned features include user accounts, community recipe sharing, ratings, and AI-powered suggestions for meal ideas based on available ingredients.",
    languages: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://recipex.netlify.app",
  },
  "Drunk Games": {
    name: "Drunk Games",
    img: DrunkGamesImg,
    projectType: "Personal Project",
    description:
      "Drunk Games is a personal e-commerce project that sells unique and entertaining drinking games. The platform is built with React and TailwindCSS, featuring a clean and responsive design optimized for mobile and desktop shopping experiences. It includes product listings, a shopping cart, and checkout flow, with future plans to expand into user reviews, bundle offers, and social sharing features.",
    languages: [
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
    startYear: 2023,
    endYear: "Present",
    link: "https://drunkgames.com",
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
        <div className="project-subheading">
        <p className="project-type">{project.projectType}</p>
        <p className="project-dates">Since {project.startYear}</p>
      </div>
        <div className="project-languages">
          {project.languages.map((lang, index) => (
            <div key={index} className="project-language">
              <img
                src={lang.logo}
                alt={lang.name}
                className="project-language-logo"
              />
            </div>
          ))}
        </div>
      
      <span className="break-line">
          <span></span>
      </span>
      {/* Languages / Tools used */}
      <p className="project-description">{project.description}</p>

      {/* Links */}
      <div className="links">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn live"
          >
            Live Demo
          </a>
        )}
      </div>

      <BackToProjects />
    </div>
  );
}

export default ProjectPage;
