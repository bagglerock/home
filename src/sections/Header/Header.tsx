import classnames from "classnames";
import { useScrollThreshold } from "hooks/useScrollThreshold";
import React from "react";

export const Header: React.FC = () => {
  const { isThresholdSet } = useScrollThreshold(10);

  const headerClasses = classnames({
    header: true,
    "header-absolute": !isThresholdSet,
    "header-fixed": isThresholdSet,
  });

  return (
    <div className={headerClasses}>
      <ul>
        <li id="sticky-icon">
          <i className="fa fa-bars"></i>
        </li>
        <li>
          <a href="#home" className="link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="link">
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" className="link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
