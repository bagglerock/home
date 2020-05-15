import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { projects } from 'sections/Projects/projectData';
import { Card } from 'sections/share/Card/Card';

export const Projects: React.FC = () => (
  <div className="projects" id="portfolio">
    <div className="section-header">
      <h3>Projects</h3>
      <FontAwesomeIcon className="section-header-icon" icon={faToolbox} size="3x" />
    </div>

    <div className="card">
      {projects.map(project => (
        <div key={project.name}>
          <Card {...project} />
        </div>
      ))}
    </div>
  </div>
);
