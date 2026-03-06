import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  role: string;
  year: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  year,
  problem,
  solution,
  impact,
  techStack,
  link
}) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <div>
          <h3 className="project-title">{title}</h3>
          <p className="project-role">{role} &middot; {year}</p>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Visit ${title}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        )}
      </div>

      <div className="project-details">
        <div className="project-section">
          <h4 className="project-subtitle">The Problem</h4>
          <p className="project-text">{problem}</p>
        </div>
        
        <div className="project-section">
          <h4 className="project-subtitle">The Solution</h4>
          <p className="project-text">{solution}</p>
        </div>
        
        <div className="project-section">
          <h4 className="project-subtitle">The Impact</h4>
          <p className="project-text">{impact}</p>
        </div>
      </div>

      <div className="project-footer">
        <div className="project-tech">
          {techStack.map(tech => (
            <span key={tech} className="project-tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
