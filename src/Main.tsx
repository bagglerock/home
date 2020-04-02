import React, { useEffect, useState } from "react";
import { Contact } from "sections/Contact";
import { Footer } from "sections/Footer";
import { Hero } from "sections/Hero/Hero";
import { Media } from "sections/Media";
import { Projects } from "sections/Projects";
import { SkillSets } from "sections/SkillSets";
import { Summary } from "sections/Summary";

export const Main: React.FC = () => {
  const { isThresholdSet } = useScrollThreshold(10);

  return (
    <>
      {isThresholdSet ? (
        <div style={{ position: "fixed", height: "100px", zIndex: 100000 }}>
          Header!!!
        </div>
      ) : (
        ""
      )}
      <Hero />

      <Summary />

      <SkillSets />

      <Projects />

      <Media />

      <Contact />

      <Footer />
    </>
  );
};

// Re Renders: 4 (better)
const useScrollThreshold = (threshold: number) => {
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
