import React from "react";
import { Link } from "react-router-dom";
import "../style/Projects.css";

import { projectData } from "../data/projectData.jsx";

function Projects() {
  return (
    <div className="work-section" data-reveal="work" data-drift="0.05">
      <div className="work-label">Selected work</div>

      <div className="work-grid">
        {Object.values(projectData).map((project) => {
          const isLive = project.endYear === "Present";
          const addressLabel = project.link
            ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : project.name;

          return (
            <Link key={project.name} to={`/project/${project.name}`} className="work-card">
              <div className="work-card-glow"></div>
              <div className="work-card-frame">
                <div className="work-card-topbar">
                  <div className="work-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="work-address">
                    <span className="work-address-dot">●</span>
                    {addressLabel}
                  </div>
                </div>
                <div className="work-thumb">
                  <img src={project.images[0]} alt={project.name} />
                </div>

                <div className="work-card-body">
                  <div className="work-top-row">
                    <h3 className="work-name">{project.name}</h3>
                    <div className={`work-status ${isLive ? "is-live" : "is-archived"}`}>
                      <span className="work-status-dot"></span>
                      {isLive ? "live" : "archived"}
                    </div>
                  </div>
                  <div className="work-meta">
                    {project.projectType} · Since {project.startYear}
                  </div>

                  <div className="work-stack">
                    {project.languages.map((lang, index) => (
                      <div key={index} className="work-stack-row">
                        <span className="work-stack-icon">{lang.icon}</span>
                        <span className="work-stack-name">{lang.name}</span>
                        {lang.category && (
                          <span className="work-stack-category">{lang.category}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;