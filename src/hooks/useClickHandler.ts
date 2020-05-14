import { useEffect, useState } from 'react';

export const useNav = (parentNode: React.MutableRefObject<HTMLDivElement | null>) => {
  const [shouldShowNav, setShouldShowNav] = useState(false);

  const toggleNav = () => {
    setShouldShowNav(!shouldShowNav);
  };

  const closeNav = () => {
    setShouldShowNav(false);
  };

  useEffect(() => {
    const handleClickOut = (e: any) => {
      if (parentNode.current == null) {
        return;
      }

      if (parentNode.current.contains(e.target)) {
        return;
      }

      setShouldShowNav(false);
    };

    document.addEventListener('mousedown', handleClickOut);

    return () => {
      document.removeEventListener('mousedown', handleClickOut);
    };
  }, [parentNode]);

  return {
    shouldShowNav,
    toggleNav,
    closeNav,
  };
};
