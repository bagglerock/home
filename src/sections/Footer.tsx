import React from "react";

export const Footer: React.FC = () => (
  <>
    <h4>&copy Oscar Villalta 2019</h4>
    <ul className="social-links">
      <li>
        <a href="https://github.com/bagglerock" target="_blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/oscar-villalta/" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://www.hackerrank.com/oscarvillaltanj" target="_blank">
          <i className="fab fa-hackerrank fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="mailto:oscarvillaltanj@gmail.com" target="_blank">
          <i className="fas fa-envelope-square fa-2x"></i>
        </a>
      </li>
    </ul>
  </>
);
