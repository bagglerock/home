import React from 'react';
import { Contact } from 'sections/Contact';
import { Footer } from 'sections/Footer';
import { Header } from 'sections/Header/Header';
import { Hero } from 'sections/Hero/Hero';
import { Logos } from 'sections/Logos/Logos';
import { Projects } from 'sections/Projects/Projects';
import { SkillSets } from 'sections/SkillSets/SkillSets';
import { Summary } from 'sections/Summary/Summary';

export const Main: React.FC = () => {
  return (
    <>
      <Header />

      <Hero />

      <Summary />

      <SkillSets />

      <Projects />

      <Logos />

      <Contact />

      <Footer />
    </>
  );
};
