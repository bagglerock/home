import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <main id="home">
      <div className="hero">
        <div className="hero-contents">
          <div>
            <h1>Oscar Villalta</h1>
            <h4>Full Stack Developer</h4>
          </div>
          <div>
            <ul className="contact-links">
              <li>
                <a href="https://github.com/bagglerock" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/oscar-villalta/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/oscarvillaltanj" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faHackerrank} size="2x" />
                </a>
              </li>
              <li>
                <a href="mailto:oscarvillaltanj@gmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-arrow">
          <a href="#about">
            <FontAwesomeIcon icon={faAngleDown} size="4x" />
          </a>
        </div>
      </div>
    </main>
  );
};
