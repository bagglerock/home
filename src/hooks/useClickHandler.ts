import { useState } from "react";

export const useClickHandler = () => {
  const [shouldShowNav, setShouldShowNav] = useState(false);

  const toggleNav = () => {
    setShouldShowNav(!shouldShowNav);
  };

  const closeNav = () => {
    setShouldShowNav(false);
  };

  return {
    shouldShowNav,
    toggleNav,
    closeNav,
  };
};
