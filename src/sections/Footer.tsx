import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Footer: React.FC = () => (
  <footer>
    <h4>&copy; Oscar Villalta 2019</h4>
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
  </footer>
);
