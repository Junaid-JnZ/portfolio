import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = ({ data }) => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-label">SELECTED WORK</div>
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {data.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

