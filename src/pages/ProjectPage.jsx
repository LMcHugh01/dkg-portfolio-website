import React from "react";
import { useParams } from "react-router-dom";
import "../style/ProjectPage.css";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png";
import NeighbrImg from "../assets/project-screenshots/Neighbr.png";
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png";
import fleaRdamImg from "../assets/project-screenshots/fleaRdam.png";
import BackToProjects from "../components/BackToProjects";

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
    description:
      "ReelRatings is a modern web application for browsing, rating, and discovering movies. Users can explore films by genre, rate and review them, and create personalized profiles with favorites and watchlists. The platform features a sleek UI with custom branding, dynamic backgrounds, and a transparent navbar. Future plans include AI-powered recommendations, trailer previews, and social features for a more interactive experience.",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://reelratings.netlify.app",
  },
  Neighbr: {
    name: "Neighbr",
    img: NeighbrImg,
    projectType: "Personal Project",
    description:
      "Neighbr is a community-driven platform that connects users with local service providers for tasks and projects. Users can browse, post, and assign jobs across categories like home services, fitness, tutoring, and more. Built with React and TailwindCSS, the app focuses on a clean, responsive interface for easy navigation. Planned features include user profiles with ratings, job tracking, and personalized recommendations for finding the right service providers nearby.",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "NodeJS", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    startYear: 2025,
    endYear: "Present",
    link: "https://neighbr.netlify.app",
  },
  "DKG E-Commerce Store": {
    name: "DKG E-Commerce Store",
    img: DrunkGamesImg,
    projectType: "Client Project",
    description:
      "Drunk Games is a personal e-commerce project that sells unique and entertaining drinking games. The platform is built with React and TailwindCSS, featuring a clean and responsive design optimized for mobile and desktop shopping experiences. It includes product listings, a shopping cart, and checkout flow, with future plans to expand into user reviews, bundle offers, and social sharing features.",
    languages: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <RiTailwindCssFill /> },
      { name: "Supabase", icon: <RiSupabaseFill /> },
    ],
    startYear: 2023,
    endYear: "Present",
    link: "https://drunkknightgames.netlify.app/",
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
              <span className="project-language-icon">{lang.icon}</span>
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
