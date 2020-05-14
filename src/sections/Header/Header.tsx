import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useClickHandler } from "hooks/useClickHandler";
import { useScrollThreshold } from "hooks/useScrollThreshold";
import React from "react";

export const Header: React.FC = () => {
  const { isThresholdSet } = useScrollThreshold(10);
  const { shouldShowNav, toggleNav, closeNav } = useClickHandler();

  const headerClasses = classnames({
    header: true,
    "header-absolute": !isThresholdSet,
    "header-fixed": isThresholdSet,
    "header--open": shouldShowNav,
  });

  return (
    <div className={headerClasses}>
      <ul>
        <li id="hamburger-button">
          <FontAwesomeIcon icon={faBars} onClick={toggleNav} />
        </li>
        <li>
          <a href="#home" className="link" onClick={closeNav}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="link" onClick={closeNav}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" className="link" onClick={closeNav}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="link" onClick={closeNav}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
