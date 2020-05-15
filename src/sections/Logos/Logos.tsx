import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { logos } from 'sections/Logos/logosData';
import { Card } from 'sections/share/Card/Card';

export const Logos: React.FC = () => (
  <div className="logos">
    <div className="section-header">
      <h3>Logos</h3>
      <FontAwesomeIcon className="section-header-icon" icon={faDrawPolygon} size="3x" />
    </div>

    <div className="card">
      {logos.map(logo => (
        <div key={logo.name}>
          <Card {...logo} />
        </div>
      ))}
    </div>
  </div>
);
