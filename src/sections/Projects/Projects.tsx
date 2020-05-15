import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { projects } from 'sections/Projects/projectData';

export const Projects: React.FC = () => (
  <div className="projects" id="portfolio">
    <div className="projects-header">
      <h3>Projects</h3>
      <FontAwesomeIcon className="section-header-icon" icon={faToolbox} size="3x" />
    </div>

    <div className="project">
      {projects.map(project => (
        <div key={project.github}>
          <div className="project-header">
            <h5>{project.name}</h5>
          </div>
          <div>
            <img src={project.imgName} alt={project.imgName} />
          </div>
          <div className="project-links">
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Website
              </a>
            </div>
            <div>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
          </div>
          <div className="project-description">
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
