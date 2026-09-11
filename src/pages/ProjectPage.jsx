import React from "react";
import { useParams } from "react-router-dom";
import "../style/ProjectPage.css";

import { projectData } from "../data/projectData.jsx";
import BackToProjects from "../components/BackToProjects";
import Gallery from "../components/Gallery.jsx";

function ProjectPage() {
  const { projectName } = useParams();
  const project = projectData[projectName];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const isLive = project.endYear === "Present";

  return (
    <div className="project-page">
      <div className="project-page-inner">
        <BackToProjects />

        <div className="project-hero">
          <h1 className="project-title">{project.name}</h1>
          <div className="project-meta">
            <span className={`project-status ${isLive ? "is-live" : "is-archived"}`}>
              <span className="status-dot"></span>
              {isLive ? "live" : "archived"}
            </span>
            <span className="meta-divider"></span>
            <span className="meta-item">{project.projectType}</span>
            <span className="meta-divider"></span>
            <span className="meta-item">Since {project.startYear}</span>
          </div>
        </div>

        <div className="project-gallery-stack">
          <Gallery
          images={project.images}
          mobileImages={project.mobileImages}
          name={project.name}
          link={project.link}
        />

          <div className="project-stack">
            <div className="section-label">Stack</div>
            <div className="stack-list">
              {project.languages.map((lang, index) => (
                <div key={index} className="stack-row">
                  <span className="stack-icon">{lang.icon}</span>
                  <span className="stack-name">{lang.name}</span>
                  {lang.category && (
                    <span className="stack-category">{lang.category}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {project.features && project.features.length > 0 && (
          <div className="project-features">
            <div className="section-label">Key features</div>
            <div className="project-features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="project-feature-card">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="project-build">
          <div className="section-label">The build</div>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn link-btn-live"
              >
                <span className="link-btn-dot"></span>
                Live Demo
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn link-btn-source"
              >
                Source
                <span className="link-btn-arrow">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;