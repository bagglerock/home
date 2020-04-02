import React, { useEffect, useState } from "react";
import { Contact } from "sections/Contact";
import { Footer } from "sections/Footer";
import { Hero } from "sections/Hero/Hero";
import { Media } from "sections/Media";
import { Projects } from "sections/Projects";
import { SkillSets } from "sections/SkillSets";
import { Summary } from "sections/Summary";

export const Main: React.FC = () => {
  const { scrollPositionY } = useScroll();

  console.log(scrollPositionY);

  return (
    <>
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

const useScroll = () => {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPositionY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScrollPositionY(window.scrollY);
      });
    };
  });

  return {
    scrollPositionY
  };
};
