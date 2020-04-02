import { useEffect, useState } from "react";

// Re Renders: 4 (better)
export const useScrollThreshold = (threshold: number) => {
  const [isThresholdSet, setIsThresholdSet] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > threshold) {
        setIsThresholdSet(true);
      } else {
        setIsThresholdSet(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > threshold) {
          setIsThresholdSet(true);
        } else {
          setIsThresholdSet(false);
        }
      });
    };
  });

  return {
    isThresholdSet
  };
};
