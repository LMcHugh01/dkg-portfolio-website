import React from 'react'
import "../style/Projects.css";

import ReelRatingsImg from "../assets/project-screenshots/ReelRatings.png"
import RecipeXImg from "../assets/project-screenshots/RecipeX.png"
import DrunkGamesImg from "../assets/project-screenshots/DrunkGames.png"

const projectData =  [
  { name: "ReelRatings", img: ReelRatingsImg, description: "Movie Website"},
  { name: "RecipeX", img: RecipeXImg, description: "Recipe book Website" },
  { name: "Drunk Games", img: DrunkGamesImg, description: "E-Commerce Store, selling drinking games"}
]

function Projects() {
  return (
    <div className='project-section'>
      <h2 className='projects-heading'>Projects</h2>
      
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.name} className='project-card'>
            <img 
              src={project.img} 
              alt={`${project.name} screenshot`} 
              className='project-screenshot' 
            />
            
            <div className="project-content">
              <h3 className='project-name'>{project.name}</h3>
              <p className='project-description'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
