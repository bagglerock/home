import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logos } from 'sections/Logos/logosData';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';

export const Logos: React.FC = () => (
  <div className="logos">
    <div className="logos-header">
      <h3>Logos</h3>
      <FontAwesomeIcon className="section-header-icon" icon={faDrawPolygon} size="3x" />
    </div>

    <div className="logo">
      {logos.map(logo => (
        <div key={logo.name}>
          <div className="logo-header">
            <h5>{logo.name}</h5>
          </div>
          <div className="logo-image">
            <img src={logo.img} alt={logo.img} />
          </div>
        </div>
      ))}
    </div>
  </div>
);
