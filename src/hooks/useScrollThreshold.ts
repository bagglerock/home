import { useEffect, useState } from "react";

/**
 *
 * @param threshold number of pixels from the top where a threshold is set
 *
 * Re renders will be 4 at the moment.
 */
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
    isThresholdSet,
  };
};
